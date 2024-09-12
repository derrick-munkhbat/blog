import { Card } from "@/components/Content-home/Card";
import { useEffect, useState } from "react";
import { Loader } from "@/components/Loader";

export function Allcategory() {
  const [articles, setArticles] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchInitialArticles() {
    const res = await fetch("https://dev.to/api/articles?username=j471n");
    const data = await res.json();
    setArticles(data);
  }

  useEffect(() => {
    fetchInitialArticles();
  }, []);

  if (articles === undefined) return <Loader />;

  function loadNext() {
    fetch(
      `https://dev.to/api/articles?username=j471n&per_page=9&page=${
        currentPage + 1
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles([...articles, ...data]);
        setCurrentPage(currentPage + 1);
      })
      .catch((e) => {});
  }

  if (articles === undefined) return <Loader />;
  return (
    <>
      <div className="flex justify-between p-6">
        <div className="flex flex-wrap gap-3">
          <button className="hover:text-orange-500 text-2xl">All</button>
          <button className="hover:text-orange-500 text-2xl">Design</button>
          <button className="hover:text-orange-500 text-2xl">Travel</button>
          <button className="hover:text-orange-500 text-2xl">Fashion</button>
          <button className="hover:text-orange-500 text-2xl">Technology</button>
          <button className="hover:text-orange-500 text-2xl">Branding</button>
        </div>

        <button className="hover:text-orange-500 text-2xl">View All</button>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {articles.map((article) => (
            <Card key={article.id} article={article} />
          ))}
        </div>

        <div className="py-8 text-center">
          <button
            className="p-6 rounded bg-blue-50 hover:bg-blue-200"
            // onClick={loadNext} error garaad baihaar ni arrow function bolgoson
            onClick={() => loadNext}
          >
            Load more
          </button>
        </div>
      </div>
    </>
  );
}
