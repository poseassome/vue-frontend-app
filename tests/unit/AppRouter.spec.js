import { mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  test('router-view가 존재한다.', () => {
    const wrapper = mount(App);
    expect(wrapper.find('router-view').exists()).toBe(true);
  });
});
