import instance from "@/utils/instance";

export async function GET(request, { params }) {
  const res = await instance.get(`/products/${params.slug}`);

  return Response.json(res.data);
}
