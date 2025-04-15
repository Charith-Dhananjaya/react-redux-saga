import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterState';
import { getPhotos } from './galleryState';

function App() {

  const {count} = useSelector(state=>state.counter);
  const dispatch = useDispatch();

  const photos = useSelector(state => state.gallery.photos)


  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch])
  console.log(photos)

  return (
    <div className="App">
      <div>Count : {count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>PHOTO GALLERY</h1>
      <p>this is photo gallery made by using redux thunk, which is useful for simple for basic asyncchronus actions while Saga uses generators for more complex,we use thunk </p>
      <hr />
      <div className="gallery">
        {photos.map(photo => 
        <img
        key= {photo.id}
        alt={photo.author}
        src={photo.download_url}
        width="200"
        height="200"
        />)}
      </div>
      <button>view more</button>
    </div>
  );
}

export default App;
