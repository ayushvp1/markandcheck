import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { dbConnect } from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "Username and password are required" },
        { status: 400 }
      );
    }

    await dbConnect();

    const existing = await Admin.findOne({ username });
    if (existing) {
      return NextResponse.json(
        { message: "Admin with this username already exists" },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const admin = await Admin.create({ username, passwordHash });

    return NextResponse.json(
      { message: "Admin registered successfully", adminId: admin._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering admin", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
