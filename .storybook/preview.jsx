import '../src/index.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    },

    backgrounds: { disable: true },
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(135deg, #e4ecf5 0%, #95b3d8 100%)',
        padding: '24px',
        boxSizing: 'border-box',
      }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;