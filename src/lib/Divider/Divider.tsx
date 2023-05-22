import './Divider.css'

export interface DividerProps {
    type?: 'horizontal' | 'vertical'
}

export const Divider = (props: DividerProps) => {
    let cssClass = ''
    switch (props.type) {
        case 'horizontal':
            cssClass = 'Divider_horizontal'
            break
        case 'vertical':
            cssClass = 'Divider_vertical'
            break
        default:
            cssClass = 'Divider_horizontal'
            break
    }

    return (
        <div className="cssClass">
            <div className={cssClass}></div>
        </div>
    )
}
