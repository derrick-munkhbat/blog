// export default function Home() {
//   return <div>Articles - blog</div>;
// }

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import {Card} from "@/components/Content-home/Card";
import {useEffect, useState} from "react";
import {Loader} from "@/components/Loader";

export default function Blog() {
  const [articles, setArticles] = useState();
  const [currentPage, setCurrentPage] = useState(1);

    async function fetchInitialArticles(){
      const res = await fetch("https://dev.to/api/articles?username=j471n")
      const data = await res.json();
          setArticles(data);
    }

    useEffect(() => {
      fetchInitialArticles()
    }, []);

    if (articles === undefined) return <Loader/>;

    function loadNext() {
      fetch(`https://dev.to/api/articles?username=j471n&per_page=9&page=${currentPage + 1}`)
        .then((response) => response.json())
        .then((data) => {
          setArticles([...articles, ...data]);
          setCurrentPage(currentPage + 1);
        })
        .catch((e)=>{

        });
    }

    if (articles === undefined) return <Loader />;
  return (
      <>
        <div className="flex flex-col p-2 gap-2 w-10/12 mx-auto">
          <Header/>
        </div>

        <div>

        <div className="container mx-auto">
        <h1 className="text-xl p-3">All Blog Post</h1>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {articles.map((article) => (
              <Card key={article.id} article={article} />
            ))}
          </div>

          <div className="py-8 text-center">
            <button className="p-6 rounded bg-blue-50 hover:bg-blue-200" onClick={loadNext}>
              Load more
            </button>
          </div>
        </div>

        </div>
        <div className="bg-gray-200">
          <Footer/>
        </div>
      </>
    );

}
