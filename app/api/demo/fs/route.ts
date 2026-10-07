import { writeFileSync } from "node:fs";

export async function GET() {
  console.log("Something on the server...");
  const someContent = "This is some content to write to a file.";
  try {
    writeFileSync("output.txt", someContent);
    return new Response("File written successfully!");
  } catch (error) {
    console.error("Error writing to file:", error);
    return new Response("Error writing to file.", { status: 500 });
  }
  //
}