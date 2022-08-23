import LangContext from "@/lib/context";
import { useContext } from "react";
import { StacksTitle } from "../stacks/styles";
import { LocationUl } from "./styles";

export default function Location() {
  const age =
    new Date().getMonth() + 1 < 10
      ? new Date().getFullYear() - 1988 - 1
      : new Date().getFullYear() - 1988;
  const lang = useContext(LangContext);

  return (
    <>
      <StacksTitle>
        {
          {
            pt_BR: "Localidade",
            en: "Location",
            es_ES: "Ubicación",
          }[lang.lang]
        }
      </StacksTitle>
      <LocationUl>
        <li>
          <h3>
            {
              {
                pt_BR: "País:",
                en: "Country:",
                es_ES: "País:",
              }[lang.lang]
            }
          </h3>
          <span>
            {
              {
                pt_BR: "Brasil",
                en: "Brazil",
                es_ES: "Brazil",
              }[lang.lang]
            }
          </span>
        </li>
        <li>
          <h3>
            {
              {
                pt_BR: "Cidade:",
                en: "City:",
                es_ES: "Ciudad:",
              }[lang.lang]
            }
          </h3>
          <span>Rio de Janeiro</span>
        </li>
        <li>
          <h3>
            {
              {
                pt_BR: "Idade:",
                en: "Age:",
                es_ES: "Años:",
              }[lang.lang]
            }
          </h3>
          <span>{age}</span>
        </li>
      </LocationUl>
    </>
  );
}
