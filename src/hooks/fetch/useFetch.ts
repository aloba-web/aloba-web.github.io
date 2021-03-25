import { useEffect, useState } from "react";
import mapData from "../../hooks/fetch/mappers";
import { PAGE } from "../../pages";

export enum POST_TYPE {
  PRODUCTS = "product",
  RECIPES = "recipes",
  STORES = "stores",
  QNA = "qna",
}

interface useFetchProps {
  page?: PAGE;
  postType?: POST_TYPE;
  slug?: string;
  filter?: string;
}

const useFetch = ({
  page,
  postType,
  slug,
  filter,
}: useFetchProps): { complete: boolean; data: any } => {
  const API_URL = "https://api.alobafoods.com/wp-json/wp/v2/";
  const [complete, setComplete] = useState<boolean>(false);
  const [data, setData] = useState<any>(undefined);
  const fetchData = async ({
    path,
    page,
    postType,
  }: {
    path: string;
    page?: PAGE;
    postType?: POST_TYPE;
  }) => {
    const response = await fetch(path);
    const data = await response.json();
    let mappedData;
    if (page) {
      const [{ acf: dataToMap }] = data;
      mappedData = mapData(dataToMap, page);
    }

    if (postType) {
      const dataToMap = data.map((item: any) => ({
        ...item.acf,
        id: item.slug,
      }));
      mappedData = mapData(dataToMap, postType);
    }

    setData(mappedData);
    setComplete(true);
  };

  useEffect(() => {
    if (page) {
      fetchData({ path: `${API_URL}pages?slug=${page}`, page });
    }

    if (postType) {
      fetchData({
        path: `${API_URL}${postType}${slug ? `?slug=${slug}` : ""}${
          filter ? `?filter${filter}&per_page=99` : "?&per_page=99"
        }`,
        postType,
      });
    }
  }, [page, postType, slug, filter]);

  return { complete, data };
};

export default useFetch;
