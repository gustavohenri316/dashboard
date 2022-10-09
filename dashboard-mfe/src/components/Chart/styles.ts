import styled from "styled-components";

export const ChartsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  flex-direction: column;
  position: relative;

  img {
    position: absolute;
    z-index: 1;
  }
`;
export const LineContainer = styled.div`
  position: relative;
  width: 556px;
  height: 206px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
`;
export const Line = styled.div`
  width: 556px;
  height: 1px;
  background: #f0f0f0;
`;

export const Content = styled.div`
  width: 556px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;

  .Aug {
    background: linear-gradient(
      360deg,
      rgba(135, 145, 171, 0.4) 46.78%,
      rgba(135, 145, 171, 0) 100%
    );
    backdrop-filter: blur(2px);
  }
`;
export const Meses = styled.div`
  z-index: 0;
  position: relative;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #2e3a59;
  cursor: pointer;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1rem 0rem;
  width: 46px;
  height: 249px;
`;
