import { mount } from '@vue/test-utils';
import ShoppingCart from '@/views/ShoppingCart.vue';

describe('ShoppingCart.vue', () => {
  test('담은 제품을 보여주는 장바구니 화면이 존재한다.', () => {
    const wrapper = mount(ShoppingCart);
    expect(wrapper.find('#shoppingcart').exists()).toBeTruthy();
  });
  test('화면 상단에 화면의 이름을 표시하는 공간이 존재한다.', () => {
    const wrapper = mount(ShoppingCart);
    expect(wrapper.find('[data-test="shoppingcart"]').exists()).toBeTruthy();
  });
  test('담긴 제품이 목록으로 보여진다.', () => {
    const wrapper = mount(ShoppingCart);
    expect(wrapper.find('[data-test="addProduct-list"]').exists()).toBeTruthy();
  });
  // test('+를 클릭하면 수량이 1 증가한다.', async () => {
  //   const wrapper = mount(ShoppingCart);
  //   const count = wrapper.find('[data-test="count"]');
  //   count.text('1');
  //   const plus = wrapper.find('[data-test="count-plus"]');
  //   await plus.trigger('click');
  //   expect(count.text()).toBe('2');
  // });
  // test('-를 클릭하면 수량이 1 감소한다.', async () => {
  //   const wrapper = mount(ShoppingCart);
  //   const count = wrapper.find('[data-test="count"]');
  //   count.text('2');
  //   const plus = wrapper.find('[data-test="count-minus"]');
  //   await plus.trigger('click');
  //   expect(count.text()).toBe('1');
  // });
  test('x를 클릭하면 담긴 제품이 삭제된다', async () => {
    const wrapper = mount(ShoppingCart);
    const ProduceList = wrapper.findAll('[data-test="addProduct-list"]').length;
    const deleteProduct = wrapper.find('[data-test="deleteProduct"]');
    await deleteProduct.trigger('click');
    const afterProduceList = wrapper.findAll('[data-test="addProduct-list"]');
    expect(afterProduceList).toHaveLength(ProduceList - 1);
  });
});
