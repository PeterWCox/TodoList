import type { Meta, StoryObj } from '@storybook/react'
import { Headings } from '../lib/Headings/Headings'
import '../../src/css/typography.css'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Headings> = {
    title: 'lib/Heading',
    component: Headings,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Headings>

export const Primary: Story = {
    args: {
        heading: 'Lorem ipsum dolor sit amet.',
    },
}
