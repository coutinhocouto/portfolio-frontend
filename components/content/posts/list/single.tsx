import { Button, Col, Modal } from "react-bootstrap";
import Image from "next/image";

import { ModalPost, PostTitle } from "./styles";
import { getPrint } from "@/lib/api";
import { useContext, useState } from "react";
import LangContext from "@/lib/context";

export interface SingleProps {
  id: number;
  title: string;
  link: string;
  desc: string;
  desc_en: string;
  desc_es: string;
}

export default function Single({ id, title, link, desc, desc_en, desc_es }: SingleProps) {
  const { printImg, isLoadingPrint } = getPrint(id);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const lang = useContext(LangContext);

  return (
    <>
      {!isLoadingPrint ? (
        <Col className="mb-4">
          <ModalPost
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image
                src={printImg[0].media_details.sizes.medium_large.source_url}
                alt={title}
                width={768}
                height={421}
              />
              {
                {
                  pt_BR: <p dangerouslySetInnerHTML={{ __html: desc }} />,
                  en: <p dangerouslySetInnerHTML={{ __html: desc_en }} />,
                  es_ES: <p dangerouslySetInnerHTML={{ __html: desc_es }} />,
                }[lang.lang]
              }
            </Modal.Body>
            <Modal.Footer>
              <Button variant="warning" target="_blank" href={link}>
                Acessar Site
              </Button>
            </Modal.Footer>
          </ModalPost>
          <span onClick={handleShow}>
            <Image
              src={printImg[0].media_details.sizes.medium.source_url}
              alt={title}
              width={450}
              height={250}
            />
            <PostTitle className="mt-1">{title}</PostTitle>
          </span>
        </Col>
      ) : (
        <Image src="/loader.gif" alt="Coutz Loader" height={200} width={200} />
      )}
    </>
  );
}
