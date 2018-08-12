export const cariRule = (items, productList) => {
  let cari_num = [...items]
    .filter(c => c === 'cari')
    .length;
  const free_cari_num = Math.floor(cari_num / 3);
  cari_num -= free_cari_num;
  debugger;
  let cari_price = [...productList].filter(c => c.sku === 'cari')[0].price;
  return cari_num * cari_price;
}