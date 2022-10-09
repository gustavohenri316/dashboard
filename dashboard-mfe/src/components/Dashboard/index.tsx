import { Base } from "../Base";
import { Cards } from "../Cards";
import { Datatable } from "../DataTable";
import { Header } from "../Header";
import { Statistic } from "../Statistic";
import { TopDrivers } from "../TopDrivers";
import { DashboardContainer, Content } from "./styles";

export function Dashboard() {
  return (
    <DashboardContainer>
      <Header />
      <Content>
        <Base />
        <TopDrivers />
      </Content>
      <Content>
        <Statistic />
        <Cards/>
      </Content>
      <Datatable/>
    </DashboardContainer>
  );
}
