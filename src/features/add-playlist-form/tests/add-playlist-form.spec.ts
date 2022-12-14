import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import AddPlaylistForm from '../ui/AddPlaylistForm.vue';
import * as providers from '@/app/providers';
import { Pinia } from 'pinia';

describe('AddPlaylistForm.vue', () => {
  let vuetify: any;
  let pinia: Pinia;

  beforeEach(() => {
    vuetify = providers.shallowVuetify;
    pinia = providers.pinia;
  });

  it('render', () => {
    const wrapper = mount(AddPlaylistForm, {
      global: {
        plugins: [vuetify, pinia],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
