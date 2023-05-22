import type { Meta, StoryObj } from '@storybook/react'
import { MultiCheckbox } from '../lib/MultiCheckbox/MultiCheckbox'

const meta: Meta<typeof MultiCheckbox> = {
    title: 'lib/MultiCheckbox',
    component: MultiCheckbox,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof MultiCheckbox>

export const Primary: Story = {
    args: {
        label: 'Unit type',
        options: ['PIU', 'VCU'],
    },
}
