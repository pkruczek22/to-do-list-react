import "./style.css";
import { TasksSection, Header, Title } from "./styled";

const Section = ({ title, optionalHeaderContent, body }) => (
  <TasksSection>
    <Header>
      <Title className="section__title">{title}</Title>
      {optionalHeaderContent}
    </Header>
    {body}
  </TasksSection>
)

export default Section;