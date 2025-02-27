import formattedNumber from "../utils/formattedNumber";

type Props = {
  title: string;
  content: number | string | undefined;
};

const ListElement = ({ content, title }: Props) => {
  return (
    <li className="flex gap-2">
      <span className="font-semibold text-[.9rem]">{title}:</span>
      <span className="font-light text-[.9rem]">
        {content &&
          (typeof content === "number" ? formattedNumber(content) : content)}
      </span>
    </li>
  );
};

export default ListElement;
