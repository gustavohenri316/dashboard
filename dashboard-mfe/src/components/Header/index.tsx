import { Content, HeaderContainer, Label, Text, Image } from "./styles";
import { MenuOutlined } from "@ant-design/icons";
import door from '../../assets/door-exit.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Content>
        <MenuOutlined />
        <Text>Good morning, Maharram 👋</Text>
        <Label>you have <a href="">1 new message</a></Label>
      </Content>
      <Image src={door}/>
    </HeaderContainer>
  );
}
