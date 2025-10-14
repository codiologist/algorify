import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  const body = await req.json();

  console.log("rererereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",body)
  const user = await prisma.projectInquiry.create({ data: body });
  return NextResponse.json(user);
}
