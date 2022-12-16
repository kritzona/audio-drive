import { describe, beforeEach, it, expect } from 'vitest';
import * as providers from '@/app/providers';
import { mount } from '@vue/test-utils';
import UploadAudioForm from '../ui/UploadAudioForm.vue';
import { createTestingPinia } from '@pinia/testing';
import { usePlayerStore } from '@/widgets/player';

describe('UploadAudioForm.vue', () => {
  let vuetify: any;

  beforeEach(() => {
    vuetify = providers.shallowVuetify;
  });

  it('render', () => {
    const wrapper = mount(UploadAudioForm, {
      global: {
        plugins: [vuetify, createTestingPinia()],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('validation failure', async () => {
    const wrapper = mount(UploadAudioForm, {
      global: {
        plugins: [vuetify, createTestingPinia()],
      },
    });

    await expect(wrapper.vm.handleSubmit()).rejects.toEqual(undefined);
  });

  it('successful validation', async () => {
    const wrapper = mount(UploadAudioForm, {
      global: {
        plugins: [vuetify, createTestingPinia()],
      },
    });

    const playerStore = usePlayerStore();

    await wrapper.find('input[name="name"]').setValue('Тестовая песня');
    await wrapper.find('input[name="author"]').setValue('Исполнитель');

    await wrapper.vm.handleSubmit();

    expect(playerStore.setup).toHaveBeenCalledOnce();
  });
});
