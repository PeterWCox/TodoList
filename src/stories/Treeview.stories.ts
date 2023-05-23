import type { Meta, StoryObj } from '@storybook/react'
import { Treeview } from '../lib/Treeview/Treevew'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Treeview> = {
    title: 'lib/Treeview',
    component: Treeview,
    argTypes: {},
}

// export interface Node<T> {
//     id: string
//     label: string
//     children?: Node<T>[] | null
// }

export default meta
type Story = StoryObj<typeof Treeview>

export const Primary: Story = {
    args: {
        isRoot: true,
        node: {
            label: 'TODOLIST',
            children: [
                {
                    label: 'src',
                    children: [
                        {
                            label: 'components',
                            children: [
                                {
                                    label: 'TodoItem',
                                },
                            ],
                        },
                        {
                            label: 'lib',
                            children: [
                                {
                                    label: 'Button',
                                },
                                {
                                    label: 'Treeview',
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'package.json',
                },
                {
                    label: 'tsconfig.json',
                },
            ],
        },
    },
}
