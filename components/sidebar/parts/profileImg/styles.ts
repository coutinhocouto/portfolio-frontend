import Image from "next/image";
import styled from "styled-components";

export const Profile = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
  width: 100%;
  padding: 30px;
  height: 245px;
  background: linear-gradient(
    159deg,
    rgba(37, 37, 50, 0.98) 0%,
    rgba(35, 35, 45, 0.98) 100%
  );
  text-align: center;
  -webkit-box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
  box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
`;

export const ImageProfile = styled(Image)`
  border-radius: 50%;
`;

export const ProfileTitle = styled.h1`
  color: #fafafc;
  transition: 0.4s ease-in-out;
  font-size: 14px;
  margin-top: 10px;
`;

export const ProfileSubTitle = styled.h2`
  font-size: 11px;
`;

export const LangUl = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
  li {
    display: inline-block;
    margin: 0 5px;
    padding: 8px 10px;
    font-size: 11px;
    background: #1e1e28;
    border-radius: 50%;
    font-weight: 700;
    transition: 0.4s ease-in-out;
    cursor: pointer;
    &:hover {
      background: #ffc107;
      color: #1e1e28;
    }

    &.active {
      color: #1e1e28;
      background: #ffc107;
    }
    &.active:hover {
      color: #ffc107;
      background: #1e1e28;
    }
  }
`;
