import "./Gallery.css";

const GalleryItem = ({ item, index }) => {
  return (
    <article
      className={`item ${index % 2 === 0 ? "thumbnail" : "body"} ${
        item.type == "video" && "item--video"
      }`}
    >
      {item.type == "video" ? (
        <lite-youtube
          className="item__video"
          videoid={item.source}
          playlabel={item.title}
        ></lite-youtube>
      ) : (
        <img
          src={`https://res.cloudinary.com/dywakwunm/image/upload/${item.source}`}
          alt={item.title}
          loading="lazy"
          className="item__thumbnail"
        />
      )}

      <div className="item__body">
        <h2 className="item__title">{item.title}</h2>
        <p className="item__description">{item.description}</p>
      </div>
    </article>
  );
};

const Gallery = ({ items, episode }) => {
  return (
    <section className="gallery">
      {items.length > 0 ? (
        items.map((item, index) => {
          return <GalleryItem item={item} key={index} index={index} />;
        })
      ) : (
        <div className="gallery__legend">
          Por el momento no hay información registrada del episodio {episode}.{" "}
          <strong>Vuelve pronto, estamos trabajando en agregarla.</strong>
        </div>
      )}
    </section>
  );
};

export default Gallery;
