import "./global.css";

import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "@devades/design-system-ui/header";

const meta: Meta<typeof Header> = {
  component: Header,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Header>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
, * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props: any) => {
    return (
      <Header
        className={`border-zinc-800 bg-zinc-900 w-full text-white`}
        {...props}
      >
        <p className="text-white">Hello</p>
      </Header>
    );
  },
  name: "Header",
};
