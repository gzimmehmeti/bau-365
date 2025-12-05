export type AuctionFilters = {
  status?: AuctionStatus;
  categoryId?: string;
  q?: string; // search query
  minPrice?: number;
  maxPrice?: number;
  sort?: "ASC" | "DESC";
};

export const auctionKeys = {
  all: ["auctions"] as const,

  lists: () => [...auctionKeys.all, "list"] as const,
  list: (filters: AuctionFilters = {}) =>
    [...auctionKeys.lists(), filters] as const,

  details: () => [...auctionKeys.all, "detail"] as const,
  detail: (id: string) => [...auctionKeys.details(), id] as const,
} as const;

export type AuctionStatus = "SCHEDULED" | "OPEN" | "CLOSED";

export type AuctionType = {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;

  startingPrice: number;
  currentPrice: number;

  startsAt: string; // ISO date
  endsAt: string; // ISO date

  status: AuctionStatus;

  // Optional fields
  categoryId?: string;
  organizer?: string;
};
