export const heaiRule = (items, productList) => {
  const heai_num = [...items]
    .filter(c => c === 'heai')
    .length;
  let heai_price = [...productList].filter(c => c.sku === 'heai')[0].price;
  return heai_num * heai_price;
}