import connectDB from "@/config/db";
import User from "@/models/user";
import { auth } from "@clerk/nextjs"; // ✅ ganti dari getAuth
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const { userId } = auth(); // ✅ ambil userId dengan benar

        if (!userId) {
        return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        await connectDB();
        const user = await User.findById(userId);

        if (!user) {
        return NextResponse.json({ success: false, message: "User Not Found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, user });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
    }
