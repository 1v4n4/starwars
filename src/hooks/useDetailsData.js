import { useQuery } from "react-query";
import { fetchDetails } from "../API";

const useDetailsData = (key, url) => {
  return useQuery(
    [key, url],
    () => fetchDetails(url),
    {
      keepPreviousData: true,
    }
  );
};

export default useDetailsData;