// set a default lang = English
export function fetchMock(lang = "en-EN") {
  return new Promise((resolve) => resolve(data[lang]));
}
const data = {
  "en-US": [
    {
      title: "Corsair K55 Gaming Keyboard (Mutli-Color RGB Lighting"


    },
  ],
  "de-DE": [
    // {
    //   signIn: "Anmelden",
    //   signOut: "Abmelden",
    //   returns: "Warenrückgaben",
    //   orders: "Bestellungen",
    //   addToBasket: "In den Warenkorb",
    //   removeFromBasket: "Löschen",
    // },
  ],
};
