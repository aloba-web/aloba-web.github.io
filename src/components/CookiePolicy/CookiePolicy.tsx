import React, { useCallback, useState } from "react";
import Button from "../Button";
import { getCookie } from "./utils";
import "./CookiePolicy.scss";

export interface CookiePolicyProps {}

declare global {
  interface Window {
    MyNamespace: any;
  }
}
const GOOGLE_ANALYTICS_ID = "G-PMXJ70RKLJ";

const CookiePolicy: React.FC<CookiePolicyProps> = () => {
  const disableStr = `ga-disable-${GOOGLE_ANALYTICS_ID}`;
  const [hasOpted, setHasOpted] = useState(!!getCookie(disableStr));

  const optOut = useCallback(() => {
    setHasOpted(true);
    document.cookie = `${disableStr}=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
    (window as any)[disableStr] = true;
  }, [disableStr]);

  const optIn = useCallback(() => {
    setHasOpted(true);
    document.cookie = `${disableStr}=false; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
    (window as any)[disableStr] = false;
  }, [disableStr]);

  return !hasOpted ? (
    <div className="cookie-policy">
      <div className="cookie-container">
        <p>
          Vi använder cookies i syfte att anpassa och förbättra innehållet på
          sidan. Läs mer om användningen och inställningarna för cookies under
          Frågor & Svar
        </p>
        <div className="button-wrapper">
          <Button buttonType="secondary" onClick={optOut}>
            Avböj
          </Button>
          <Button buttonType="secondary" onClick={optIn}>
            Acceptera
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default CookiePolicy;
