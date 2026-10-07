import axios from "axios";

// put in another file and import it
// lib/definitions.ts, models/User.ts, types/User.ts
type User  = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export async function GET() {
  console.log("Something on the server...");
  // req http
  // https://jsonplaceholder.typicode.com/users

  // with JS fetch (Native JS API, replacement for XmlHttpRequest)
  // override by next
  // https://nextjs.org/docs/app/api-reference/functions/fetch
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await response.json();
  //   return new Response(JSON.stringify(data));

  
  // with axios (3rd party library)
  const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
  const data = response.data;
  return new Response(JSON.stringify(data));
}