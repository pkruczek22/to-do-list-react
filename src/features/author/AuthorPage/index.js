import { Container } from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { SectionContainer } from "../../../common/SectionContainer";

function AuthorPage() {

    return (
        <Container>
            <Header title={"O autorze"} />
            <Section
                title={"Paweł Kruczek"}
                body={
                    <SectionContainer>
                        <p>Cześć! Studiuje <strong>informatykę</strong>, na codzień pracuję jako deweloper w firmie zajmującej się <strong>automatyzacjami procesów biznesowych</strong> i budowaniem aplikacji mobilnych i webowych</p>
                        <p>W wolnym czasie lubię spędzać czas aktywnie, iść na basen, pójść w góry, czy też pooglądać jakiś film lub pograć na konsoli. Najczęściej gram w <strong>Dead by daylight</strong> lub jakieś gry fabularne jednoosobowe.</p>
                    </SectionContainer>
                }
            />
        </Container>
    );
};

export default AuthorPage;