
export default async function ResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

  // fake var to store results
  const fakeResults: string[] = [];

  // get data from API, from DB...
  function loadResults(query: string | string[] | undefined) {
    return new Promise((resolve) => {
      console.log("Loading results for query:", query);
      fakeResults.push("Result 1");
      fakeResults.push("Result 2");
      fakeResults.push("Result 3");
      setTimeout(resolve, 3000);
    });
  }
  
  // search param query from the form parameters
  const query = (await searchParams).query
  await loadResults(query);

  return (
    <>
      <p>These are the search results for "{query}".</p>
      {fakeResults.length === 0 && <p>No results found.</p>}
      {fakeResults.length > 0 && (
        <ul>
          {fakeResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      )}
    </>
  );
}