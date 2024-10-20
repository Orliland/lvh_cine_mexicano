import "./Gallery.css";

const GalleryItem = () => {
  return (
    <article className="item">
      <img
        src="https://cinepremiere.com.mx/wp-content/uploads/2023/09/peliculas-epoca-oro-mexicano-900x506.jpg"
        alt=""
        className="item__thumnail"
      />
      <div className="item__body">
        <h2 className="item__title">BEAUTIFUL STORIES EVERY TIME</h2>
        <p className="item__description">
          Photosnap can help you create stories that resonate with your
          audience. Our tool is designed for photographers of all levels,
          brands, businesses you name it.{" "}
        </p>
      </div>
    </article>
  );
};

const Gallery = () => {
  return (
    <section className="gallery">
      <GalleryItem />
    </section>
  );
};

export default Gallery;
