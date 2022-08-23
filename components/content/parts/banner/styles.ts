import styled from "styled-components";

export const BannerDiv = styled.div`
  position: relative;
  background-image: url(/code-bg.webp);
`;

export const BannerInner = styled.div`
  position: relative;
  padding: 60px;
  background-image: linear-gradient(
    90deg,
    rgba(45, 45, 58, 0.9) 15%,
    rgba(45, 45, 58, 0.7) 50%,
    rgba(43, 43, 53, 0.7) 100%
  );
  @media only screen and (max-width: 991px) {
    padding: 30px 0px;
  }
`;

export const BannerImg = styled.img`
  position: absolute;
  right: 0;
  top: -62px;
  width: 343px;
  height: auto;
  @media only screen and (max-width: 1200px) {
    display: none
  }
`;

export const BannerTitle = styled.h1`
  max-width: 600px;
  color: #fff;
  font-weight: 900;
  @media only screen and (max-width: 1200px) {
    max-width: 100%;
    text-align: center;
  }
  @media only screen and (max-width: 991px) {
    font-size: 30px;
  }
`;

export const BannerSubTitle = styled.h2`
  max-width: 600px;
  font-family: "Courier Prime", monospace;
  color: #fafafc;
  font-size: 16px;
  margin-bottom: 25px;
  & > span {
    color: #ffc107;
  }
  @media only screen and (max-width: 1200px) {
    max-width: 100%;
    text-align: center;
    margin-bottom: 0px;
  }
  @media only screen and (max-width: 991px) {
    font-size: 14px;
  }
`;
