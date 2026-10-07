import postgres from 'postgres';

// TODO: Move this to a config file / singleton
// https://github.com/porsager/postgres#connection
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function GET() {
    console.log("Something on the server...");
    // select * from users;
    const users = await sql`SELECT * FROM users`;
    return new Response(JSON.stringify(users));
}