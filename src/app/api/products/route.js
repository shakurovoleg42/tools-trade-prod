import instance from "@/utils/instance";

export async function GET(req) {
  const url = new URL(req.url);
  const page = url.searchParams.get("page") || 1;
  const cats = url.searchParams.get("cats") || null;

  const res = await instance.get("/products", {
    params: {
      page,
      cats,
    },
  });

  return Response.json(res.data);
}
