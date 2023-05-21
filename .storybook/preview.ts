import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: 'twitter',
      values: [
        {
          name: 'twitter',
          value: '#f6f6f6',
        },
        {
          name: 'facebook',
          value: '#3b5998',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
