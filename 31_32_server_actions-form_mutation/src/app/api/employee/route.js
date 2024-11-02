import { NextResponse } from "next/server";

export const GET = async (request) => {
  return NextResponse.json({ message: "GET Request fire" });
};
export const POST = async (request) => {
  const reqBody = await request.json();
  return NextResponse.json(reqBody);
};
export const PUT = async (request) => {
  const reqBody = await request.json();
  return NextResponse.json(reqBody);
};
export const PATCH = async (request) => {
  const reqBody = await request.json();
  return NextResponse.json(reqBody);
};
export const DELETE = async (request) => {
  const reqBody = await request.json();
  return NextResponse.json(reqBody);
};
