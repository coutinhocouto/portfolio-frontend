import LangContext from "@/lib/context";
import { CheckOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { AdkUl } from "./styles";

export default function Adk() {
  const lang = useContext(LangContext);

  return (
    <AdkUl>
      <li>
        <CheckOutlined /> Git, GitHub, GitLab
      </li>
      <li>
        <CheckOutlined /> NPM, Yarn
      </li>
      <li>
        <CheckOutlined /> Styled Components, Typescript
      </li>
      <li>
        <CheckOutlined /> Next.js, Redux, Hooks
      </li>
      <li>
        <CheckOutlined /> Woocommerce, Elementor, WP Bakery
      </li>
      <li>
        <CheckOutlined />{" "}
        {
          {
            pt_BR: "Agilidade",
            en: "Agility",
            es_ES: "Agilidad",
          }[lang.lang]
        }
        , Jira, Trello
      </li>
      <li>
        <CheckOutlined /> Lint, Jest, CI/CD
      </li>
    </AdkUl>
  );
}
