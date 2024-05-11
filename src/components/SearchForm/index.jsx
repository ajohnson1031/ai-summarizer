import PropTypes from "prop-types";

import { linkIcon } from "@/assets";
const SearchForm = ({ handleSubmit, handleUrlChange, url }) => {
  return (
    <form onSubmit={handleSubmit} className="relative flex justify-center items-center">
      <img src={linkIcon} alt={"link icon"} className="absolute left-0 my-2 ml-3 w-5" />
      <input type="url" placeholder="Enter a URL (e.g., http://example.com)" value={url} onChange={handleUrlChange} required className="url_input peer" />
      <button type="submit" className="submit_btn hover:border-blue-600! peer-focus:border-blue-600 peer-focus:text-blue-600">
        &#8617;
      </button>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleUrlChange: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};
