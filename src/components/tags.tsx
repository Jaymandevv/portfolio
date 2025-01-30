interface TagsProps {
  items: Tstacks;
}

function Tags({ items }: TagsProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {items.map((s) => (
        <div key={s} className="bg-teal-400/10 px-3 py-1 text-xs text-teal-300 rounded-full">
          <p>{s}</p>
        </div>
      ))}
    </div>
  );
}

export default Tags;
