import connectMongo from "@/app/database/db";
import Message from "@/app/database/models/Message";
import { NextResponse } from "next/server";

export async function POST(request:Request) {
    try {
        let { name, email, message, type } = await request.json();

        // Check for all required fields
        if (!(name && email && message && type)) {
            return NextResponse.json(
                { message: "Please fill all fields" },
                { status: 400 }
            );
        }

        // Connect to MongoDB
        await connectMongo();

        // Create new message
        let newMessage = await Message.create({ name, email, message, type });

        // Return success response
        return NextResponse.json(
            { newMessage, message: "Message created successfully" },
            { status: 201 }
        );
    } catch (error) {
        // Log error (optional)
        console.error("Error creating message:", error);

        // Return error response
        return NextResponse.json(
            { message: "Something went wrong", error: error }, // Expose only error message
            { status: 500 }
        );
    }
}
