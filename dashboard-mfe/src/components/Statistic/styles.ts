import styled from "styled-components";

export const StatisticContainer = styled.div`
  width: 619px;
  height: 408px;
  background: #f7f9fc;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  padding-bottom: 1.87rem;
`;
export const Title = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #2e3a59;
`;
export const SelectDate = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #2e3a59;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    color: #2e3a59;
    width: 10px;
    height: 10px;
    font-weight: bold;
  }
`;

export const Text = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  color: #2e3a59;
`;
export const TextContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  .Exams {
    background: #3366ff;
  }
  .Grade {
    background: #00d68f;
  }

  .thin {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #2e3a59;
  }
`;
export const Badge = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100%;
`;
