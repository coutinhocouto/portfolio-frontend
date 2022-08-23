import styled from "styled-components";

export const NumbersUl = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  list-style: none;
  padding: 30px 0;
  li {
    color: #FFC107;
    font-weight: 700;
    font-size: 22px;
    @media only screen and (max-width: 991px) {
      text-align: center;
    }
    span {
        font-size: 12px;
        font-weight: 400;
        color: #fafafc;
        vertical-align: middle;
        margin-left: 5px;
        @media only screen and (max-width: 991px) {
          display: block;
          font-size: 11px;
        }
        @media only screen and (max-width: 350px) {
          font-size: 10px;
        }
    }
  }
  
`;
