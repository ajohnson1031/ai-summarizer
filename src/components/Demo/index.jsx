import { ArticleTile, ResultsDisplay, SearchForm } from "@/components/";
import { useLazyGetSummaryQuery } from "@/services/article";
import { useEffect, useState } from "react";

const Demo = () => {
  const [article, setArticle] = useState({ url: "", summary: "" });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState(false);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const handleUrlChange = (e) => {
    setArticle({ ...article, url: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const { data } = await getSummary({ articleUrl: article.url });

      if (data?.summary) {
        const newArticle = { ...article, summary: data.summary };

        const updatedAllArticles = [newArticle, ...allArticles];
        setArticle(newArticle);
        setAllArticles(updatedAllArticles);

        localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSetArticle = (article) => {
    setArticle(article);
  };

  const handleCopy = (copyUrl) => {
    setCopied(true);
    navigator.clipboard.writeText(copyUrl);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const handleDelete = (e, article) => {
    e.preventDefault();
    e.stopPropagation();

    const truncatedArticles = allArticles.filter((a) => a !== article);
    setAllArticles(truncatedArticles);
    localStorage.setItem("articles", JSON.stringify(truncatedArticles));

    setArticle({ url: "", summary: "" });
  };

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem("articles"));

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* SEARCH */}
      <div className="flex flex-col w-full gap-2">
        <SearchForm handleSubmit={handleSubmit} handleUrlChange={handleUrlChange} url={article.url} />

        {/* BROWSE URL HISTORY */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((article, i) => (
            <ArticleTile key={`link-${i}`} article={article} handleSetArticle={handleSetArticle} copied={copied} handleCopy={handleCopy} handleDelete={handleDelete} />
          ))}
        </div>
      </div>

      {/* DISPLAY RESULTS */}
      <ResultsDisplay isFetching={isFetching} error={error} summary={article.summary} />
    </section>
  );
};

export default Demo;
