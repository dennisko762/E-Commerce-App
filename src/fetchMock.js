// set a default lang = English
export function fetchMock(lang = "de-DE") {
  return new Promise((resolve) => resolve(data[lang]));
}
const data = {
  "en-EN": [
    {
      signIn: "Sign In",
      signOut: "Sign Out",
      returns: "Returns",
      orders: "Orders",
      addToBasket: "Add to Basket",
      removeFromBasket: "Remove from basket",
    },
  ],
  "de-DE": [
    {
      signIn: "Anmelden",
      signOut: "Abmelden",
      returns: "Warenrückgaben",
      orders: "Bestellungen",
      addToBasket: "In den Warenkorb",
      removeFromBasket: "Löschen",
    },
  ],
};
