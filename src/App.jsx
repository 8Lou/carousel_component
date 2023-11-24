import React from 'react';
import ReactDOM from 'react-dom';
import styles from './App.module.css';
import Carousel from './components/Carousel/Carousel';
import { imagesLibrary, wideImages, squareImages } from './utils/carouselData';

export const App = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, saepe porro fugit, autem rerum nulla quod
      dolorum consectetur natus, accusantium aliquam. Numquam perspiciatis aliquid ut quo ipsam pariatur ea a
      consequatur reprehenderit debitis quidem, maiores molestias nihil? Id sit autem suscipit tempore iure facilis
      error voluptatibus excepturi maiores aperiam nulla nisi non ratione iste, odit numquam rem, corporis deserunt
      repellat totam? Corrupti odio, natus laboriosam quod accusantium voluptatibus ipsam culpa possimus explicabo
      vel inventore error recusandae id magni vero, dolore nobis! Commodi dolores eveniet pariatur, similique eaque
      ad error magnam praesentium perspiciatis quaerat soluta quidem ipsam cum assumenda nesciunt alias ratione
      repellendus enim voluptatem at dicta, labore minima. Provident eum quis sit magni voluptatem eveniet possimus
      laborum optio maiores voluptatum,
    </p>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
