"use client";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="p-6 flex justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl">{t("register.title")}</CardTitle>
          <CardDescription>{t("register.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border border-dashed p-6 text-sm text-gray-600">
            {t("register.placeholder")}
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">{t("register.haveAccount")}</span>
            <Button asChild variant="outline">
              <Link href={`/${locale}/login`}>{t("register.loginLink")}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
