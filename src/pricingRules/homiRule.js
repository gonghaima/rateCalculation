export const homiRule = (items, productList) => {
  let productListUpdate = [...productList];
    const homi_num = [...items].filter(c => c === 'homi').length;
    if (homi_num > 4) {
      productListUpdate = productListUpdate.map((c) => {
        if (c.sku === 'homi') c.price = 499.99;
        return c;
      });
    }
    let homi_price = [...productList].filter(c => c.sku === 'homi')[0].price;
    return homi_num * homi_price;
}