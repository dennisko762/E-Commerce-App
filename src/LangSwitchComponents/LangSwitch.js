import React, { useContext } from "react";
import LangContext from "./LangContext";
import "./LangSwitch.css";
export default function LangSwitch() {
  const { switchLang, lang } = useContext(LangContext);
  const value = "";

  //----logic of the language changer----------------------------------------------------------------------------------------//
  //we use the Context Api to implement a language selection for the whole app and the change happens here

  return (

    <div className="LangSwitch">

      <span
        className={
          lang === "en-EN"
            ? "selectedLang flag-icon flag-icon-gb"   //flag icon change
            : "selectedLang flag-icon flag-icon-de"
        }
      ></span>
      <ul className="langSelect">
        <li className="langItem">
          <button
            type="submit"
            className={(lang === "en-EN" ? "active" : "", "eng")} //buttons to click to change the language
            onClick={() => switchLang("en-EN")}
          ></button>
          English
        </li>
        <li>
          <button
            type="submit"
            className={(lang === "de-DE" ? "active" : "", "ger")}
            onClick={() => switchLang("de-DE")}
          ></button>
          German
        </li>
      </ul>
    </div>
  );
}
