import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 402px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;
export const Card = styled.div`
  width: 185px;
  height: 188px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 24px;
`;
export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
export const AvatarIcon = styled.div`
  width: 48px;
  height: 48px;
  background: #ffb978;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MenuCard = styled.div`
  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
export const Infos = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const Text = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #2e3a59;
`;
export const Label = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #2e3a59;
`;
export const Image = styled.img`
`;
