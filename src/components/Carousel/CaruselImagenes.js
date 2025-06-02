import React, { useRef, useEffect } from 'react';
import '../../styles/CaruselImagenes.css'; 

const importAll = (r) =>
  r
    .keys()
    .sort((a, b) => {
      const getNumber = (str) => parseInt(str.match(/\d+/)[0], 10);
      return getNumber(a) - getNumber(b);
    })
    .map(r);

const images = importAll(require.context('../../assets', false, /imagen\d+\.png$/));

// Datos asociados a las imágenes (debe coincidir el orden)
const imageData = images.map((_, i) => ({
  nombre: `Producto ${i + 1}`,
  descripcion: `Descripción del producto ${i + 1}`,
  precio: `$${(i + 1) * 10}.000`,
}));

const CaruselImagenes = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = scrollRef.current;
    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 5) {
      // Si llegó al final, volver al inicio
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
        {images.map((img, index) => (
          <div className="carousel-item" key={index}>
            <img src={img} alt={`Imagen ${index + 1}`} />
            <div className="image-info">
              <h3>{imageData[index].nombre}</h3>
              <p>{imageData[index].descripcion}</p>
              <span className="precio">{imageData[index].precio}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaruselImagenes;
