import instance from "@/utils/instance";

export async function GET(request, { params }) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1;
  const cats = url.searchParams.get("cats") || null;

  const res = await instance.get(`/brands/${params.slug}`, {
    params: {
      page,
      cats,
    },
  });

  return Response.json(res.data);
}
