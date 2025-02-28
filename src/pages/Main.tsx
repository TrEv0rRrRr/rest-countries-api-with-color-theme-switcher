import Select from "react-select";
import CountryList from "../components/CountryList";
import { MagnifyingGlass } from "../components/icons";
import useFilter from "../hooks/useFilter";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "Asia", label: "Asia" },
  { value: "Americas", label: "America" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const Main = () => {
  const { filteredCountries, handleInputChange, handleSelectChange } =
    useFilter();

  return (
    <main className="flex flex-col w-full px-5 gap-4 relative">
      <div className="flex flex-col gap-10 sticky top-0 z-10 bg-DM-Bg py-7">
        <div className="flex relative flex-col gap-10">
          <MagnifyingGlass styles="absolute size-5 top-[12.5px] left-6" />
          <input
            className="bg-DM-Elements w-full py-3 px-16 rounded placeholder:text-homepage-items shadow-lg"
            type="text"
            placeholder="Search for a country..."
            onChange={handleInputChange}
          />
        </div>

        <Select
          options={options}
          placeholder="Filter by Region"
          unstyled
          isClearable
          classNames={{
            control: () =>
              "bg-DM-Elements py-3 px-5 gap-10 justify-between rounded w-max text-homepage-items shadow-lg",
          }}
          styles={{
            menu: (provided) => ({
              ...provided,
              width: "200px",
              backgroundColor: "var(--color-DM-Elements)",
              paddingInline: "20px",
              paddingBlock: "12px",
              borderRadius: ".25rem",
              marginTop: "12px",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }),
            menuList: (provided) => ({
              ...provided,
              maxHeight: "200px",
              overflowY: "auto",
            }),
            option: (provided) => ({
              ...provided,
              marginBottom: "8px", // Espaciado entre opciones
              padding: "10px",
              borderRadius: "5px",
              "&:last-of-type": {
                marginBottom: "0px", // Elimina el margen en la última opción
              },
              "&:hover": {
                backgroundColor: "hsl(209, 23%, 16%)",
              },
            }),
          }}
          onChange={handleSelectChange}
        />
      </div>
      <article className="flex flex-col items-center md:grid md:grid-cols-2 xl:grid-cols-4 gap-10 px-6">
        {filteredCountries.length > 0 ? (
          <CountryList countries={filteredCountries} />
        ) : (
          <p className="">No countries found!</p>
        )}
      </article>
    </main>
  );
};

export default Main;
