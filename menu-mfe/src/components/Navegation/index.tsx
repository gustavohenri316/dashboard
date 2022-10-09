import {
  AlignLeftOutlined,
  AppstoreOutlined,
  BranchesOutlined,
  CarOutlined,
  CompassOutlined,
  DollarOutlined,
  IdcardOutlined,
  TagOutlined,
  ToolOutlined,
  UsergroupAddOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import {
  MenuContainer,
  MenuContent,
  
  MenuItem,
  UserContainer,
  Image,
  Text,
  TextContainer,
} from "./styles";

export function Menu() {
  return (
    <MenuContainer>
      <UserContainer>
        <Image />
        <TextContainer>
          <Text>Samantha</Text>
          <Text className="phone">+998 (99) 436-46-15</Text>
        </TextContainer>
      </UserContainer>
      <Text className="main-menu">MAIN MENU</Text>
      <MenuContent>
        <MenuItem to='/dashboard'>
          <AppstoreOutlined />
          Dashboard
        </MenuItem>
        <MenuItem to='/'>
        <TagOutlined />
          Orders
        </MenuItem>
        <MenuItem to='/'>
          <UserSwitchOutlined />
          Rides
        </MenuItem>
        <MenuItem to='/'>
          <UsergroupAddOutlined />
          Clients
        </MenuItem>
        <MenuItem to='/'>
          <IdcardOutlined />
          Drivers
        </MenuItem>
        <MenuItem to='/'>
          <DollarOutlined />
          Shift
        </MenuItem>
        <MenuItem to='/'>
          <CompassOutlined />
          Live map
        </MenuItem>
        <MenuItem to='/'>
          <CarOutlined />
          Car classes
        </MenuItem>
        <MenuItem to='/'>
          <BranchesOutlined />
          Branches
        </MenuItem>
        <MenuItem to='/'>
          <UsergroupAddOutlined />
          Moderators
        </MenuItem>
        <MenuItem to='/'>
          <ToolOutlined />
          Settings
        </MenuItem>
      </MenuContent>
    </MenuContainer>
  );
}
