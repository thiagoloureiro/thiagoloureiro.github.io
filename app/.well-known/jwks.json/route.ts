export async function GET() {
  return Response.json(
    {
      keys: [],
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}
