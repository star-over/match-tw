import { render } from "@/lib/render";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const el = <div>hello</div>
    const html = await render(el);
    return new NextResponse(html, {
      status: 200,
      headers: { 'content-type': 'text/html' }
    })
  } catch (error) {
    throw new Error("Failed to render")
  }
}
