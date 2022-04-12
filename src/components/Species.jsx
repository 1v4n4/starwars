import React, {useState} from 'react';
import { useQuery } from 'react-query';
import { fetchPages } from '../API';

const Species = () => {
  const onSuccess = () => console.log('Species fetched successfully');
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery(['species', 'species', page], () => fetchPages('species', page), {
    onSuccess,
    onError: () => console.log('Species fetch failed'),
  })
  console.log(data);
    return (
      <div>
        <button onClick={() => setPage(old => old - 1 > 0 ? old - 1 : old)} disabled={page === 1}>Previous</button>
        {page}
        <button onClick={() => setPage(old => data?.next ? old + 1 : old)} disabled={!data || !data.next}>Next</button>
        {isLoading && <p>Loading...</p>}
        {isError && <p>{error.message}</p>}
        {data?.results.map(species => <p key={species.name}>{species.name}</p>)}
      </div>
    )
}

export default Species;