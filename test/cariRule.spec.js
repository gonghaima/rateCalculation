import test from 'ava';
import  {cariRule} from '../src/pricingRules/cariRule';
import productData from '../config/product.json'

const items = ["cari","cari"];
const items_discount_3 = ["cari","cari","cari"];
const items_discount_6 = ["cari","cari","cari", "cari","cari","cari"];

test('cari rule should caculate as usual, when there are two caris', t => {
  const result = cariRule(items, productData);
	t.is(result, 219);
});
test('cari rule should give 1 item for discount, when there are three caris', t => {
  const result = cariRule(items_discount_3, productData);
	t.is(result, 219);
});
test('cari rule should give 2 items for discount, when there are six caris', t => {
  const result = cariRule(items_discount_6, productData);
	t.is(result, 438);
});