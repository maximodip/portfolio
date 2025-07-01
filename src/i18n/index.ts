import { portugues } from "@/i18n/pt";
import { english } from "@/i18n/en";
import { spanish } from "@/i18n/es";
import type { I18nTranslations } from "@/i18n/types";

const LANG = {
  PORTUGUES: "pt",
  ENGLISH: "en",
  SPANISH: "es",
};

export const getI18N = ({
  currentLocale = "es",
}: {
  currentLocale: string | undefined;
}): I18nTranslations => {
  if (currentLocale === LANG.PORTUGUES) return portugues;
  if (currentLocale === LANG.ENGLISH) return english;
  return spanish;
};
