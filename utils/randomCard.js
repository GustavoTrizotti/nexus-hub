export default randomCard = (list) => {
  let item = list[Math.floor(Math.random(0, list.length))];
  return item;
};
