import LangContext from "@/lib/context";
import { useContext } from "react";
import { StacksTitle } from "../stacks/styles";
import { Lang, LangUl } from "./styles";

export default function Languages() {
  const lang = useContext(LangContext);

  return (
    <>
      <StacksTitle>
        {
          {
            pt_BR: "Idiomas",
            en: "Languages",
            es_ES: "Idiomas",
          }[lang.lang]
        }
      </StacksTitle>
      <LangUl>
        <li>
          <div className="pie animate no-round pie-100">100%</div>
          <Lang>
            {
              {
                pt_BR: "Português",
                en: "Portuguese",
                es_ES: "Portugués",
              }[lang.lang]
            }
          </Lang>
        </li>
        <li>
          <div className="pie animate no-round pie-80">80%</div>
          <Lang>
            {
              {
                pt_BR: "Inglês",
                en: "English",
                es_ES: "Inglés",
              }[lang.lang]
            }
          </Lang>
        </li>
        <li>
          <div className="pie animate no-round pie-20">20%</div>
          <Lang>
            {
              {
                pt_BR: "Espanhol",
                en: "Spanish",
                es_ES: "Español",
              }[lang.lang]
            }
          </Lang>
        </li>
      </LangUl>
    </>
  );
}
