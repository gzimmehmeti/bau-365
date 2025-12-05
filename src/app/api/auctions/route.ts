// src/app/api/auctions/route.ts
import { NextResponse } from "next/server";
import { AuctionType, AuctionStatus } from "@/types";

const mockAuctions: AuctionType[] = [
  {
    id: "1",
    title: "Vintage Watch",
    description: "Classic mechanical watch from 1970s.",
    imageUrl: "https://via.placeholder.com/400x300?text=Vintage+Watch",
    startingPrice: 100,
    currentPrice: 150,
    startsAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(), // 1h ago
    endsAt: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(), // +24h
    status: "OPEN" satisfies AuctionStatus,
    categoryId: "watches",
    organizer: "Demo Auction House",
  },
  {
    id: "2",
    title: "Art Painting",
    description: "Abstract painting, signed by the artist.",
    imageUrl: "https://via.placeholder.com/400x300?text=Art+Painting",
    startingPrice: 500,
    currentPrice: 620,
    startsAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    endsAt: new Date(Date.now() + 1000 * 60 * 60 * 5).toISOString(),
    status: "OPEN" satisfies AuctionStatus,
    categoryId: "art",
    organizer: "Gallery Demo",
  },
  {
    id: "3",
    title: "Classic Car Model",
    description: "1:18 scale model of a classic sports car.",
    imageUrl: "https://via.placeholder.com/400x300?text=Car+Model",
    startingPrice: 50,
    currentPrice: 80,
    startsAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    endsAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // ended
    status: "CLOSED" satisfies AuctionStatus,
    categoryId: "collectibles",
    organizer: "Collector Demo",
  },
];

export async function GET(request: Request) {
  // Optional: read query params (status, q etc.)
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");

  let result = mockAuctions;

  if (status) {
    result = result.filter((a) => a.status === status);
  }

  return NextResponse.json(result);
}
