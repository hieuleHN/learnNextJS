export async function POST(req) {
  const body = await req.json();

  try {
    console.log("Proxying GraphQL request to PostGraphile:", body.operationName || "<no-op>");

    const response = await fetch("http://localhost:5000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      data = { raw: text };
    }

    if (!response.ok || data.errors) {
      console.error("PostGraphile proxy response error:", response.status, data);
    }

    return Response.json(data, { status: response.status });
  } catch (error) {
    console.error("API Route Error while proxying to PostGraphile:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}