import type { Locale } from "../config";
import { en } from "./en";
import { ru, type Dictionary } from "./ru";
import { uk } from "./uk";

export const DICTIONARIES: Record<Locale, Dictionary> = { en, uk, ru };

export const getDictionary = (locale: Locale): Dictionary => DICTIONARIES[locale];
