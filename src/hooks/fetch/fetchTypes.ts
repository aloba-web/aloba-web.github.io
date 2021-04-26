export interface ImageSizes {
  xlarge: string;
  large: string;
  medium: string;
  small: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

export interface CarouselItem {
  text?: string;
  image: ImageSizes;
}

export interface WhatIsAloba {
  title?: string;
  subTitle?: string;
  text?: string;
}

export interface AboutUs {
  title?: string;
  text?: string;
}

export interface Home {
  carousel?: Array<CarouselItem>;
  whatIsAloba?: WhatIsAloba;
  imageDividerFirst?: ImageSizes;
  ourProducts?: {
    title?: string;
  };
  imageDividerSecond?: ImageSizes;
  aboutUs?: AboutUs;
}

export interface StoresPage {
  title: string;
  ingress: string;
}

export interface Store {
  storeName: string;
  address: string;
  coordinates: Coordinates;
  url: string;
}

export interface RecipesPage {
  title: string;
  ingress: string;
}

export interface Recipe {
  id: string;
  directions: string;
  image: ImageSizes;
  ingredients: string;
  ingress: string;
  title: string;
}

export interface Contact {
  title?: string;
  text?: string;
  qna?: {
    title?: string;
    ingress?: string;
  };
}

export interface QnA {
  question?: string;
  answer?: string;
}

export interface QnAPage {
  title?: string;
  ingress?: string;
}

export interface About {
  title?: string;
  text?: string;
  image?: ImageSizes;
}

export interface ProductsPage {
  title?: string;
  ingress?: string;
  whatIsAloba?: {
    title: string;
    text: string;
  };
}

export interface Product {
  image: ImageSizes;
  title: string;
  subtitle: string;
  ingress: string;
  keeping: {
    title: string;
    text: string;
  };
  contains: {
    title: string;
    text: string;
  };
  nutritions: {
    energy: string;
    fat: {
      fat: string;
      ofWhich: {
        saturatedFat: string;
        monounsaturatedFat: string;
        polyunsaturatedFat: string;
      };
    };
    carbohydrates: string;
    sugars: string;
    fiber: string;
    protein: string;
    salt: string;
    rdiDisclaimer: string;
  };
  id: string;
}
