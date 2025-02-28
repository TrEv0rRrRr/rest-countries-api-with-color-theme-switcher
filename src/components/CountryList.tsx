import { useNavigate } from "react-router-dom";
import { Data } from "../types/Data";
import ListElement from "./ListElement";

type Props = {
  countries: Data[];
};

const CountryList = ({ countries }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      {countries.map((country, index) => {
        const { name, flags, population, region, capital } = country;

        return (
          <section
            key={index}
            className="bg-DM-Elements rounded-md shadow-lg hover:bg-DM-Elements/40 cursor-pointer hover:scale-110 transition-all"
            onClick={() =>
              navigate(`/country/${name}`, {
                state: {
                  country,
                },
              })
            }
          >
            <img
              className="rounded-t-md w-full object-cover aspect-video"
              src={flags.png}
              alt={`${name}'s flag`}
            />
            <div className="flex flex-col gap-4 px-6 pb-10 pt-6">
              <h2 className="font-bold text-[22px] leading-[1.4]">{name}</h2>
              <ul className="flex flex-col gap-1">
                <ListElement title="Population" content={population} />
                <ListElement title="Region" content={region} />
                <ListElement title="Capital" content={capital} />
              </ul>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default CountryList;
