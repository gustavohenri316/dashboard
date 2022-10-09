import { Charts } from "../Chart";
import {
  StatisticContainer,
  Title,
  Content,
  SelectDate,
  Text,
  TextContainer,
  Badge,
} from "./styles";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

export function Statistic() {
  return (
    <StatisticContainer>
      <Content>
        <Title>Statistic</Title>
        <SelectDate>
          <LeftOutlined />
          Aug 2021
          <RightOutlined />
        </SelectDate>
      </Content>
      <Content>
        <Text>Progress score</Text>
        <TextContainer>
          <Badge className="Grade"></Badge>
          <Text className="thin">Avarage grade</Text>
          <Badge className="Exams"></Badge>
          <Text className="thin">Exams</Text>
        </TextContainer>
      </Content>
      <Charts />
    </StatisticContainer>
  );
}
