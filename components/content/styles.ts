import styled from "styled-components";

export const SideDiv = styled.div`
  background-color: #1e1e28;
  position: relative;
  overflow: hidden;
  outline: none;
  background-image: url(/code-bg-2.webp);
  background-repeat: no-repeat;
  background-size: contain;
`;

export const SideInner = styled.div`
  padding: 60px 30px 30px;
  position: relative;
  height: calc(100vh - 30px);
  transform: translate3d(0px, 0px, 0px);
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-image: linear-gradient(
    90deg,
    rgba(45, 45, 58, 0.9) 15%,
    rgba(45, 45, 58, 0.7) 50%,
    rgba(43, 43, 53, 0.7) 100%
  );
  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 767px) {
    height: calc(100vh - 80px);
  }
  @media only screen and (max-width: 450px) {
    padding: 60px 10px 10px;
  }
`;
