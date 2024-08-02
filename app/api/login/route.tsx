import connectMongo from "@/app/database/db";
import user from "@/app/database/models/User";
import { NextResponse } from "next/server";
// @ts-ignore
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export async function POST(request: Request) {

  let secret : string   = process.env.JWT_SECRET as string

  try {
    const { email, password } = await request.json();

    await connectMongo();

    const founduser = await user.findOne({ email });

    if (founduser) {
      const isPasswordValid = await bcrypt.compare(password, founduser.password);

      if (isPasswordValid) {
        const token = jwt.sign({ email: founduser.email }, secret, {
          expiresIn: "1h",
        });
        return NextResponse.json({ user: {firstname : founduser.firstname,surname : founduser.surname,email : founduser.email, id : founduser._id}, token }, { status: 200 });
      } else {
        return NextResponse.json({ message: "Wrong username or password" }, { status: 400 });
      }
    } else {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Error during login", error: error }, { status: 500 });
  }
}
