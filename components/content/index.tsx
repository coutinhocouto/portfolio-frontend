import Image from "next/image";

import Banner from "./parts/banner";
import Numbers from "./parts/numbers";
import { SideDiv, SideInner } from "./styles";
import Posts from "./posts/list/posts";
import { getPosts } from "@/lib/api";

export default function Content() {
  const { posts, isLoading } = getPosts();

  return (
    <SideDiv>
      <SideInner>
        <Banner />
        <Numbers />
        {!isLoading ? (
          <Posts posts={posts} />
        ) : (
          <Image
            src="/loader.gif"
            alt="Coutz Loader"
            height={200}
            width={200}
          />
        )}
      </SideInner>
    </SideDiv>
  );
}
