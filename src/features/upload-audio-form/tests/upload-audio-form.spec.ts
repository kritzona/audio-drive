import { describe, beforeEach, it, expect, vi } from 'vitest';
import * as providers from '@/app/providers';
import { mount } from '@vue/test-utils';
import UploadAudioForm from '../ui/UploadAudioForm.vue';
import { createTestingPinia } from '@pinia/testing';

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

    vi.mock('@/shared/lib', () => ({
      fileToBase64Url: vi.fn(),
    }));

    vi.mock('@/widgets/player', () => {
      const usePlayer = () => {
        return {
          initTrack: vi.fn(),
        };
      };

      return { usePlayer };
    });

    await wrapper.find('input[name="name"]').setValue('Тестовая песня');
    await wrapper.find('input[name="author"]').setValue('Исполнитель');
    wrapper.vm.handleCoversUpload([new File([''], 'cover.png')]);
    wrapper.vm.handleAudiosUpload([new File([''], 'audio.mp3')]);

    expect(wrapper.vm.handleSubmit()).resolves.toEqual(undefined);
  });
});
