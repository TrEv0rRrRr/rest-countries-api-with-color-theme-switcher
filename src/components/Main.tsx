import Select from "react-select";
import CountriesData from "../data.json";
import { MagnifyingGlass } from "./icons";
import ListElement from "./ListElement";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "Asia", label: "Asia" },
  { value: "America", label: "America" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const Main = () => {
  return (
    <main className="flex flex-col w-full px-5 gap-4 relative">
      <div className="flex flex-col gap-10 sticky top-0 z-10 bg-DM-Bg py-7">
        <div className="flex relative flex-col gap-10">
          <MagnifyingGlass styles="absolute size-5 top-[12.5px] left-6" />
          <input
            className="bg-DM-Elements w-full py-3 px-16 rounded placeholder:text-homepage-items shadow-lg"
            type="text"
            placeholder="Search for a country..."
          />
        </div>

        <Select
          options={options}
          placeholder="Filter by Region"
          unstyled
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
        />
      </div>
      <article className="flex flex-col items-center md:grid md:grid-cols-4 gap-10 px-6">
        {CountriesData.map(
          ({ name, flags, population, region, capital }, index) => {
            return (
              <section key={index} className="bg-DM-Elements rounded-md">
                <img
                  className="rounded-t-md"
                  src={flags.png}
                  alt={`${name}'s flag`}
                />
                <div className="flex flex-col gap-4 px-6 pb-10 pt-6">
                  <h2 className="font-bold text-xl">{name}</h2>
                  <ul className="flex flex-col gap-1">
                    <ListElement title="Population" content={population} />
                    <ListElement title="Region" content={region} />
                    <ListElement title="Capital" content={capital} />
                  </ul>
                </div>
              </section>
            );
          }
        )}
      </article>
    </main>
  );
};

export default Main;
