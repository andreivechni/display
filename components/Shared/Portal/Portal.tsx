import { useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: { children: React.ReactNode }) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    const wrapperElement = document.createElement("div");

    document.body.appendChild(wrapperElement);

    setWrapperElement(wrapperElement);

    return () => {
      if (wrapperElement) {
        document.body.removeChild(wrapperElement);
      }
    };
  }, []);

  if (!wrapperElement) {
    return null;
  }

  return createPortal(children, wrapperElement);
};

export default Portal;
