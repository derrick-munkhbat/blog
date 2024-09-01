import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Loader } from "@/components/Loader";

export default function Home() {
  const [details, setDetails] = useState();
  const router = useRouter();

  useEffect(() => {
    if (router.query.username && router.query.slug) {
      fetch(
        `https://dev.to/api/articles/${router.query.username}/${router.query.slug}`
      )
        .then((response) => response.json())
        .then((data) => {
          setDetails(data);
        });
    }
  }, [router.query]);

  if (details === undefined) return <Loader />;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center">{details.title}</h1>
      <div
        className="mx-auto prose"
        dangerouslySetInnerHTML={{ __html: details.body_html }}
      ></div>
    </div>
  );
}
