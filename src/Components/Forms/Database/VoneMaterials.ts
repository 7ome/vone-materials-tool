import { useEffect, useState } from "react";
import { standardOrder } from "@volterainc/utils-ink";
import { Ink } from "@volterainc/ui-ink/node_modules/@volterainc/utils-ink";

//Problem: API doesn't have useBy properties, will have to fetch every single one(takes a while)
// and use standarOrder to sort.

export function Loadmaterials_Vone() {
  const DisplayLength = 5;
  const [data, setData] = useState([""]);
  const inkurl =
    " https://api.github.com/repos/VolteraInc/ink-database/contents/inks";
  const pasteurl =
    " https://api.github.com/repos/VolteraInc/ink-database/contents/pastes";
  useEffect(() => {
    async function fetchAPI() {
      try {
        let response = await fetch(inkurl);
        const data = await response.json();
        for (let x = 0; x < DisplayLength; x++) {
          let name = data[x].name;

          setData((arr) => [...arr, name.replace(".json", "")]);
        }
        console.log(data);
      } catch {
        console.error();
      }
    }
    fetchAPI();
  }, []);

  return {
    data,
  };
}
