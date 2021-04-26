import { PAGE } from "../../pages";
import {
  About,
  CarouselItem,
  Contact,
  Home,
  Product,
  ProductsPage,
  QnA,
  QnAPage,
  Recipe,
  RecipesPage,
  Store,
  StoresPage,
} from "./fetchTypes";
import { POST_TYPE } from "./useFetch";

const mapData = (data: any, type: PAGE | POST_TYPE) => {
  switch (type) {
    case PAGE.HOME: {
      return mapHome(data);
    }
    case POST_TYPE.PRODUCTS: {
      return mapProducts(data);
    }
    case POST_TYPE.RECIPES: {
      return mapRecipes(data);
    }
    case POST_TYPE.STORES: {
      return mapStores(data);
    }
    case PAGE.STORES: {
      return mapStoresPage(data);
    }
    case PAGE.PRODUCTS: {
      return mapProductsPage(data);
    }
    case PAGE.ABOUT: {
      return mapAbout(data);
    }
    case POST_TYPE.QNA: {
      return mapQnA(data);
    }
    case PAGE.QNA: {
      return mapQnAPage(data);
    }
    case PAGE.CONTACT: {
      return mapContact(data);
    }
    case PAGE.RECIPES: {
      return mapRecipesPage(data);
    }
    default: {
      return undefined;
    }
  }
};

const mapRecipesPage = (data: any): RecipesPage => ({
  title: data.title,
  ingress: data.ingress,
});

const mapContact = (data: any): Contact => ({
  title: data.title,
  text: data.text,
  qna: {
    title: data.qna?.title,
    ingress: data.qna?.ingress,
  },
});

const mapQnA = (data: any): Array<QnA> =>
  data
    .filter((qna: any) => qna)
    .map((qna: any): QnA => ({ question: qna.question, answer: qna.answer }));

const mapQnAPage = (data: any): QnAPage => ({
  title: data.title,
  ingress: data.ingress,
});

const mapAbout = (data: any): About => ({
  title: data.title,
  text: data.text,
  image: {
    small: data.image?.sizes?.medium,
    medium: data.image?.sizes?.medium_large,
    large: data.image?.sizes?.large,
    xlarge: data.image?.sizes && data.image?.sizes["2048x2048"],
  },
});

const mapProductsPage = (data: any): ProductsPage => ({
  title: data.title,
  ingress: data.ingress,
  whatIsAloba: {
    title: data.whatIsAloba?.title,
    text: data.whatIsAloba.text,
  },
});

const mapStoresPage = (data: any): StoresPage => ({
  title: data.title,
  ingress: data.ingress,
});

const mapStores = (data: any): Array<Store> => {
  return data
    .filter((item: any) => item)
    .map(
      (store: any): Store => {
        return {
          storeName: store.storeName,
          address: store.address,
          coordinates: {
            lat: store.coordinates?.lat,
            lng: store.coordinates?.lng,
          },
          url: store.url,
        };
      }
    );
};

const mapRecipes = (data: any): Array<Recipe> => {
  return data
    .filter((item: any) => item)
    .map(
      (recipe: any): Recipe => {
        return {
          id: recipe.id,
          title: recipe.title,
          ingress: recipe.ingress,
          directions: recipe.directions,
          ingredients: recipe.ingredients,
          image: {
            small: recipe.image?.sizes?.medium,
            medium: recipe.image?.sizes?.medium_large,
            large: recipe.image?.sizes?.large,
            xlarge: recipe.image?.sizes && recipe.image?.sizes["2048x2048"],
          },
        };
      }
    );
};

const mapProducts = (data: any): Array<Product> => {
  return data
    .filter((item: any) => item)
    .map(
      (product: any): Product => {
        return {
          title: product.title,
          subtitle: product.subtitle,
          contains: {
            title: product.contains.title,
            text: product.contains.text,
          },
          image: {
            small: product.image?.sizes?.medium,
            medium: product.image?.sizes?.medium_large,
            large: product.image?.sizes?.large,
            xlarge: product.image?.sizes && product.image?.sizes["2048x2048"],
          },
          ingress: product.ingress,
          keeping: {
            title: product.keeping.title,
            text: product.keeping.text,
          },
          nutritions: {
            energy: product.nutritions.energy,
            fat: {
              fat: product.nutritions.fat.fat,
              ofWhich: {
                saturatedFat: product.nutritions.fat.ofWhich.saturatedFat,
                monounsaturatedFat:
                  product.nutritions.fat.ofWhich.monounsaturatedFat,
                polyunsaturatedFat:
                  product.nutritions.fat.ofWhich.polyunsaturatedFat,
              },
            },
            carbohydrates: product.nutritions.carbohydrates,
            fiber: product.nutritions.fiber,
            protein: product.nutritions.protein,
            salt: product.nutritions.salt,
            sugars: product.nutritions.sugars,
            rdiDisclaimer: product.nutritions.rdiDisclaimer,
          },
          id: product.id,
        };
      }
    );
};

const mapHome = (data: any): Home => {
  const carousel: Array<CarouselItem> = Object.values(data.carousel)
    .filter((item) => item)
    .map(
      (item: any): CarouselItem => ({
        text: item.text,
        image: {
          small: item.image?.sizes?.medium,
          medium: item.image?.sizes?.medium_large,
          large: item.image?.sizes?.large,
          xlarge: item.image?.sizes && item.image?.sizes["2048x2048"],
        },
      })
    );

  return {
    carousel,
    whatIsAloba: {
      title: data.whatIsAloba?.title,
      subTitle: data.whatIsAloba?.subTitle,
      text: data.whatIsAloba?.text,
    },
    imageDividerFirst: {
      small: data.imageDividerFirst?.image.sizes.medium,
      medium: data.imageDividerFirst?.image.sizes.medium_large,
      large: data.imageDividerFirst?.image.sizes.large,
      xlarge: data.imageDividerFirst?.image.sizes["2048x2048"],
    },
    ourProducts: { title: data.ourProducts?.title },
    imageDividerSecond: {
      small: data.imageDividerSecond?.image.sizes.medium,
      medium: data.imageDividerSecond?.image.sizes.medium_large,
      large: data.imageDividerSecond?.image.sizes.large,
      xlarge: data.imageDividerSecond?.image.sizes["2048x2048"],
    },
    aboutUs: {
      title: data.aboutUs?.title,
      text: data.aboutUs?.text,
    },
  };
};

export default mapData;
