import connectMongo from "@/app/database/db";
import user from "@/app/database/models/User";
import { NextResponse } from "next/server";
// @ts-ignore
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    await connectMongo();
    
    const { firstname, surname, email, password, confirmpassword } = await request.json();

    // Check if the user already exists
    const checkuser = await user.find({ email });
    if (checkuser.length > 0) {
      return NextResponse.json({ message: "User with this email already exists" }, { status: 400 });
    }

    // Check if passwords match
    if (password !== confirmpassword) {
      return NextResponse.json({ message: "Passwords do not match" }, { status: 400 });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newuser = await user.create({
      firstname,
      surname,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ newuser : {firstname : newuser.firstname,surname : newuser.surname,email : newuser.email, id : newuser._id}, message: "User created successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating user", error: error }, { status: 500 });
  }
}
