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
    <>
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="w-full p-6 flex flex-col gap-8"
      >
        <nav>
          <button
            className="cursor-pointer px-8 py-2 bg-DM-Elements flex gap-2 items-center shadow-xl rounded"
            onClick={() => navigate("/")}
          >
            <ArrowLeft styles="size-4.5" />
            Back
          </button>
        </nav>

        <article className="flex flex-col gap-12">
          <header className="flex flex-col gap-10">
            <figure>
              <img className="w-full" src={flags.png} alt={`${name}'s flag`} />
            </figure>
            <h1 className="text-2xl font-bold">{name}</h1>
          </header>

          <section aria-labelledby="country-info">
            <h2 id="country-info" className="sr-only">
              Country Information
            </h2>
            <dl className="flex flex-col gap-2">
              <DescriptionListItem title="Native Name" content={nativeName} />
              <DescriptionListItem title="Population" content={population} />
              <DescriptionListItem title="Region" content={region} />
              <DescriptionListItem title="Sub Region" content={subregion} />
              <DescriptionListItem title="Capital" content={capital} />
            </dl>
          </section>

          <section aria-labelledby="additional-info">
            <h2 id="additional-info" className="sr-only">
              Additional Information
            </h2>
            <dl className="flex flex-col gap-2">
              <DescriptionListItem
                title="Top Level Domain"
                content={topLevelDomain}
              />
              <DescriptionListItem title="Currencies" content={currencies} />
              <DescriptionListItem title="Languages" content={languages} />
            </dl>
          </section>

          {borderCountries.length > 0 && (
            <section className="flex flex-col gap-3" aria-labelledby="borders">
              <h2 id="borders">Border Countries:</h2>
              <ul className="w-full flex gap-3 flex-wrap justify-center">
                {borderCountries.map((border, index) => (
                  <li
                    className="bg-DM-Elements py-2 px-7  shadow-xl rounded text-homepage-items"
                    key={index}
                  >
                    {border}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </motion.main>
    </>
  );
};

export default CountryDetails;
