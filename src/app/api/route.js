import  { NextResponse } from 'next/server'


export async function GET(req) {
    return NextResponse.json({
        hello: "world",
    });
    
    const url = new URL(req.url);

    const response = await fetch()
}