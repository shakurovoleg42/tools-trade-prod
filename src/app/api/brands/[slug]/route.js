import instance from "@/utils/instance";

export async function GET(request, { params }) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1;

  const res = await instance.get(`/brands/${params.slug}`, {
    params: {
      page,
    },
  });

  return Response.json(res.data);
}
