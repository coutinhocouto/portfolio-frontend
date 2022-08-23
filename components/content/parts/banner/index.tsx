import {
  BannerDiv,
  BannerImg,
  BannerInner,
  BannerSubTitle,
  BannerTitle,
} from "./styles";
import Typewriter from "typewriter-effect";
import LangContext from "@/lib/context";
import { useContext } from "react";

export default function Banner() {
  const lang = useContext(LangContext);

  return (
    <BannerDiv>
      <BannerInner>
        <BannerTitle>
          {
            {
              pt_BR: "Faça da sua vida mais Responsiva",
              en: "Make your life more Responsive",
              es_ES: "Haz que tu vida sea más Receptiva",
            }[lang.lang]
          }
        </BannerTitle>
        <BannerSubTitle>
          &#60;<span>code</span>&#62;{" "}
          {
            {
              pt_BR: "Criando códigos com",
              en: "Creating codes with",
              es_ES: "Creación de códigos con",
            }[lang.lang]
          }{" "}
          <Typewriter
            options={{
              strings: ["Wordpress", "React.js", "React Native"],
              autoStart: true,
              loop: true,
            }}
          />
          &#60;/<span>code</span>&#62;
        </BannerSubTitle>
        <BannerImg src="/family.webp" alt="Família Coutz" />
      </BannerInner>
    </BannerDiv>
  );
}
