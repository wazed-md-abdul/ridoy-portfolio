import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

import { cn } from "@/lib/utils";


import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

import { ShimmerButton } from "./shimmer-button";
import { RainbowButton } from "./rainbow-button";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["React.js", "Next.js", "TypeScript"];
  const rightLists = ["Tailwind", "Three.js", "Node.js"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "hridaysecure444@gmail.com";
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 4000);
  };

  return (
    <div
      id={id === 4 ? "cv" : undefined}
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-[0_8px_30px_rgba(19,214,233,0.12)] transition duration-300 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        id === 6 ? "" : "bg-black",
        className
      )}
      style={{
        background: id === 6 ? "rgb(4,7,29)" : "#000000",
        backgroundColor:
          id === 6
            ? "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
            : "#000000",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(4, 28, 44)"
            gradientBackgroundEnd="rgb(4, 7, 29)"
            firstColor="19, 214, 233"
            secondColor="7, 88, 104"
            thirdColor="114, 248, 241"
            fourthColor="6, 182, 212"
            fifthColor="37, 99, 235"
            pointerColor="19, 214, 233"
          >
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 text-white`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-2 lg:gap-3 w-fit absolute -right-2 sm:-right-1 lg:right-2 top-1/2 -translate-y-1/2 z-20">
              {/* tech stack lists */}
              <div className="flex flex-col gap-1.5 sm:gap-2 lg:gap-2.5">
                {leftLists.map((item, i) => (
                  <ShimmerButton
                    key={i}
                    shimmerColor="#72F8F1"
                    shimmerSize="0.1em"
                    shimmerDuration="3s"
                    background="rgba(0, 0, 0, 1)"
                    className="!cursor-default active:translate-y-0 select-none w-full !px-3 !py-1 lg:!px-4 lg:!py-1.5 text-xs lg:text-sm font-medium text-white shadow-2xl"
                  >
                    <span className="relative z-10 text-xs lg:text-sm font-medium text-white !cursor-default whitespace-nowrap">
                      {item}
                    </span>
                  </ShimmerButton>
                ))}
                <span className="h-4 sm:h-5 lg:h-6 w-full rounded-full bg-black/40 border border-white/5 opacity-25"></span>
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2 lg:gap-2.5">
                <span className="h-4 sm:h-5 lg:h-6 w-full rounded-full bg-black/40 border border-white/5 opacity-25"></span>
                {rightLists.map((item, i) => (
                  <ShimmerButton
                    key={i}
                    shimmerColor="#72F8F1"
                    shimmerSize="0.1em"
                    shimmerDuration="3s"
                    background="rgba(0, 0, 0, 1)"
                    className="!cursor-default active:translate-y-0 select-none w-full !px-3 !py-1 lg:!px-4 lg:!py-1.5 text-xs lg:text-sm font-medium text-white shadow-2xl"
                  >
                    <span className="relative z-10 text-xs lg:text-sm font-medium text-white !cursor-default whitespace-nowrap">
                      {item}
                    </span>
                  </ShimmerButton>
                ))}
              </div>
            </div>
          )}

          {/* CV Section redirect button */}
          {id === 4 && (
            <div className="mt-5 relative z-20">
              <RainbowButton
                asChild
                className="rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-cyan-500/10 active:scale-95 transition-transform"
              >
                <a href="#cv-details" target="_blank" rel="noopener noreferrer">
                  <span>View CV &gt;</span>
                </a>
              </RainbowButton>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative z-20">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                {copied && (
                  <Lottie
                    options={{
                      loop: false,
                      autoplay: true,
                      animationData: animationData,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                    height={200}
                    width={400}
                    eventListeners={[]}
                  />
                )}
              </div>

              <RainbowButton
                onClick={handleCopy}
                className="w-full sm:w-auto px-6 py-2.5 gap-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-cyan-500/10 active:scale-95 transition-transform"
              >
                <IoCopyOutline className={copied ? "text-[#13D6E9] text-base" : "text-[#72F8F1] text-base"} />
                <span>{copied ? "Email is Copied!" : "Copy my email address"}</span>
              </RainbowButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
