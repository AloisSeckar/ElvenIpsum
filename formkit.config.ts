// https://formkit.com/getting-started/installation#configuring-nuxt
import { en } from '@formkit/i18n'
import type { DefaultConfigOptions } from '@formkit/vue'
import { rootClasses } from './formkit.theme'

const config: DefaultConfigOptions = {
  locales: { en },
  locale: 'en',
  config: {
    rootClasses
  }
}

export default config
