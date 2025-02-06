import Paragraph from "../../assets/components/Paragraph";
import Title from "../../assets/components/Title";
import { GithubSecao } from "./styles";

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph>
      Olá, me chamo Bruna! Tenho 20 anos, sou estudante de Desenvolvimento Fullstack em Python e eu amo jogos e tecnologias.
    </Paragraph>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=santiagobruna&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=santiagobruna&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
  </section>
)

export default About;
