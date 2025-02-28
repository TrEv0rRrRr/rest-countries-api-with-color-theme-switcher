import formattedNumber from "../utils/formattedNumber";

type Props = {
  title: string;
  content: number | string | undefined;
};

const ListElement = ({ content, title }: Props) => {
  return (
    <li className="flex gap-1 items-center flex-wrap">
      <span className="font-medium text-base mt-[.1rem]">{title}:</span>
      <span className="font-light text-[.9rem] mt-[.2rem] md:mt-[.3rem] xl:mt-[.2rem]">
        {content &&
          (typeof content === "number" ? formattedNumber(content) : content)}
      </span>
    </li>
  );
};

export default ListElement;
