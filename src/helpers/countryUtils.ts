import { Data } from "../types/Data";

export const getBorderCountryNames = (
  borders: string[] | undefined,
  countries: Data[]
): string[] => {
  if (!borders || borders.length === 0) return [];

  const countryMap = countries.reduce((acc, country) => {
    const cleanName = country.name.replace(/\s*\(.*?\)\s*/g, "");
    acc[country.alpha3Code] = cleanName;
    return acc;
  }, {} as Record<string, string>);

  return borders.map((code) => countryMap[code] || code);
};
