import React, { useRef, useEffect } from 'react';
import '../../styles/CaruselImagenes.css';

import img1 from '../../assets/imagen1.png';
import img2 from '../../assets/imagen2.png';
import img3 from '../../assets/imagen3.png';
import img4 from '../../assets/imagen4.png';
import img5 from '../../assets/imagen5.png';
import img6 from '../../assets/imagen6.png';
import img7 from '../../assets/imagen7.png';
import img8 from '../../assets/imagen8.png';
import img9 from '../../assets/imagen9.png';
import img10 from '../../assets/imagen10.png';
import img11 from '../../assets/imagen11.png';
import img12 from '../../assets/imagen12.png';
import img13 from '../../assets/imagen13.png';
import img14 from '../../assets/imagen14.png';
import img15 from '../../assets/imagen15.png';
import img16 from '../../assets/imagen16.png';
import img17 from '../../assets/imagen17.png';
import img18 from '../../assets/imagen18.png';
import img19 from '../../assets/imagen19.png';
import img20 from '../../assets/imagen20.png';

const productos = [
  { imagen: img1, marca: 'GLEE', titulo: 'Top Bloom', precio: '$199.990' },
  { imagen: img2, marca: 'GLEE', titulo: 'Leggings Doble', precio: '$269.990' },
  { imagen: img3, marca: 'GLEE', titulo: 'Camiseta de Malla de Boxeo', precio: '$175.990' },
  { imagen: img4, marca: 'GLEE', titulo: 'Short Boxing Mesh', precio: '$219.990' },
  { imagen: img5, marca: 'GLEE', titulo: 'Mono de Medow', precio: '$299.990' },
  { imagen: img6, marca: 'GLEE', titulo: 'Short de Boxeo Ballerina', precio: '$219.990' },
  { imagen: img7, marca: 'GLEE', titulo: 'Vestido Bliss', precio: '$349.900' },
  { imagen: img8, marca: 'GLEE', titulo: 'Top Golden Poppy', precio: '$199.990' },
  { imagen: img9, marca: 'GLEE', titulo: 'Legging wild grace', precio: '$259.990' },
  { imagen: img10, marca: 'GLEE', titulo: 'Top Mist', precio: '$199.990' },
  { imagen: img11, marca: 'GLEE', titulo: 'Legging Natural', precio: '$249.990' },
  { imagen: img12, marca: 'GLEE', titulo: 'Short Dream', precio: '$179.990' },
  { imagen: img13, marca: 'GLEE', titulo: 'Legging Doble Amor', precio: '$199.990' },
  { imagen: img14, marca: 'GLEE', titulo: 'Top Opal', precio: '$179.990' },
  { imagen: img15, marca: 'GLEE', titulo: 'Buzo Ribbed Yoga', precio: '$229.990' },
  { imagen: img16, marca: 'GLEE', titulo: 'Camiseta Boxing Mesh', precio: '$169.990' },
  { imagen: img17, marca: 'GLEE', titulo: 'Short Boxing Mesh', precio: '$199.990' },
  { imagen: img18, marca: 'GLEE', titulo: 'Camiseta Boxing Mesh', precio: '$169.990' },
  { imagen: img19, marca: 'GLEE', titulo: 'Short Boxing Mesh', precio: '$199.990' },
  { imagen: img20, marca: 'GLEE', titulo: 'Top Serena Waffer', precio: '$142.990' },
];

const CaruselImagenes = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = scrollRef.current;
    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 5) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="carousel-section">
      <div className="carousel-header">
        <div className="carousel-controls">
          <button onClick={scrollLeft}>&lt;</button>
          <button onClick={scrollRight}>&gt;</button>
        </div>
      </div>
      <div className="carousel-container" ref={scrollRef}>
        {productos.map((producto, index) => (
          <div className="carousel-item" key={index}>
            <img src={producto.imagen} alt={producto.titulo} />
            <div className="image-info">
              <p className="marca">{producto.marca}</p>
              <h3>{producto.titulo}</h3>
              <span className="precio">{producto.precio}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaruselImagenes;
