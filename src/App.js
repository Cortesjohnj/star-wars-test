import "./App.css";
import { useEffect, useState } from "react";
import CardComponent from "./cardComponent";
import axios from "axios";

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/?page=${page}`)
      .then(function (response) {
        const data = response.data.results;
        setData(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [page]);

  const nextPage = (e) => {
    e.preventDefault();
    setPage((page) => setPage(page + 1));
  };

  const prevPage = (e) => {
    e.preventDefault();
    setPage((page) => (page === 1 ? (page = 1) : page - 1));
  };

  return (
    <>
      <h1>Star Wars Characters</h1>
      {data.map((ele) => (
        <CardComponent data={ele} />
      ))}

      <div className="Buttons">
        <button onClick={prevPage}>Prev</button>
        <p>{page}</p>
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  );
}

export default App;
