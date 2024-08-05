import Tag from "../Tag";

interface TagList {
  list: string[];
}

export const Tags = ({ list }: TagList) => {
  return (
    <div className="flexAlign gap-2">
      {list.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  );
};
