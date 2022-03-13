import { mount } from '@vue/test-utils';
import ProductDetail from '@/components/Product/ProductDetail.vue';

describe('Product', () => {
  test('화면에 상품의 사진이 표시된다.', async () => {
    const wrapper = mount(ProductDetail);
    expect(wrapper.find('img[data-test="product-img"]')
      .exists())
      .toBeTruthy();
  });

  test('화면에 상품의 이름이 표시된다.', () => {
    const wrapper = mount(ProductDetail);
    expect(wrapper.find('[data-test="product-name"]')
      .exists())
      .toBeTruthy();
  });

  test('화면에 상품의 가격이 표시된다.', () => {
    const wrapper = mount(ProductDetail);
    expect(wrapper.find('[data-test="product-price"]')
      .exists())
      .toBeTruthy();
  });

  test('화면에 상품의 설명이 표시된다.', () => {
    const wrapper = mount(ProductDetail);
    expect(wrapper.find('[data-test="product-description"]')
      .exists())
      .toBeTruthy();
  });

  test('화면에 뒤로 가기 버튼이 존재한다.', () => {
    const wrapper = mount(ProductDetail);
    expect(wrapper.find('[data-test="back-button"]')
      .exists())
      .toBeTruthy();
  });

  test('화면에 공유버튼이 존재한다.', () => {
    const wrapper = mount(ProductDetail);
    expect(wrapper.find('[data-test="share-button"]')
      .exists())
      .toBeTruthy();
  });
});
