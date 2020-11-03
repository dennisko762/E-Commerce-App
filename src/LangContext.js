import React, {
  useState,useEffect,} from "react";


  //using the Context Api we create the LangContext with empty initial values
export const LangContext = React.createContext({
  lang: "",
  currentLangData: {},
  switchLang: () => {},
});

//langContext needs to be exported to be used within other Components
export default LangContext;

export function LangProvider(props) {
  const [lang, setLang] = useState(
    window.localStorage.getItem("appUILang") || window.navigator.language
  );

//when component is mounted we fetch the language and set it to our lang
  useEffect(() => {
    const selectedLang = window.localStorage.getItem("appUILang");

    if (selectedLang) {
      setLang(selectedLang);
    }
  }, [lang]);

  const switchLang = (ln) => {
    setLang(ln);
    window.localStorage.setItem("appUILang", ln);  //setItem(key,value)
  };

  return (  //the selected language,function,and the library of translation needs to be exported to be used in other components
    <LangContext.Provider
      value={{
        lang,
        switchLang,
        currentLangData: langData[lang],
      }}  
    >
      {props.children}
    </LangContext.Provider>
  );
}

const langData = {
  "en-EN": {
    lang: {
      greeting: "Hello",
      signIn: "Sign In",
      signOut: "Sign Out",
      returns: "Returns",
      orders: "Orders",
      addToBasket: "Add to Basket",
      removeFromBasket: "Remove from basket",
      yourBasket: "Cart",
      yours: "Your",
      agb1: (
        <html>
          <p>
            By creating an account, you agree to Amazon's
            <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=508088">
              Conditions of Use
            </a>{" "}
            and{" "}
            <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=468496">
              Privacy Notice
            </a>
            .
          </p>
        </html>
      ),
    },
  },
  "de-DE": {
    lang: {
      greeting: "Hallo",
      signIn: "Anmelden",
      signOut: "Abmelden",
      returns: "Warenrückgaben",
      orders: "Bestellungen",
      addToBasket: "In den Warenkorb",
      removeFromBasket: "Löschen",
      yours: "Ihr",
      guest: "Gast",
      yourBasket: "Einkaufswagen",
      agb2: (
        <html>
          <p>
            {" "}
            Mit Ihrer Anmeldung erklären Sie sich mit unseren{" "}
            <a href="https://www.amazon.com/-/de/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fhelp%2Fcustomer%2Fdisplay.html%2Fref%3Dnav_ya_signin%3Fie%3DUTF8%26nodeId%3D508088&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&">
              Allgemeinen Geschäftsbedingungen
            </a>
            einverstanden. Bitte lesen Sie unsere
            <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">
              Datenschutzerklärung
            </a>
            , unsere
            <a href="https://www.amazon.com/b/?&node=5160028011">
              Hinweise zu Cookies
            </a>{" "}
            und unsere{" "}
            <a href="https://www.amazon.com/b/?&node=5160028011">
              Hinweise zu interessenbasierter Werbung
            </a>
          </p>
        </html>
      ),
    },
  },
};
