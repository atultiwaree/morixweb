// export async function GET(request: Request) {
//   return new Response("Hello, Next.js!");
// }


export const runtime = 'edge';

export async function GET() {
  return new Response(
    JSON.stringify({ message: 'Hello from Edge Runtime!' }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
