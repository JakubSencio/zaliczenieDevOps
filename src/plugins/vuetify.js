// Vuetify setup
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Vuetify CSS styles
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'; // Material Design Icons

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
        },
      },
    },
  },
});
