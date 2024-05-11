import { copy, tick, trash } from "@/assets";
import PropTypes from "prop-types";

const ArticleTile = ({ article, copied, handleSetArticle, handleCopy, handleDelete }) => {
  return (
    <div className="link_card" onClick={() => handleSetArticle(article)}>
      <div className="copy_btn hover:bg-blue-50" onClick={() => handleCopy(article.url)}>
        <img src={copied ? tick : copy} alt="copy_icon" className="w-[50%] h-[50%] object-contain " />
      </div>
      <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">{article.url}</p>
      <div className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-red-100" onClick={(e) => handleDelete(e, article)}>
        <img src={trash} alt="delete" className="w-4 h-4" />
      </div>
    </div>
  );
};

export default ArticleTile;

ArticleTile.propTypes = {
  article: PropTypes.object.isRequired,
  copied: PropTypes.bool.isRequired,
  handleSetArticle: PropTypes.func.isRequired,
  handleCopy: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
