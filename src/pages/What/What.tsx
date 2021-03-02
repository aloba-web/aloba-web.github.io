import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Salad from "../../assets/salad-min.jpeg";
import "./What.scss";

const What: React.FC = () => {
  return (
    <div className="what">
      <Navbar />
      <img className="image-divider" src={Salad} alt="divider" />
      <div className="container">
        <p>
          Välsmakande, enkelt att tillaga och god konsistens – självklart. Men
          vi  är också besjälade av hälsa. Därför har valt råvaror med omsorg
          och som  har goda egenskaper. I den blå regnskogen, i havet utanför
          Trondheim,  odlar och skördar vi Saccharina latissima, en alg som ofta
          kallas  sockertång. Den är laddad med allt från mineraler och
          vitaminer till  omega-3 och jod. Tillsammans med rotfrukter, korn,
          quinoa, kikärtor samt  inte minst havre med sina superfibrer,
          betaglukanerna, har vi utvecklat  ett nytt plantbaserat matkoncept –
          Aloba.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default What;
