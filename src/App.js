import './App.css';
import { useEffect } from 'react';
import CardComponent from './cardComponent';
import { useSelector, useDispatch } from 'react-redux';
import { next, prev, getData } from './actionCreators';

function App() {
  const { page, data } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(page));
  }, [dispatch, page]);

  const handleNext = () => {
    dispatch(next());
  };

  const handlePrev = () => {
    dispatch(prev());
  };

  return (
    <>
      <h1 className="page_tittle">Star Wars Characters</h1>
      <div className="page__container">
        {data.map((ele) => (
          <CardComponent data={ele} />
        ))}
      </div>
      <div className="Buttons">
        <button onClick={handlePrev}>Prev</button>
        <p>{page}</p>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
}

export default App;
