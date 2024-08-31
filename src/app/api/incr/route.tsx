import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = Redis.fromEnv();

export const POST = async (req: NextRequest) => {
    if (req.headers.get("Content-Type") !== "application/json") {
        return new NextResponse("must be json", { status: 400 });
    }
    const slug = "pageviews:cv:minhaz";
    const ip = req.headers.get('X-Forwarded-For');
    if (ip) {
        // Hash the IP in order to not store it directly in your db.
        const buf = await crypto.subtle.digest(
            "SHA-256",
            new TextEncoder().encode(ip),
        );
        const hash = Array.from(new Uint8Array(buf))
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");

        // deduplicate the ip for each slug
        const isNew = await redis.set(["deduplicate", hash, slug].join(":"), true, {
            nx: true,
            ex: 24 * 60 * 60,
        });
        if (!isNew) {
            return new NextResponse(null, { status: 202 });
        }
    }
    await redis.incr(slug);
    return new NextResponse(null, { status: 202 });
}
