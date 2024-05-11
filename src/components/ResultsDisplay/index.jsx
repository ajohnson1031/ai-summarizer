import { copy, loader, tick } from "@/assets";
import PropTypes from "prop-types";

const ResultsDisplay = ({ isFetching, error, summary, copied, handleCopy }) => {
  return (
    <div className="my-10 max-w-full flex justify-center">
      {isFetching ? (
        <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
      ) : error ? (
        <p className="font-inter font-bold text-black text-center">
          Well, that wasn&apos;t supposed to happe...
          <br />
          <span className="font-satoshi font-normal text-gray-700">{error?.data?.error}</span>
        </p>
      ) : (
        summary && (
          <div className="flex flex-col gap-3">
            <h2 className="font-satoshi font-bold text-gray-600 text-xl">
              Article <span className="blue_gradient">Summary</span>
            </h2>
            <div className="summary_box">
              <div
                className="relative ml-auto right-0 flex w-fit bg-gray-100 hover:bg-blue-100 items-center gap-1 mb-2 px-3 py-2 rounded-md cursor-pointer"
                onClick={(e) => handleCopy(e, "summary", summary)}
              >
                <p className="font-semibold text-gray-600 text-xs select-none">Copy Summary</p>
                <div className="copy_bt">
                  <img src={copied ? tick : copy} alt="copy_icon" className="w-full h-full object-contain " />
                </div>
              </div>
              <p className="font-inter font-medium text-sm text-gray-700">{summary}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ResultsDisplay;

ResultsDisplay.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  summary: PropTypes.string.isRequired,
  copied: PropTypes.bool.isRequired,
  handleCopy: PropTypes.func.isRequired,
};
