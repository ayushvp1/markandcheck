import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("Please define the JWT_SECRET environment variable in .env");
}

export async function GET(request) {
  try {
    const token = request.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json({ authenticated: false }, { status: 200 });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      return NextResponse.json(
        { authenticated: true, username: decoded.username },
        { status: 200 }
      );
    } catch {
      return NextResponse.json({ authenticated: false }, { status: 200 });
    }
  } catch (error) {
    console.error("Error checking admin session", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
