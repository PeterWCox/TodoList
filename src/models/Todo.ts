export interface Todo {
    id: number
    title: string
    isCompleted?: boolean
    isStarred?: boolean
}

export interface TodoTag {
    id: number
    title: string
    color: string
}
