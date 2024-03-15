// @ts-check
import antfu from "@antfu/eslint-config";

export default antfu({
  vue: true,
  unocss: true,
  typescript: true,
  formatters: true,
  overrides: {
    vue: {
      'vue/object-curly-spacing': ['error', 'never'],
    },
  },
}, {
  rules: {
    'style/object-curly-spacing': ['error', 'never'],
    // 列表折行
    'antfu/consistent-list-newline': 'off',
    'no-console': 'off',
  },
})
