import { defineConfig, presetUno, presetAttributify, presetTypography, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Inter:400,600,700', 'Noto Sans KR:400,600,700'],
        mono: ['Fira Code:400,600', 'JetBrains Mono:400,600'],
      },
    }),
  ],
  theme: {
    colors: {
      bg: {
        light: '#ffffff',
        dark: '#050505',
        component: {
          light: '#f8f9fa',
          dark: '#121212'
        }
      },
      accent: {
        DEFAULT: '#3eaf7c',
        selection: '#3eaf7c33'
      },
      text: {
        light: {
          heading: '#111827',
          body: '#374151',
          muted: '#6b7280'
        },
        dark: {
          heading: '#ffffff',
          body: '#b0b0b0',
          muted: '#737373'
        }
      },
      border: {
        light: '#e5e7eb',
        dark: '#373737'
      }
    },
    maxWidth: {
      'content': '65ch',
    }
  },
  shortcuts: {
    'bg-base': 'bg-bg-light dark:bg-bg-dark transition-colors duration-300',
    'text-base': 'text-text-light-body dark:text-text-dark-body',
  }
})
