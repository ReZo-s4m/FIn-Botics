import { checkUser } from "@/lib/checkUser";

export async function POST(req) {
    console.log((req.data))
    const user = await checkUser()
  return Response.json(req);
}