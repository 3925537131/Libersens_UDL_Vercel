import { NextResponse } from "next/server";
import { createCheckout } from "@/lib/shopify";

export async function POST(request) {
  try {
    const { lines } = await request.json();
    if (!Array.isArray(lines) || lines.length === 0) {
      return NextResponse.json({ url: null }, { status: 400 });
    }
    const url = await createCheckout(lines);
    return NextResponse.json({ url });
  } catch {
    return NextResponse.json({ url: null }, { status: 500 });
  }
}
