import { NextResponse } from "next/server";

export const GET = async (request) => {
  return NextResponse.json({ message: "Form submitted successfully" });
};
export const POST = async (request) => {
  const reqBody = await request.json();
  console.log(reqBody);
  return NextResponse.json({
    message: "Post request is called",
    email: reqBody.email,
  });
};
