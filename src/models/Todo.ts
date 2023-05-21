export interface Todo {
    id: number
    title: string
    isCompleted: boolean
    isStarred?: boolean
    tags?: TodoTag[]
}

export interface TodoTag {
    id: number
    title: string
    color: string
}
