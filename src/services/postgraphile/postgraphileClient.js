const POSTGRAPHILE_ENDPOINT ="/api/postgraphile";

export async function fetchPostGraphile(
  query,
  variables = {}
) {
  try {
    const response = await fetch(
      POSTGRAPHILE_ENDPOINT,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      }
    );

    const result = await response.json();

    if (result.errors) {
      console.error(
        "PostGraphile Error:",
        result.errors
      );

      throw new Error(
        result.errors[0]?.message ||
          "GraphQL Error"
      );
    }

    return result.data;
  } catch (error) {
    console.error(
      "PostGraphile Client Error:",
      error
    );

    throw error;
  }
}