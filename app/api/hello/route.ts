// export async function GET(request: Request) {
//   return new Response("Hello, Next.js!");
// }


export const runtime = 'edge';

export default function handler(req) {
  return new Response(JSON.stringify({ message: 'Hello from Edge!' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
