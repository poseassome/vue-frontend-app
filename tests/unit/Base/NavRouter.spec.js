import { mount } from '@vue/test-utils';
import MainNav from '@/components/Base/MainNav.vue';

describe('MainNav.vue', () => {
  test('화면 하단 메뉴에 링크가 존재한다.', () => {
    const wrapper = mount(MainNav);
    expect(wrapper.find('router-link').exists()).toBe(true);
  });
});
