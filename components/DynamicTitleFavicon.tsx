"use client";
import { useEffect } from "react";

interface Props {
  title: string;
  faviconUrl: string;
}

const DynamicTitleFavicon: React.FC<Props> = ({ title, faviconUrl }) => {
  useEffect(() => {
    document.title = title;
    const link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (link) link.href = faviconUrl;
    else {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.href = faviconUrl;
      document.head.appendChild(newLink);
    }
  }, [title, faviconUrl]);

  return null;
};

export default DynamicTitleFavicon;
