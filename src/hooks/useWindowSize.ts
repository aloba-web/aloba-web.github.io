import { useState, useEffect } from "react";

const breakpointM = 600;
const breakpointL = 900;
const breakpointXl = 1200;

interface Sizes {
  innerHeight: number;
  innerWidth: number;
  outerHeight: number;
  outerWidth: number;
}

export interface ResponsiveSizes {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
}

const getSize = (): Sizes => {
  if (typeof window === "undefined") {
    return {} as Sizes;
  }

  const { innerHeight, innerWidth, outerHeight, outerWidth } = window;

  return {
    innerHeight,
    innerWidth,
    outerHeight,
    outerWidth,
  };
};

export const breakpoints = {
  tablet: `@media (min-width: ${breakpointM})`,
  desktop: `@media (min-width: ${breakpointL})`,
  bigDesktop: `@media (min-width: ${breakpointXl})`,
};

const mapSizesToProps = ({ innerWidth }: Sizes): ResponsiveSizes => {
  return {
    isMobile: innerWidth < breakpointM,
    isTablet: innerWidth >= breakpointM && innerWidth < breakpointL,
    isDesktop: innerWidth >= breakpointL,
  };
};

const useWindowSize = (): ResponsiveSizes => {
  const [windowSize, setWindowSize] = useState(mapSizesToProps(getSize()));

  const handleResize = (): void => {
    setWindowSize(mapSizesToProps(getSize()));
  };

  useEffect((): (() => void) => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    return (): void => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
