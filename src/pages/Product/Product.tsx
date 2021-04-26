import React from "react";
import { useParams } from "react-router-dom";
import useFetch, { POST_TYPE } from "../../hooks/fetch/useFetch";
import { Product } from "../../hooks/fetch/fetchTypes";
import { createMarkup, getImageBySize } from "../../utils/utils";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";
import "./Product.scss";
import PageWrapper from "../PageWrapper";
import useWindowSize from "../../hooks/useWindowSize";

interface RouteParams {
  id: string;
}

const getNutritions: React.FC<Product> = (product: Product) => (
  <div className="nutritions-container">
    <div className="nutritions-wrapper">
      <table>
        <tr>
          <th>Näringsvärden</th>
          <th>per 100 g</th>
        </tr>
        <tr>
          <td>Energi</td>
          <td
            dangerouslySetInnerHTML={createMarkup(product.nutritions.energy)}
          />
        </tr>
        <tr>
          <td>Fett</td>
          <td
            dangerouslySetInnerHTML={createMarkup(product.nutritions.fat.fat)}
          />
        </tr>
        <tr>
          <td className="indent">varav mättat fett</td>
          <td
            dangerouslySetInnerHTML={createMarkup(
              product.nutritions.fat.ofWhich.saturatedFat
            )}
          />
        </tr>
        <tr>
          <td className="indent">varav enkelomättat fett</td>
          <td
            dangerouslySetInnerHTML={createMarkup(
              product.nutritions.fat.ofWhich.monounsaturatedFat
            )}
          />
        </tr>
        <tr>
          <td className="indent">varav fleromättat fett</td>
          <td
            dangerouslySetInnerHTML={createMarkup(
              product.nutritions.fat.ofWhich.polyunsaturatedFat
            )}
          />
        </tr>
        <tr>
          <td>Kolhydrater</td>
          <td
            dangerouslySetInnerHTML={createMarkup(
              product.nutritions.carbohydrates
            )}
          />
        </tr>
        <tr>
          <td>Sockerarter</td>
          <td
            dangerouslySetInnerHTML={createMarkup(product.nutritions.sugars)}
          />
        </tr>
        <tr>
          <td>Fiber</td>
          <td
            dangerouslySetInnerHTML={createMarkup(product.nutritions.fiber)}
          />
        </tr>
        <tr>
          <td>Protein</td>
          <td
            dangerouslySetInnerHTML={createMarkup(product.nutritions.protein)}
          />
        </tr>
        <tr>
          <td>Salt</td>
          <td dangerouslySetInnerHTML={createMarkup(product.nutritions.salt)} />
        </tr>
      </table>
    </div>
    <span
      dangerouslySetInnerHTML={createMarkup(product.nutritions?.rdiDisclaimer)}
    />
  </div>
);

const Products: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const { complete, data } = useFetch({
    postType: POST_TYPE.PRODUCTS,
    slug: id,
  });
  const windowSizes = useWindowSize();

  if (!complete || !data) return <Spinner />;

  const [product] = data as Array<Product>;

  return (
    <PageWrapper>
      <div className="product">
        <img
          src={getImageBySize(product?.image, windowSizes)}
          alt="aloba products"
        />
        <div className="container">
          <div className="header">
            <span dangerouslySetInnerHTML={createMarkup(product?.title)} />
            <span dangerouslySetInnerHTML={createMarkup(product?.subtitle)} />
          </div>
          <div className="section-wrapper">
            <div className="section">
              <span
                dangerouslySetInnerHTML={createMarkup(product.keeping?.title)}
              />
              <span
                dangerouslySetInnerHTML={createMarkup(product.keeping?.text)}
              />
            </div>
            <div className="section">
              <span
                dangerouslySetInnerHTML={createMarkup(product.contains?.title)}
              />
              <span
                dangerouslySetInnerHTML={createMarkup(product.contains?.text)}
              />
            </div>
          </div>
        </div>
        {product && getNutritions(product)}
      </div>
    </PageWrapper>
  );
};

export default Products;
