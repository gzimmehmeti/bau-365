import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import AppProviders from "@/providers/app-providers";
import { locales } from "@/i18n/config"; // we'll define this below
// @ts-ignore
import "../globals.css";

// Optional, but keeps it dynamic-friendly
export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  // 👇 params is now a Promise in async layouts
  params: Promise<{ locale: string }>;
}) {
  // 👇 Must await it in Next 16
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppProviders>{children}</AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
