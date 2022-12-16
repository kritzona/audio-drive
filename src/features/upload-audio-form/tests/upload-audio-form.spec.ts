import { describe, beforeEach, it, expect } from 'vitest';
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
});
