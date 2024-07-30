import instance from "@/utils/instance";

export async function GET(req) {
  const url = new URL(req.url);
  const query = url.searchParams.get("query") || null;

  const res = await instance.get("/search", {
    params: {
      query,
    },
  });

  return Response.json(res.data);
}
