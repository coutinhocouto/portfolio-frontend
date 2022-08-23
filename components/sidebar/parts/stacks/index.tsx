import LangContext from "@/lib/context";
import { useContext } from "react";
import { StacksTitle, StacksUl } from "./styles";

export default function Stacks() {
  const lang = useContext(LangContext);
  const year = new Date().getFullYear() - 2010;
  const year2 = new Date().getFullYear() - 2014;
  const year3 = new Date().getFullYear() - 2019;
  const year4 = new Date().getFullYear() - 2016;
  const year5 = new Date().getFullYear() - 2021;
  let yeatText = "";

  if(lang.lang === "pt_BR") {
    yeatText = "anos";
  } else if (lang.lang === "en") {
    yeatText = "years";
  } else if (lang.lang === "es_ES") {
    yeatText = "años";
  }

  return (
    <StacksUl>
      <li>
        <StacksTitle>
          {
            {
              pt_BR: "Conhecimetos",
              en: "Knowledge",
              es_ES: "Conocimiento",
            }[lang.lang]
          }
        </StacksTitle>
      </li>
      <li>
        <h6>HTML</h6>
        <span>{year} {yeatText}</span>
      </li>
      <li>
        <h6>CSS</h6>
        <span>{year} {yeatText}</span>
      </li>
      <li>
        <h6>PHP</h6>
        <span>{year} {yeatText}</span>
      </li>
      <li>
        <h6>Wordpress</h6>
        <span>{year} {yeatText}</span>
      </li>
      <li>
        <h6>JavaScript</h6>
        <span>{year2} {yeatText}</span>
      </li>
      <li>
        <h6>jQuery</h6>
        <span>{year2} {yeatText}</span>
      </li>
      <li>
        <h6>React.js</h6>
        <span>{year3} {yeatText}</span>
      </li>
      <li>
        <h6>MySQL</h6>
        <span>{year4} {yeatText}</span>
      </li>
      <li>
        <h6>React Native</h6>
        <span>{year5} {yeatText}</span>
      </li>
    </StacksUl>
  );
}
