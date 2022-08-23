import type { NextPage } from "next";
import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

import Sidebar from "@/components/sidebar";
import Header from "@/components/head";
import Content from "@/components/content";
import { useMemo, useState } from "react";
import LangContext from "@/lib/context";

const Home: NextPage = () => {  
  const [lang, setLang] = useState('pt_BR');
  const value = useMemo(
    () => ({ lang, setLang }), 
    [lang]
  );

  return (
    <LangContext.Provider value={value}>
      <Container>
        <Header />
        <Row className="g-0">
          <Col lg={3} md={4}>
            <Sidebar />
          </Col>
          <Col lg={9} md={8}>
            <Content />
          </Col>
        </Row>
      </Container>
    </LangContext.Provider>
  );
};

export default Home;
