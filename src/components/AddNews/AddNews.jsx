import React from "react";
import { useState } from "react";

const AddNews = ({ onClose, addNewsHandler }) => {
  const [newsData, setNewsData] = useState({
    title: "",
    content: "",
  });
  const [error, setError] = useState(false);
  const handleOnChange = (e) => {
    setNewsData({ ...newsData, [e.target.name]: e.target.value });
  };
  const submitNews = (e) => {
    e.preventDefault();
    if (
      newsData.title.trim().length === 0 ||
      newsData.content.trim().length === ""
    ) {
      setError(true);
    }
    addNewsHandler(newsData.title, newsData.content);
    setNewsData({ title: "", content: "" });
    onClose();
  };
  return (
    <form onSubmit={submitNews}>
      <div
        id="defaultModal"
        className=" overflow-y-auto 
         overflow-x-hidden fixed top-0 right-0
          left-0 z-50 w-full flex h-modal  justify-center items-center"
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add News
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                X
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  onChange={handleOnChange}
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="title"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Your message
                </label>
                <textarea
                  id="content"
                  name="content"
                  onChange={handleOnChange}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="content..."
                ></textarea>
              </div>
              {error && <p className="bg-red h-2 w-full">invalid inputs</p>}
            </div>
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddNews;
