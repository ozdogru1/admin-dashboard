import Card from "../components/Card";
import AddNews from "../components/AddNews/AddNews";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const News = () => {
  const [openModal, setOpenModal] = useState(false);
  const [newsList, setNewsList] = useState(JSON.parse(localStorage.getItem("newsList")) || []);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const addNewsHandler = (title, content) => {
    setNewsList([
      ...newsList,
      { title: title, content: content, id: uuidv4() },
    ]);
  };
  useEffect(() => {
    localStorage.setItem("newsList", JSON.stringify(newsList));
  }, [newsList]);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleOpenModal}
        className=" mt-10  text-white bg-blue-700 hover:bg-blue-800 
        focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
        text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Add news
      </button>
      {openModal && (
        <AddNews onClose={handleCloseModal} addNewsHandler={addNewsHandler} />
      )}
      <div className="flex flex-wrap justify-center">
        {newsList.map((item) => (
          <Card key={item.id} title={item.title} body={item.content} />
        ))}
      </div>
    </div>
  );
};

export default News;
