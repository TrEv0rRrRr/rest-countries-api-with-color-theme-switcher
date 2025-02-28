import { useState } from "react";
import { SingleValue } from "react-select";
import CountriesData from "../data.json";
import { Data } from "../types/Data";

export default function useFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<
    SingleValue<{
      value: string;
      label: string;
    }>
  >(null);

  const filteredCountries = (CountriesData as Data[])
    .filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((country) =>
      selectedRegion ? country.region === selectedRegion.value : true
    );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const handleSelectChange = (
    selectedOption: SingleValue<{
      value: string;
      label: string;
    }>
  ) => setSelectedRegion(selectedOption);

  return { filteredCountries, handleInputChange, handleSelectChange };
}
