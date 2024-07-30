import instance from "@/utils/instance";

export async function GET() {
  const res = await instance.get("/big_category");

  return Response.json(res.data);
}
