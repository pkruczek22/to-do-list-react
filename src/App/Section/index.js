import { TasksSection, Header, Title } from "./styled";

const Section = ({ title, optionalHeaderContent, body }) => (
  <TasksSection>
    <Header>
      <Title>{title}</Title>
      {optionalHeaderContent}
    </Header>
    {body}
  </TasksSection>
)

export default Section;