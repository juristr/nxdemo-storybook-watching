import type { Meta, StoryObj } from '@storybook/react';
import { StorybooknxFeatCreateOrders } from './feat-create-orders';

const meta: Meta<typeof StorybooknxFeatCreateOrders> = {
  component: StorybooknxFeatCreateOrders,
  title: 'StorybooknxFeatCreateOrders',
};

export default meta;
type Story = StoryObj<typeof StorybooknxFeatCreateOrders>;

export const Primary: Story = {
  args: {},
};
