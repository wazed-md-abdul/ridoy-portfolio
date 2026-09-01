'use client';

import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { AnimatePresence, MotionConfig, type Transition, type Variant, motion } from 'framer-motion';
import React, { useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface DialogContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  uniqueId: string;
  triggerRef: React.RefObject<HTMLDivElement>;
}

const DialogContext = React.createContext<DialogContextType | null>(null);

function useDialog() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
}

type DialogProviderProps = {
  children: React.ReactNode;
  transition?: Transition;
};

function DialogProvider({ children, transition }: DialogProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const uniqueId = useId();
  const triggerRef = useRef<HTMLDivElement>(null);

  const contextValue = useMemo(
    () => ({ isOpen, setIsOpen, uniqueId, triggerRef }),
    [isOpen, uniqueId]
  );

  return (
    <DialogContext.Provider value={contextValue}>
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </DialogContext.Provider>
  );
}

type DialogProps = {
  children: React.ReactNode;
  transition?: Transition;
};

function Dialog({ children, transition }: DialogProps) {
  return (
    <DialogProvider transition={transition}>
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </DialogProvider>
  );
}

type DialogTriggerProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  triggerRef?: React.RefObject<HTMLDivElement>;
};

function DialogTrigger({ children, className, style, triggerRef }: DialogTriggerProps) {
  const { setIsOpen, isOpen } = useDialog();

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setIsOpen(!isOpen);
      }
    },
    [isOpen, setIsOpen]
  );

  return (
    <div
      ref={triggerRef}
      className={cn('relative inline-flex', className)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={style}
      role="button"
      aria-haspopup="dialog"
      aria-expanded={isOpen}
    >
      {children}
    </div>
  );
}

type DialogContentProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

function DialogContent({ children, className, style }: DialogContentProps) {
  const { setIsOpen, isOpen, uniqueId, triggerRef } = useDialog();
  const containerRef = useRef<HTMLDivElement>(null);
  const [firstFocusableElement, setFirstFocusableElement] = useState<HTMLElement | null>(null);
  const [lastFocusableElement, setLastFocusableElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
      if (event.key === 'Tab') {
        if (!firstFocusableElement || !lastFocusableElement) return;

        if (event.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            event.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            event.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsOpen, firstFocusableElement, lastFocusableElement]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const focusableElements = containerRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements && focusableElements.length > 0) {
        setFirstFocusableElement(focusableElements[0] as HTMLElement);
        setLastFocusableElement(focusableElements[focusableElements.length - 1] as HTMLElement);
        requestAnimationFrame(() => {
          (focusableElements[0] as HTMLElement).focus();
        });
      }

      if (containerRef.current) {
        containerRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = '';
      triggerRef.current?.focus();
    }
  }, [isOpen, triggerRef]);

  return (
    <motion.div
      ref={containerRef}
      className={cn('overflow-hidden rounded-3xl border border-[#13D6E9]/40 bg-[#04071D] text-white shadow-2xl', className)}
      style={{
        ...style,
        willChange: 'transform, opacity',
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`dialog-title-${uniqueId}`}
      aria-describedby={`dialog-description-${uniqueId}`}
      initial={{ scale: 0.94, opacity: 0, y: 16 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.96, opacity: 0, y: 10 }}
      transition={{
        duration: 0.22,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

type DialogContainerProps = {
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  style?: React.CSSProperties;
};

function DialogContainer({ children, className, overlayClassName }: DialogContainerProps) {
  const { isOpen, setIsOpen, uniqueId } = useDialog();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          <motion.div
            key={`backdrop-${uniqueId}`}
            className={cn(
              'fixed inset-0 h-full w-full bg-black/80 backdrop-blur-xl',
              overlayClassName
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
            }}
            onClick={() => setIsOpen(false)}
          />
          <div
            className={cn('relative z-10 w-full max-w-lg mx-auto', className)}
            style={{ willChange: 'transform' }}
          >
            {children}
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

type DialogTitleProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

function DialogTitle({ children, className, style }: DialogTitleProps) {
  return (
    <h2 className={className} style={style}>
      {children}
    </h2>
  );
}

type DialogSubtitleProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

function DialogSubtitle({ children, className, style }: DialogSubtitleProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

type DialogDescriptionProps = {
  children: React.ReactNode;
  className?: string;
  disableLayoutAnimation?: boolean;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
};

function DialogDescription({
  children,
  className,
  variants,
}: DialogDescriptionProps) {
  const { uniqueId } = useDialog();

  return (
    <div
      key={`dialog-description-${uniqueId}`}
      className={className}
      id={`dialog-description-${uniqueId}`}
    >
      {children}
    </div>
  );
}

type DialogImageProps = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
};

function DialogImage({ src, alt, className, style }: DialogImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(className)}
      style={style}
    />
  );
}

type DialogCloseProps = {
  children?: React.ReactNode;
  className?: string;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
};

function DialogClose({ children, className }: DialogCloseProps) {
  const { setIsOpen } = useDialog();

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <button
      onClick={handleClose}
      type="button"
      aria-label="Close dialog"
      className={cn('absolute right-6 top-6 text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10', className)}
    >
      {children || <X size={20} />}
    </button>
  );
}

export {
  Dialog,
  DialogClose,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogImage,
  DialogSubtitle,
  DialogTitle,
  DialogTrigger,
  useDialog,
};
