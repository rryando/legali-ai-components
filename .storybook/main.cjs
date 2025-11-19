const { dirname, join } = require('path');

/** @type {import('@storybook/react-vite').StorybookConfig} */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    // Add alias resolution
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': join(__dirname, '../src'),
      };
    }
    
    return config;
  },
};

module.exports = config;
