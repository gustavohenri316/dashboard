import {
  AvatarIcon,
  Card,
  CardsContainer,
  Content,
  Infos,
  Label,
  MenuCard,
  Text,
  Image
} from "./styes";
import { MoreOutlined } from "@ant-design/icons";
import book from "../../assets/book.svg";
import microphone from "../../assets/microphone.svg";
import ruler from "../../assets/ruler.svg";
import headphones from "../../assets/headphones.svg";

export function Cards() {
  const cardInfos = [
    {
      id: 1,
      color: "#FFB978",
      icon: headphones,
      porcentagem: "15% ",
      name: "Listening",
      text: "Speak 20 minutes.",
    },
    {
      id: 2,
      color: "#F86060",
      icon: ruler,
      porcentagem: "32%",
      name: "Grammar",
      text: "Learn 5 new rules",
    },
    {
      id: 3,
      color: "#778DFF",
      icon: microphone,
      porcentagem: "21%",
      name: "Prounancation",
      text: "Read30 minutes.",
    },
    {
      id: 4,
      color: "#64E662",
      icon: book,
      porcentagem: "64%",
      name: "Dictionary",
      text: "Learn 5 new words ",
    },
  ];

  return (
    <CardsContainer>
      {cardInfos.map((item) => {
        return (
          <Card key={item.id}>
            <Content>
              <AvatarIcon style={{background: `${item.color}`}}>
                <Image src={item.icon} />
              </AvatarIcon>
              <MenuCard>
                <MoreOutlined />
              </MenuCard>
            </Content>
            <Infos>
              <Text>{item.porcentagem}</Text>
              <Text>{item.name}</Text>
              <Label>{item.text}</Label>
            </Infos>
          </Card>
        );
      })}
    </CardsContainer>
  );
}
