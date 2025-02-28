import { Currency, Language } from "../types/Data";
import formattedNumber from "../utils/formattedNumber";

type Props = {
  content: number | string | string[] | Currency[] | Language[] | undefined;
};

const DescriptionDetails = ({ content }: Props) => {
  if (!content || (Array.isArray(content) && content.length === 0)) return null;

  // Transformamos los datos según su tipo
  const formattedContent = Array.isArray(content)
    ? content
        .map((item) => (typeof item === "string" ? item : item.name))
        .join(", ")
    : typeof content === "number"
    ? formattedNumber(content)
    : content;

  return (
    <>
      {content && (
        <dd className="font-light text-[.9rem] mt-[.09rem]">
          {formattedContent}
        </dd>
      )}
    </>
  );
};

export default DescriptionDetails;
