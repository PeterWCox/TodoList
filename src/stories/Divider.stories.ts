import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from '../lib/Divider/Divider'

const meta: Meta<typeof Divider> = {
    title: 'lib/Divider',
    component: Divider,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Divider>

export const Horizontal: Story = {
    args: {
        type: 'horizontal',
    },
}

export const Vertical: Story = {
    args: {
        type: 'vertical',
    },
}
