import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { SocialUl } from "./styles";

export default function Social() {
  return (
    <SocialUl>
      <li>
        <a
          href="https://www.linkedin.com/in/coutinhocouto/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinOutlined />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/coutinhocouto"
          target="_blank"
          rel="noreferrer"
        >
          <GithubOutlined />
        </a>
      </li>
      <li>
        <a href="https://wa.me/5521967442002" target="_blank" rel="noreferrer">
          <WhatsAppOutlined />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/coutinhocouto/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramOutlined />
        </a>
      </li>
    </SocialUl>
  );
}
