import {
  Avatar,
  Card,
  Label,
  Name,
  Title,
  TopDriversContainer,
  UserContainer,
  UserContent,
  UserInfos,
  Text,
} from "./styles";
import { RightOutlined } from "@ant-design/icons";
import MaharrmImg from '../../assets/Maharrm.png'

export function TopDrivers() {
  return (
    <TopDriversContainer>
      <Title>
        Top Drivers <RightOutlined />
      </Title>
      <Card>
        <UserContainer>
          <Avatar src={MaharrmImg}/>
          <UserContent>
            <Name>Maharrm Hasanli</Name>
            <Label>+998 (99) 436-46-15</Label>
          </UserContent>
          <UserInfos>
            <Text>orders: <strong>5</strong> </Text>
            <Text>income: <strong>$ 98</strong></Text>
          </UserInfos>
        </UserContainer>
      </Card>
    </TopDriversContainer>
  );
}
