import { useQuery } from "react-query";
import { fetchPages } from "../API";

const usePeopleData = (page) => {
 return  useQuery(['people', 'people', page], () => fetchPages('people', page), {
    keepPreviousData: true,
  })
}

export default usePeopleData;