import { mount } from '@vue/test-utils';
import ProductOrder from '@/views/ProductOrder.vue';
import ProductDetail from '@/components/Product/ProductDetail.vue';
import ProductFooter from '@/components/Product/ProductFooter.vue';

describe('ProductOrder', () => {
  test('상품 상세 정보 페이지가 존재한다.', () => {
    const wrapper = mount(ProductOrder);
    expect(wrapper.find('#Product-order-detail').exists()).toBeTruthy();
  });

  test('상품 상세정보와 관련된 컴포넌트가 존재한다.', () => {
    const wrapper = mount(ProductOrder);
    expect(wrapper.findComponent(ProductDetail).exists()).toBeTruthy();
  });

  test('상품주문 버튼이 존재하는 부분이 존재한다.', () => {
    const wrapper = mount(ProductOrder);
    expect(wrapper.findComponent(ProductFooter).exists()).toBeTruthy();
  });
});
