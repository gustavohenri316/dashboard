import { BaseContainer, Card, Content, Title, Image } from "./styles";
import { RightOutlined } from "@ant-design/icons";
import folder0 from "../../assets/folder-open.svg";
import folder1 from "../../assets/folder-open-1.svg";
import folder2 from "../../assets/folder-open-2.svg";
import folder3 from "../../assets/folder-open-3.svg";

export function Base() {
  return (
    <BaseContainer>
      <Title>Knowledge base</Title>
      <Content>
        <Card className="Orders">
          <Image src={folder0} />
          Total Orders
          <RightOutlined />
        </Card>
        <Card className="Earnings">
          <Image src={folder1} />
          Total Earnings
          <RightOutlined />
        </Card>
        <Card className="Profitм">
          <Image src={folder2} />
          Profitм
          <RightOutlined />
        </Card>
        <Card className="files">
          <Image src={folder3} />
          Audio files
          <RightOutlined />
        </Card>
      </Content>
    </BaseContainer>
  );
}
