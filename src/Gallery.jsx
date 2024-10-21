import "./Gallery.css";

const GalleryItem = ({ type, id }) => {
  return (
    <article
      className={`item ${id % 2 === 0 ? "thumbnail" : "body"} ${
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
      {/* TODO: replace key by item id */}
      <GalleryItem type="video" id={1} />
      <GalleryItem type="image" id={2} />
      <GalleryItem type="image" id={3} />
      <GalleryItem type="image" id={4} />
      <GalleryItem type="video" id={5} />
      <GalleryItem type="image" id={6} />
      <GalleryItem type="image" id={7} />
    </section>
  );
};

export default Gallery;
