import { checkUser } from "@/lib/checkUser";

export async function POST(req) {
    console.log((req.body.data.first_name))
    const user = await checkUser()
  return Response.json(req);
}