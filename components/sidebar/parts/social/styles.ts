import styled from "styled-components";

export const SocialUl = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  padding: 0;
  background: #252531;
  margin: 0;
  li {
    a {
      padding: 10px 30px 20px;
      display: block;
      vertical-align: center;
      color: #8c8c8e;
      &:hover {
        color: #ffc107;
      }
    }
  }
`;
