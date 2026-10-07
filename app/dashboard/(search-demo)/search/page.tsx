import Form from 'next/form'

export default async function DemoPage() {
  // get data from API, from DB...
  function doSomeAsyncTreatment() {
    return new Promise((resolve) => setTimeout(resolve, 3000));
  }

  await doSomeAsyncTreatment();

  return (
    <>
      <p>This is the demo page.</p>
      <Form action="results">
        <input name="query" style={{ border: "1px solid black" }}/>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
}