import { mount } from '@vue/test-utils';
import ProductList from '@/views/ProductList.vue';
// import ProductItem from '@/components/ProductList/ProductItem.vue';

describe('ProductList.vue', () => {
  test('제품 목록을 보여주는 화면이 존재한다.', () => {
    const wrapper = mount(ProductList);
    expect(wrapper.find('#productlist').exists()).toBeTruthy();
  });
  test('화면 상단에 음료의 종류를 표시하는 공간이 존재한다.', () => {
    const wrapper = mount(ProductList);
    expect(wrapper.find('[data-test="product-type"]').exists()).toBeTruthy();
  });
  // test('제품의 사진이 화면에 표시된다.', () => {
  //   const wrapper = mount(ProductList);
  //   expect(wrapper.find('[data-test="product-img"]').exists()).toBeTruthy();
  // });
  // test('제품의 한글 상품명, 영문 상품명, 상품 가격이 화면에 존재한다.', () => {
  //   const wrapper = mount(ProductList);
  //   expect(wrapper.find('[data-test="product-name"]').exists()).toBeTruthy();
  //   expect(wrapper.find('[data-test="product-nameEn"]').exists()).toBeTruthy();
  //   expect(wrapper.find('[data-test="product-price"]').exists()).toBeTruthy();
  // });
  // test('신제품일 경우, 상품명 우측에 녹색 위첨자로 New가 화면에 존재한다.', async () => {
  //   const wrapper = mount(ProductItem);
  //   await wrapper.setData({ isNewProduct: true });
  //   expect(wrapper.find('[data-test="NewProduct"]').text()).toBe('New');
  // });
  // test('인기제품일 경우, 상품명 우측에 빨간색 위첨자로 Hot가 화면에 존재한다.', async () => {
  //   const wrapper = mount(ProductItem);
  //   await wrapper.setData({ popular: true });
  //   expect(wrapper.find('[data-test="PopukarProduct"]').text()).toBe('Hot');
  // });
});
