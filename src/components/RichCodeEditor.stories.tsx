import type { Meta, StoryObj } from '@storybook/react';
import { RichCodeEditor } from './RichCodeEditor';

const meta = {
  title: 'Components/RichCodeEditor',
  component: RichCodeEditor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    language: {
      control: 'select',
      options: ['javascript', 'typescript', 'python', 'json', 'sql'],
    },
    readOnly: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof RichCodeEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: `function hello() {
  console.log("Hello, World!");
}`,
    language: 'javascript',
    className: 'w-[500px]',
  },
};

export const TypeScript: Story = {
  args: {
    value: `interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "John Doe",
};`,
    language: 'typescript',
    className: 'w-[500px]',
  },
};

export const Python: Story = {
  args: {
    value: `def greet(name):
    return f"Hello, {name}!"

print(greet("World"))`,
    language: 'python',
    className: 'w-[500px]',
  },
};

export const JSON: Story = {
  args: {
    value: `{
  "name": "legali-ai-components",
  "version": "1.0.0",
  "private": true
}`,
    language: 'json',
    className: 'w-[500px]',
  },
};

export const ReadOnly: Story = {
  args: {
    value: `// This code is read-only
const PI = 3.14159;`,
    language: 'javascript',
    readOnly: true,
    className: 'w-[500px]',
  },
};
