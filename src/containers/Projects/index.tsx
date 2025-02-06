import Project from "../../assets/components/Project";
import Title from "../../assets/components/Title";
import { List } from "./style";

const Projects = () => (
    <section>
      <Title fontSize={16}>Projetos</Title>
      <List>
        <li>
          <Project/>
        </li>
        <li>
          <Project/>
        </li>
        <li>
          <Project/>
        </li>
        <li>
          <Project/>
        </li>
        <li>
          <Project/>
        </li>
        <li>
          <Project/>
        </li>
        <li>
          <Project/>
        </li>
        <li>
          <Project/>
        </li>
      </List>
    </section>
)

export default Projects;
