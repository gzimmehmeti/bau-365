"use client";

import { useLocale, useTranslations } from "next-intl";
import { useAuctions } from "@/hooks/query/auction";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AuctionsPage() {
  const t = useTranslations(); // <-- we will namespace it
  const locale = useLocale();

  const { data, isLoading, isError, error } = useAuctions();

  if (isLoading) return <div>{t("loading")}</div>;
  if (isError)
    return (
      <div className="text-red-500">
        {t("error")} {(error as Error).message}
      </div>
    );

  if (!data || data.length === 0) {
    return <div>{t("noResults")}</div>;
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">{t("title")}</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((auction) => (
          <div key={auction.id} className="border rounded-lg p-4 space-y-2">
            <h2 className="font-semibold text-lg">{auction.title}</h2>
            <p className="text-sm text-gray-500">
              {t("status")}: <strong>{auction.status}</strong>
            </p>
            <p className="text-sm">
              {t("currentPrice")}: <strong>{auction.currentPrice} €</strong>
            </p>
            <p className="text-xs text-gray-400">
              {t("endsAt")}: {new Date(auction.endsAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-around">
        <Button>
          <Link href={`/${locale}/login`}>Login</Link>
        </Button>
        <Button>
          <Link href={`/${locale}/register`}>Register</Link>
        </Button>
        <Button>
          <Link href={`/${locale}/dashboard`}>Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
