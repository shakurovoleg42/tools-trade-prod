import instance from "@/utils/instance";

export async function GET() {
  const res = await instance.get("/");

  return Response.json(res.data);
}
