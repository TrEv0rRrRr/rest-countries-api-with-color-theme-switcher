import { Currency, Language } from "../types/Data";
import DescriptionDetails from "./DescriptionDetails";

type Props = {
  title: string;
  content: number | string | string[] | Currency[] | Language[] | undefined;
};

const DescriptionListItem = ({ content, title }: Props) => {
  return (
    <div className="flex gap-2">
      <dt>
        <strong className="font-semibold text-base">{title}:</strong>
      </dt>
      <DescriptionDetails content={content} />
    </div>
  );
};

export default DescriptionListItem;
