"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    sefaria?: {
      link: (options?: {
        mode?: "popup-click" | "link";
        contentLang?: "bilingual" | "english" | "hebrew";
        interfaceLang?: "english" | "hebrew";
        dynamic?: boolean;
        debug?: boolean;
        whitelistSelector?: string;
        excludeFromLinking?: string;
      }) => void;
    };
  }
}

function runLinker() {
  if (!window.sefaria?.link) return;

  requestAnimationFrame(() => {
    setTimeout(() => {
      window.sefaria?.link({
        dynamic: true,
        mode: "popup-click",
        contentLang: "bilingual",
        interfaceLang: "english",
        whitelistSelector: ".sefaria-link-target",
        debug: false,
      });
    }, 50);
  });
}

export default function SefariaLinker() {
  const pathname = usePathname();

  useEffect(() => {
    runLinker();
  }, [pathname]);

  return (
    <Script
      src="https://www.sefaria.org/linker.v3.js"
      strategy="afterInteractive"
      onLoad={() => {
        runLinker();
      }}
    />
  );
}
