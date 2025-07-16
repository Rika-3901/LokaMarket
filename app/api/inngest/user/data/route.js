import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import connectDB from '@/lib/connectDB';
import User from '../../../../../../models/user'; // ✅ Naik 4 folder ke root

export async function GET() {
        try {
            await connectDB();

            const { userId } = auth();

            if (!userId) {
            return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
            }

            const user = await User.findById(userId);

            if (!user) {
            return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
            }

            return NextResponse.json({ success: true, user }, { status: 200 });

        } catch (error) {
            console.error('Error fetching user data:', error);
            return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
        }
        }
