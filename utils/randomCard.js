export default randomCard = (list) => {
  let item = list[Math.floor(Math.random() * list.length)];
  return item;
};
