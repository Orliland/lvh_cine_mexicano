import "./Gallery.css";

const GalleryItem = ({ type }) => {
  return (
    <article
      className={`item ${Math.random() > 0.5 ? "thumbnail" : "body"} ${
        type == "video" && "item--video"
      }`}
    >
      {type == "video" ? (
        <lite-youtube
          className="item__video"
          videoid="ogfYd705cRs"
          playlabel="Play: Keynote (Google I/O '18)"
        ></lite-youtube>
      ) : (
        <img
          src="https://cinepremiere.com.mx/wp-content/uploads/2023/09/peliculas-epoca-oro-mexicano-900x506.jpg"
          alt=""
          className="item__thumbnail"
        />
      )}

      <div className="item__body">
        <h2 className="item__title">BEAUTIFUL STORIES EVERY TIME</h2>
        <p className="item__description">
          Photosnap can help you create stories that resonate with your
          audience. Our tool is designed for photographers of all levels,
          brands, businesses you name it.
        </p>
      </div>
    </article>
  );
};

const Gallery = () => {
  return (
    <section className="gallery">
      <GalleryItem type="video" />
      <GalleryItem type="image" />
      <GalleryItem type="image" />
      <GalleryItem type="image" />
      <GalleryItem type="video" />
      <GalleryItem type="image" />
      <GalleryItem type="image" />
    </section>
  );
};

export default Gallery;
