import connectDB from "@/config/db";
import Product from "@/models/product";
import { NextResponse } from "next/server";


export async function GET(request) {
    try {

        await connectDB()

        const products = await Product.find({})
        return NextResponse.json({ success:true, product })

    } catch (error) {
        return NextResponse.json({ succes: false, message: error.message })
    }
}