import LangContext from "@/lib/context";
import { useContext } from "react";
import { NumbersUl } from "./styles";

export default function Numbers() {
  const year = new Date().getFullYear() - 2010;
  const lang = useContext(LangContext);

  return (
    <div>
      <NumbersUl>
        <li>
          {year}{" "}
          <span>
            {
              {
                pt_BR: "anos de experiência",
                en: "years of experience",
                es_ES: "años de experiencia",
              }[lang.lang]
            }
          </span>
        </li>
        <li>
          300+{" "}
          <span>
            {
              {
                pt_BR: "projetos concluídos",
                en: "completed projects",
                es_ES: "proyectos completados",
              }[lang.lang]
            }
          </span>
        </li>
        <li>
          11{" "}
          <span>
            {
              {
                pt_BR: "certificações",
                en: "certifications",
                es_ES: "certificaciones",
              }[lang.lang]
            }
          </span>
        </li>
        <li>
          4{" "}
          <span>
            {
              {
                pt_BR: "cursos completos",
                en: "completed courses",
                es_ES: "cursos completos",
              }[lang.lang]
            }
          </span>
        </li>
      </NumbersUl>
    </div>
  );
}
