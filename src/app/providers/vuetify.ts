import { createVuetify, ThemeDefinition } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import { md3 } from 'vuetify/blueprints';

const appTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#80489C',
    'primary-darken-1': '#432C7A',
    secondary: '#FF8FB1',
    'secondary-darken-1': '#FCE2DB',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
};

export const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  blueprint: md3,
  theme: {
    defaultTheme: 'appTheme',
    themes: {
      appTheme,
    },
  },
});
