import { searchQueryParam } from "../searchQueryParam";
import { SectionContainer } from "../../../../common/SectionContainer";
import Input from "../../Input";
import useQueryParam from "../../../useQueryParam";
import useReplaceQueryParam from "../../../useReplaceQueryParam";

const Search = () => {
    const query = useQueryParam(searchQueryParam);
    const replaceQueryParam = useReplaceQueryParam();

    return (
        <SectionContainer>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={({ target }) => {
                    replaceQueryParam({
                        key: searchQueryParam,
                        value: target.value.trim() !== "" ? target.value : undefined
                    });
                }}
            ></Input>
        </SectionContainer>
    )
};

export default Search;