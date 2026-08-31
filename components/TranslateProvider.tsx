'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function TranslateProvider() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).translate) {
      const translate = (window as any).translate;
      translate.selectLanguageTag.show = false;
      translate.service.use('client.edge');
      translate.execute();
    }
  }, []);

  return (
    <Script
      src='https://res.zvo.cn/translate/translate.js'
      strategy='afterInteractive'
      onLoad={() => {
        if (typeof window !== 'undefined' && (window as any).translate) {
          const translate = (window as any).translate;
          translate.selectLanguageTag.show = false;
          translate.service.use('client.edge');
          translate.execute();
        }
      }}
    />
  );
}
