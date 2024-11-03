import { Card } from "./Card";

export const Cards = ({ contents }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {contents.map((content) => (
        <Card content={content} key={content.id} />
      ))}
    </ul>
  );
};
