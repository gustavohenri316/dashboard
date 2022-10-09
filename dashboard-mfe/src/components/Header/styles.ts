import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: black;
    cursor: pointer;
    width: 24px;
    height: 24px;

    transition: all 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;
export const Image = styled.img`` 
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
export const Text = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #2e3a59;
`;
export const Label = styled.label`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #2e3a59;

  a {
    text-decoration: none;
    color: #3366FF;
  }
`;
