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
  image: data.image,
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
          image: recipe.image,
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
          image: product.image,
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
        imageUrl: item.image,
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
      imageUrl: data.imageDividerFirst?.image,
    },
    ourProducts: { title: data.ourProducts?.title },
    imageDividerSecond: {
      imageUrl: data.imageDividerSecond?.image,
    },
    aboutUs: {
      title: data.aboutUs?.title,
      text: data.aboutUs?.text,
    },
  };
};

export default mapData;
