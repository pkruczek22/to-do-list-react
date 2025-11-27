import { useLocation } from "react-router-dom/cjs/react-router-dom.min";


const useQueryParam = (queryParam) => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(queryParam);

    return query;
};

export default useQueryParam;