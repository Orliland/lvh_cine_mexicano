/*

  {
     episode: ,
    type: "",
    title: "",
    source: "",
    description: ``,
    externalSource: null
  }

*/

const items = [];

export default function getItems(episode) {
  return items.filter((item) => item.episode == episode);
}
