import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import AddPlaylistForm from '../ui/AddPlaylistForm.vue';
import * as providers from '@/app/providers';
import { createTestingPinia } from '@pinia/testing';
import { useUserPlaylistStore } from '@/widgets/playlists';

describe('AddPlaylistForm.vue', () => {
  let vuetify: any;

  beforeEach(() => {
    vuetify = providers.shallowVuetify;
  });

  it('render', () => {
    const wrapper = mount(AddPlaylistForm, {
      global: {
        plugins: [vuetify, createTestingPinia()],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('validation failure', async () => {
    const wrapper = mount(AddPlaylistForm, {
      global: {
        plugins: [vuetify, createTestingPinia()],
      },
    });

    await wrapper.find('input[name="name"]').setValue('');

    await expect(wrapper.vm.handleSubmit()).rejects.toEqual(undefined);
  });

  it('successful validation', async () => {
    const wrapper = mount(AddPlaylistForm, {
      global: {
        plugins: [vuetify, createTestingPinia()],
      },
    });

    const userPlaylistStore = useUserPlaylistStore();

    await wrapper.find('input[name="name"]').setValue('Тестовый плейлист');
    await wrapper.vm.handleSubmit();

    expect(userPlaylistStore.add).toHaveBeenCalledOnce();
  });
});
