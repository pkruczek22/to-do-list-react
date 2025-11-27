import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

const useReplaceQueryParam = () => {
        const history = useHistory();
        const location = useLocation();
        const searchParams = new URLSearchParams(location.search);

        const replaceQueryParam = ({key, value}) => {
            value ? searchParams.set(key, value) : searchParams.delete(key);

            history.push(`${location.pathname}?${searchParams.toString()}`);
        };

        return replaceQueryParam;
    };

export default useReplaceQueryParam;