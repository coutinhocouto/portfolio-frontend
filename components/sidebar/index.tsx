import { MoreOutlined } from "@ant-design/icons";
import { useState } from "react";
import Adk from "./parts/additionalKnowledge";
import Download from "./parts/download";
import Languages from "./parts/languages";
import Location from "./parts/location";
import ProfileImg from "./parts/profileImg";
import Social from "./parts/social";
import Stacks from "./parts/stacks";
import { MobileMenu, SideDiv, SideFlow } from "./styles";
import Image from "next/image";

export default function Sidebar() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <MobileMenu>
        <Image
          src="/profile.webp"
          width={30}
          height={30}
          alt="Filipe Coutinho Pereira"
        />
        <MoreOutlined
          onClick={() => setMenu((prevMenu) => !prevMenu)}
          className={menu ? "open-menu" : "close-menu"}
        />
      </MobileMenu>
      <SideDiv className={menu ? "open-menu" : "close-menu"}>
        <ProfileImg />
        <SideFlow>
          <Location />
          <Languages />
          <Stacks />
          <Adk />
          <Download />
        </SideFlow>
        <Social />
      </SideDiv>
    </>
  );
}
