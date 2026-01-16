"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

type Props = {
  params: {
    locale: string;
  };
};

const page = ({ params }: Props) => {
  const t = useTranslations();
  return (
    <div className="space-y-2">
      <h1 className="text-xl font-semibold">{t("login.title")}</h1>
      <p>
        {t("login.message")}{" "}
        <Button>
          <Link className="" href={`/`}>
            {t("login.link")}
          </Link>
        </Button>
        .
      </p>
    </div>
  );
};

export default page;
