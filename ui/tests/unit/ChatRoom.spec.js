import { shallowMount } from '@vue/test-utils';
// eslint-disable-next-line import/no-unresolved
import ChatRoom from '@/views/ChatRoom.vue';

describe('ChatRoom.vue', () => {
  const setup = () => {
    const wrapper = shallowMount(ChatRoom, {});
    return {
      wrapper,
      weatherBtn: wrapper.find('#weatherBtn'),
    };
  };
  it('renders the weather button', () => {
    const { weatherBtn } = setup();
    expect(weatherBtn.text()).toEqual('Current Weather');
  });
});
