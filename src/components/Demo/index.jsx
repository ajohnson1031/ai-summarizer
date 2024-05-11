import { linkIcon } from "../../assets";

const Demo = () => {
  return (
    <section className="mt-16 w-full max-w-xl">
      {/* SEARCH */}
      <div className="flex flex-col w-full gap-2">
        <form onSubmit={() => {}} className="relative flex justify-center items-center">
          <img src={linkIcon} alt={"link icon"} className="absolute left-0 my-2 ml-3 w-5" />
          <input type="url" placeholder="Enter a URL" value="" onChange={() => {}} required className="url_input peer" />
          <button type="submit" className="submit_btn hover:border-blue-600! peer-focus:border-blue-600 peer-focus:text-blue-600">
            &#8617;
          </button>
        </form>

        {/* BROWSER URL HISTORY */}
      </div>
    </section>
  );
};

export default Demo;
