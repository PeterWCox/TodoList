import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../lib/Button/Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
    title: 'lib/Button',
    component: Button,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        text: 'Button',
        type: 'primary',
        size: 'medium',
    },
}

export const Secondary: Story = {
    args: {
        text: 'Button',
        type: 'secondary',
        size: 'medium',
    },
}

export const Tertiary: Story = {
    args: {
        text: 'Button',
        type: 'tertiary',
        size: 'medium',
    },
}

export const ReversedPrimary: Story = {
    args: {
        text: 'Button',
        type: 'reversedPrimary',
        size: 'medium',
    },
}

export const Medium: Story = {
    args: {
        text: 'Button',
        type: 'primary',
        size: 'medium',
    },
}

export const Small: Story = {
    args: {
        text: 'Button',
        type: 'primary',
        size: 'small',
    },
}

export const Disabled: Story = {
    args: {
        text: 'Button',
        type: 'primary',
        size: 'medium',
        disabled: true,
    },
}

export const FullWidth: Story = {
    args: {
        text: 'Button',
        type: 'primary',
        size: 'medium',
        isFullWidth: true,
    },
}
