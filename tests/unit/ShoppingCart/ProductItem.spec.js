import { mount } from '@vue/test-utils';
import ProductItem from '@/components/ShoppingCart/ProductItem.vue';

const testProps = {
  quantity: 2,
  cupSize: {
    name: 'Tall',
  },
  options: [
    {
      optionNo: 6,
      quantity: 2,
    },
  ],
  product: {
    productNo: -1,
    nameKr: '따뜻한 아이스 아메리카노',
    nameEng: 'Warm ice americano',
    imgUrl: 'http://example.com/coffee.jpg',
    price: 5000,
  },
  optionsInfo: [
    {
      name: '클래식 시럽',
      unitprice: 0,
      baseQuantity: 2,
      optionNo: 6,
    },
  ],
};

describe('ProductItem', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(ProductItem, {
      props: {
        productmenu: testProps,
      },
    });
  });

  test('장바구니 항목을 표시하기 위한 공간이 존재한다.', () => {
    expect(wrapper.find('[data-test="cart-item"]').exists()).toBeTruthy();
  });

  test('장바구니 항목에 한글 이름이 표시가 된다.', () => {
    expect(wrapper.find('[data-test="cart-item-name"]').exists()).toBeTruthy();
    expect(wrapper.find('[data-test="cart-item-name"]').text()).toBe(testProps.product.nameKr);
  });

  test('장바구니 항목에 가격이 표시가 되어야 한다.', () => {
    expect(wrapper.find('[data-test="cart-item-price"]').exists()).toBeTruthy();
  });

  test('장바구니 항목에 사진이 표시가 되어야 한다.', () => {
    expect(wrapper.find('[data-test="cart-item-img"]').exists()).toBeTruthy();
    expect(wrapper.find('[data-test="cart-item-img"]').attributes('src')).toBe(testProps.product.imgUrl);
  });

  test('장바구니 항목에 선택한 퍼스널 옵션이 표시가 되어야 한다.', () => {
    expect(wrapper.find('[data-test="cart-item-options"]').exists()).toBeTruthy();
  });

  test('장바구니 항목에 담은 상품의 수량이 표시가 되어야 한다.', () => {
    expect(wrapper.find('[data-test="cart-item-quantity"]').exists()).toBeTruthy();
  });
});
