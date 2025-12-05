// i18n.ts
import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale } from "./src/i18n/config";

export { locales, defaultLocale };

export default getRequestConfig(async ({ locale }) => ({
  locale: locale ?? defaultLocale,
  messages: (await import(`./src/messages/${locale ?? defaultLocale}.json`))
    .default,
}));
