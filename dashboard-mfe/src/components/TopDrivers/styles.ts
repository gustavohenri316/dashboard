import styled from "styled-components";

export const TopDriversContainer = styled.div`
  width: 402px;
  color: #000;
`;
export const Title = styled.h2`
  width: 402px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #2e3a59;

  svg {
    width: 10px;
    height: 10px;
    color: #000;
    cursor: pointer;
  }
`;
export const Card = styled.div`
  width: 402px;
  height: 80px;
  background: #f7f9fc;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 4px;
`;
export const UserContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Name = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #2e3a59;
`;
export const Label = styled.label`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #8f9bb3;
`;
export const Text = styled.label`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-transform: capitalize;
  color: #2e3a59;
`;
export const UserInfos = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
`;
