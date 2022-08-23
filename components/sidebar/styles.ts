import styled from "styled-components";

export const SideDiv = styled.div`
  position: relative;
  overflow: hidden;
  outline: none;
  background: #20202a;
  @media only screen and (max-width: 767px) {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    z-index: 9;
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    &.close-menu {
      display: none;
    }
  }
`;

export const SideFlow = styled.div`
  position: relative;
  padding: 260px 30px 70px;
  height: calc(100vh - 30px);
  transform: translate3d(0px, 0px, 0px);
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media only screen and (max-width: 767px) {
    display: flex;
    background: linear-gradient(
      159deg,
      rgba(37, 37, 50, 0.98) 0%,
      rgba(35, 35, 45, 0.98) 100%
    );
    padding: 10px 30px;
    justify-content: space-between;
    span {
      font-size: 20px;
      background: #ffc107;
      color: #191923;
      border-radius: 50%;
      padding: 5px;
      &.open-menu {
        z-index: 10;
        top: 20px;
        right: 20px;
        position: fixed;
      }
    }
  }
`;
