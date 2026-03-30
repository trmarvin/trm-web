"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    sefaria?: {
      link: (options?: {
        dynamic?: boolean;
        mode?: "popup-click" | "link";
        contentLang?: "bilingual" | "english" | "hebrew";
      }) => void;
    };
  }
}

export default function SefariaLinker() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.sefaria) {
      window.sefaria.link({
        dynamic: true,
        mode: "popup-click",
        contentLang: "bilingual",
      });
    }
  }, [pathname]);

  return (
    <Script
      src="https://www.sefaria.org/linker.v3.js"
      strategy="afterInteractive"
      onLoad={() => {
        window.sefaria?.link({
          dynamic: true,
          mode: "popup-click",
          contentLang: "bilingual",
        });
      }}
    />
  );
}
