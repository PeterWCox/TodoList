import React from 'react'

export interface Node<T> {
    label: string
    children?: Node<T>[] | null
}

export interface ITreeViewProps {
    isRoot?: boolean
    node: Node<string>
}

const getNumberOfChildren = (node: Node<string>): number => {
    if (!node.children || node.children.length === 0) {
        return 1
    }

    let descendants = 1
    for (let i = 0; i < node.children?.length; i++) {
        descendants += getNumberOfChildren(node.children[i])
    }
    return descendants
}

export const Treeview = (props: ITreeViewProps) => {
    const [showChildren, setShowChildren] = React.useState<boolean>(false)

    const numberOfChildrenText = (node: Node<string>) => {
        if (!node.children) {
            return node.label
        }
        return `${node.label} (${node.children.length})`
    }

    const showPointerCursor = (node: Node<string>): boolean => {
        if (!node.children || node.children.length === 0) {
            return false
        }
        return true
    }

    return (
        <>
            <div
                style={{
                    paddingLeft: '20px',
                }}
            >
                <span
                    style={{
                        cursor: `${
                            showPointerCursor(props.node) ? 'pointer' : null
                        }`,
                    }}
                    onClick={() => setShowChildren(!showChildren)}
                >
                    {numberOfChildrenText(props.node)}
                </span>
                {showChildren
                    ? props.node.children?.map((c) => <Treeview node={c} />)
                    : null}
            </div>
            {props.isRoot ? (
                <div>Descendents: {getNumberOfChildren(props.node)}</div>
            ) : null}
        </>
    )
}
