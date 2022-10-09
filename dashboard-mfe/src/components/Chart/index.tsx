import { ChartsContainer, LineContainer, Line, Content, Meses } from "./styles";
import charts from "../../assets/charts.svg";

export function Charts() {
  const meses = [
    { id: 1, name: "Jan" },
    { id: 2, name: "Feb" },
    { id: 3, name: "Mar" },
    { id: 4, name: "Apr" },
    { id: 5, name: "May" },
    { id: 6, name: "Jun" },
    { id: 7, name: "Jul" },
    { id: 8, name: "Aug" },
    { id: 9, name: "Sep" },
    { id: 10, name: "Oct" },
    { id: 11, name: "Nov" },
    { id: 12, name: "Dec" },
  ];

  return (
    <>
      <ChartsContainer>
        <LineContainer>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </LineContainer>
        <img src={charts} alt="" />
        <Content style={{ display: "flex" }}>
          {meses.map((item) => (
            <Meses key={item.id} className={item.name}>
              {item.name}
            </Meses>
          ))}
        </Content>
      </ChartsContainer>
    </>
  );
}
