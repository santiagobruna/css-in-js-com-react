import Avatar from "../../assets/components/Avatar";
import Paragraph from "../../assets/components/Paragraph";
import Title from "../../assets/components/Title";
import { Description, ButtonTheme, SiderBarContainer } from "./styles";
const SideBar = () => (
  <aside>
    <SiderBarContainer>
      <Avatar/>
      <Title fontSize={20}>Bruna Carla</Title>
      <Paragraph tipo="secundario" fontSize={16}>
        santiagobruna
      </Paragraph>
      <Description tipo="principal" fontSize={12}>Desenvolvedora Full Stack</Description>
      <ButtonTheme>Trocar tema</ButtonTheme>
    </SiderBarContainer>
  </aside>
)

export default SideBar;
