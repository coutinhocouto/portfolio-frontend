import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const PostsTitle = styled.h2`
  font-size: 17px;
  font-weight: 700;
  color: #fafafc;
  margin-bottom: 20px;
`;

export const PostTitle = styled.span`
  text-align: center;
  color: #fafafc;
  display: block;
  font-size: 14px;
  font-weight: 500;
`;

export const ModalPost = styled(Modal)`
  .modal-content {
    background: #2b2b38;
  }
  .modal-title {
    color: #ffc107;
  }
  .modal-header {
    border-bottom: 1px solid #ffc107;
  }
  .modal-footer {
    border-top: 1px solid #ffc107;
  }
`;
