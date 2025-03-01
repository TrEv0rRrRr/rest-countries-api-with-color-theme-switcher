import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import DescriptionListItem from "../components/DescriptionListItem";
import { ArrowLeft } from "../components/icons";
import CountriesData from "../data.json";
import { getBorderCountryNames } from "../helpers/countryUtils";
import { Data } from "../types/Data";

const CountryDetails = () => {
  const location = useLocation();
  const country: Data = location.state?.country;

  const navigate = useNavigate();
  if (!country) return <p>Loading...</p>;

  const {
    flags,
    capital,
    name,
    nativeName,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

  const borderCountries = getBorderCountryNames(
    borders,
    CountriesData as Data[]
  );

  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full p-6 flex flex-col gap-8 xl:p-20 xl:gap-20"
    >
      <nav>
        <button
          className="cursor-pointer px-8 py-2 bg-LM-Elements dark:bg-DM-Elements flex gap-2 items-center shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded xl:px-10 xl:text-xl xl:gap-3"
          onClick={() => navigate("/")}
        >
          <ArrowLeft styles="size-4.5 xl:size-6" />
          Back
        </button>
      </nav>

      <article className="flex flex-col gap-12 xl:flex-row xl:gap-32 xl:items-center xl:h-full">
        <header className="xl:w-full">
          <figure className="w-full">
            <img
              className="w-full h-[20rem] object-cover rounded-md"
              src={flags.png}
              alt={`${name}'s flag`}
            />
          </figure>
        </header>

        <section className="flex flex-col gap-10 xl:w-full xl:self-center xl:items-start">
          <h1 className="text-2xl font-bold xl:text-4xl">{name}</h1>

          <div className="flex flex-col xl:flex-row xl:justify-between gap-10 w-full">
            {/* Información principal */}
            <section>
              <dl className="flex flex-col gap-2">
                <DescriptionListItem title="Native Name" content={nativeName} />
                <DescriptionListItem title="Population" content={population} />
                <DescriptionListItem title="Region" content={region} />
                <DescriptionListItem title="Sub Region" content={subregion} />
                {capital && (
                  <DescriptionListItem title="Capital" content={capital} />
                )}
              </dl>
            </section>

            {/* Información adicional */}
            <section>
              <dl className="flex flex-col gap-2">
                <DescriptionListItem
                  title="Top Level Domain"
                  content={topLevelDomain}
                />
                {currencies && (
                  <DescriptionListItem
                    title="Currencies"
                    content={currencies}
                  />
                )}
                <DescriptionListItem title="Languages" content={languages} />
              </dl>
            </section>
          </div>

          {/* Países limítrofes */}
          {borderCountries.length > 0 && (
            <section className="flex flex-col gap-3 xl:flex-row xl:flex-wrap">
              <h2>Border Countries:</h2>
              <ul className="flex gap-3 flex-wrap justify-center xl:justify-normal">
                {borderCountries.map((border, index) => (
                  <li
                    className="py-2 px-7 shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded text-homepage-items xl:py-1 bg-LM-Elements dark:bg-DM-Elements"
                    key={index}
                  >
                    {border}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>
      </article>
    </motion.main>
  );
};

export default CountryDetails;
