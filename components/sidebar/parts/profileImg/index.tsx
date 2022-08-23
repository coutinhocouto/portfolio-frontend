import LangContext from "@/lib/context";
import { useContext } from "react";
import {
  ImageProfile,
  LangUl,
  Profile,
  ProfileSubTitle,
  ProfileTitle,
} from "./styles";

export default function ProfileImg() {
  const { lang, setLang } = useContext(LangContext);

  return (
    <Profile>
      <ImageProfile
        src="/profile.webp"
        width={90}
        height={90}
        alt="Filipe Coutinho Pereira"
      />
      <ProfileTitle>Filipe Coutinho</ProfileTitle>
      <ProfileSubTitle>Front-end Developer</ProfileSubTitle>
      <LangUl>
        <li className={lang === "pt_BR" ? "active" : ""} onClick={() => setLang("pt_BR")}>PT</li>
        <li className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</li>
        <li className={lang === "es_ES" ? "active" : ""} onClick={() => setLang("es_ES")}>ES</li>
      </LangUl>
    </Profile>
  );
}
