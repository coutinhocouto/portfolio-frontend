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

export const SinglePost = styled.span`
  cursor: pointer;
  position: relative;
  display: block;
  img {
    transition: all 300ms ease;
  }
  &:hover img {
    filter: grayscale(1);
  }
`;

export const SinglePostZoom = styled.span`
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 20%;
  padding: 4px 10px 10px;
  background: #191923;
  margin-left: -18px;
  opacity: 0.85;
  border-radius: 50%;
`;
