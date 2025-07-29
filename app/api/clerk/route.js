import { checkUser } from "@/lib/checkUser";

export async function POST(req) {
    console.log(JSON.stringify(req.data))
    const user = await checkUser()
  return Response.json(req);
}