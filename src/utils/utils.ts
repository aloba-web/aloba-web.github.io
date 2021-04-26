import { ImageSizes } from "../hooks/fetch/fetchTypes";
import { ResponsiveSizes } from "../hooks/useWindowSize";

export const createMarkup = (markup?: string) => {
  return { __html: markup || "" };
};

export const getImageBySize = (
  image: ImageSizes,
  windowSizes: ResponsiveSizes
): string => {
  if (windowSizes.isMobile) {
    return image.medium;
  }

  if (windowSizes.isTablet) {
    return image.large;
  }

  if (windowSizes.isDesktop) {
    return image.xlarge;
  }

  return image.large;
};
