import { searchQueryParam } from "../searchQueryParam";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { SectionContainer } from "../../../../common/SectionContainer";
import Input from "../../Input";

const Search = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParam);
    const history = useHistory();

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search)

        if (target.value.trim() === "") {
            searchParams.delete(searchQueryParam);
        } else {
            searchParams.set(searchQueryParam, target.value);
        };

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <SectionContainer>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            ></Input>
        </SectionContainer>
    )
};

export default Search;