import { shallowMount } from '@vue/test-utils';
import UserLogin from '@/components/UserLogin.vue';

describe('UserLogin.vue', () => {
  it('사용자 정보 입력 내용 확인', async () => {
    const wrapper = shallowMount(UserLogin);
    await wrapper.find('[data-username]').setValue('username');
    await wrapper.find('[data-password]').setValue('password');
    expect(wrapper.find('.checkID').text()).toBe('아이디 : username');
    expect(wrapper.find('.checkPW').text()).toBe('비밀번호 : password');
  });
});
