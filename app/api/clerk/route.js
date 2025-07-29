import { checkUser } from "@/lib/checkUser";

export async function POST() {
  
    const user = await checkUser()
  return Response.json(result);
}