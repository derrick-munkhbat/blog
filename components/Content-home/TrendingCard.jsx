import Link from "next/link";

export function TrendingCard({ article, profileShown }) {
  return (
    <Link
      href={article.path}
      className="p-4 border rounded-2xl hover:bg-slate-50"
    >
      <img className="relative mb-4 rounded aspect-video absolute"
        src={article.cover_image}
        
      />
      
      <div className="p-2">
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tag_list.map((tag) => (
            <span
              key={tag}
              className="px-[10px] py-1 text-blue-700 bg-blue-200 rounded text-sm inline-block"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="mb-5 text-lg font-bold">{article.title}</h2>
      </div>
    </Link>
  );
}
