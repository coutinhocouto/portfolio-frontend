import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Single from "./single";
import { PostsTitle } from "./styles";
import LangContext from "@/lib/context";
import { useContext } from "react";

export default function Posts({ posts }: { posts: Array<JSON> }) {
  const lang = useContext(LangContext);

  if (posts.length) {
    return (
      <>
        <Row>
          <PostsTitle>
            {
              {
                pt_BR: "Projetos Realizados",
                en: "Completed Projects",
                es_ES: "Proyectos realizados",
              }[lang.lang]
            }
          </PostsTitle>
        </Row>
        <Row id="cert">
          {posts.map((e: any) => (
            <Col key={e.id} lg={3} md={6} sm={6}>
              <Single
                key={e.id}
                id={e.id}
                title={e.title.rendered}
                link={e.acf.link_do_site}
                desc={e.acf.descricao}
                desc_en={e.acf.descricao_en}
                desc_es={e.acf.descricao_es}
              />
            </Col>
          ))}
        </Row>
      </>
    );
  } else {
    return <></>;
  }
}