import styled from "styled-components";
import { NavLink } from 'react-router-dom'

export const MenuContainer = styled.div`
  width: 276px;
  background: transparent;
  height: 100vh;
  padding-left: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
  .main-menu {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
  }
  a{
    text-decoration: none;
  }
`;
export const UserContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 2rem;
  gap: 1rem;
  padding-bottom: 1rem;
`;
export const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-family: "Poppins", sans-serif;

  .phone {
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.6;
  }
`;
export const Image = styled.img`
  width: 48px;
  height: 48px;
  border: 2px solid #dfe0eb;
  border-radius: 88px;
`;
export const Text = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
`;
export const MenuContent = styled.div`
  width: 90%;
  background: transparent;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #ffffff;
`;
export const MenuItem = styled(NavLink)`
  width: 270px;
  height: 41px;
  background: transparent;
  border-radius: 800px 30px 30px 800px;
  color: #000;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding-left: 2rem;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #ffffff;
  
  svg {
    width: 20px;
    height: 20px;
  }

  &:active {
    background: #ffffff;
    color: #5459EA;
  }
`;
