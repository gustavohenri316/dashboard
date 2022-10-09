import styled from "styled-components";

export const BaseContainer = styled.div`
  width: 619px;
  font-family: "Montserrat";
`;
export const Title = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  color: #2e3a59;
`;
export const Content = styled.div`
  width: 619px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 1rem;
  overflow-x:  hidden;
  overflow: auto;
  scroll-behavior: auto;
  gap: 0.8rem;

  &:hover {
    overflow-x: scroll;

    ::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 20px;
    border: 1px solid transparent;
    cursor: pointer;
  }
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 5px;
    cursor: pointer;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    cursor: pointer;
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 20px;
    border: 1px solid transparent;
    cursor: pointer;
  }
  .Orders {
    color: #3366ff;
    background: rgba(51, 102, 255, 0.2);
    svg {
      color: #2E3A59;
    }
  }
  .Earnings {
    color: #FF333F;
    background: rgba(255, 51, 63, 0.2);
    svg {
      color: #2E3A59;
    }
  }
  .Profitм {
    color: #FF9533;
    background: rgba(255, 149, 51, 0.2);
    svg {
      color: #2E3A59;
    }
  }
  .files {
    color: #39DE54;
    background: rgba(57, 222, 84, 0.2);
    svg {
      color: #2E3A59;
    }
  }
`;
export const Card = styled.div`
  width: 185px;
  min-width: 185px;
  height: 80px;
  background: rgba(51, 102, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  
  &:hover {
    font-size: 12px;
  }
`;
export const Image = styled.img``;
