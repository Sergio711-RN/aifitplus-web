import type { Locale } from "../config";
import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { it } from "./it";
import { ru, type Dictionary } from "./ru";
import { uk } from "./uk";

export const DICTIONARIES: Record<Locale, Dictionary> = { en, uk, ru, fr, de, es, it };

export const getDictionary = (locale: Locale): Dictionary => DICTIONARIES[locale];
