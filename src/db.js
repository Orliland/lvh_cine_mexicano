const items = [
  {
    episode: 1,
    type: "image",
    title: "Primera fotografía por Niépce.",
    source: "episodio_1/wzj11rar547ewnqm9vjl",
    description: `Primera fotografía por el físico Joseph Nicéphore Niépce, tomada en 1826 cuya tiempo exposición fue de 8 horas.`,
    externalSource: null,
  },
  {
    episode: 1,
    type: "image",
    title: "Primer daguerrotipo mexicano",
    source: "episodio_1/awacks5lzfnapbsnaysq",
    description: `La primera fotografía hecha en México fue tomada el 3 de diciembre de 1839 por el francés Jean Prelier Dudoille. En ella se puede apreciar una postal del puerto de Veracruz.`,
    externalSource: null,
  },
  {
    episode: 1,
    type: "image",
    title: "Quinetoscopio",
    source: "Kinetoscope_gkvyip",
    description: `Invento desarrollado por el inventor Thomas Edison y su empleado William K.L. Dickson, se le conoce como el precursor de los proyectores de películas.`,
    externalSource: null,
  },
  {
    episode: 1,
    type: "video",
    title: "The Roundhay Garden Scene",
    source: "knD2EhjGwWI",
    description: `Filmada por el inventor Louis Le Prince en 1888, es el primer video jamas grabado. Cuando el inventor iba a registrar el aparato que permitió grabar la escena, desapareció sin dejar rastro.`,
    externalSource: null,
  },
  {
    episode: 1,
    type: "video",
    title: "La sortie des ouvriers des usines Lumière à Lyon Monplaisir",
    source: "Kykg4MRj0MI",
    description: `El 22 de marzo de 1895 se presenta la primer película de los hermanos Lumière, dando así inicio al cine.`,
    externalSource: null,
  },
  {
    episode: 1,
    type: "video",
    title: "Porfirio Díaz en la primer película mexicana.",
    source: "wRUUfug8Ix8",
    description: `La primer película mexicana fue grabado por personal de los hermanos Lumière en el Castillo de Chapultepec, en ella se puede apreciar al entonces presidente Porfirio Díaz cabalgando, lo que lo convierte en el primer actor mexicano.`,
    externalSource: null,
  },
];

/*

  {
     episode: ,
    type: "",
    title: "",
    source: "",
    description: ``,
    externalSource: null
  },

*/

export default function getItems(episode) {
  return items.filter((item) => item.episode == episode);
}
