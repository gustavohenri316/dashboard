import styled from "styled-components";

export const DashboardContainer = styled.div`
  height: 90vh;
  margin: 2rem;
  background: #ffffff;
  border-radius: 30px;
  padding: 28px 47px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: #000;
  overflow: scroll;

  &:hover {
    overflow-x: scroll;

    ::-webkit-scrollbar-thumb {
      background-color: transparent;
      border-radius: 20px;
      border: 1px solid transparent;
      cursor: pointer;
    }
  }

  ::-webkit-scrollbar {
    display: none;
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
`;
export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
