import type { Meta, StoryObj } from '@storybook/react'
import { TodoItem } from '../components/TodoItem/TodoItem'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TodoItem> = {
    title: 'lib/TodoItem',
    component: TodoItem,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof TodoItem>

export const Primary: Story = {
    args: {
        todo: {
            id: 1,
            title: 'Todo 1',
            isCompleted: false,
        },
    },
}
