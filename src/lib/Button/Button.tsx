import './button.css'

export interface IButtonProps {
    text: string
    type: ButtonTheme
    size?: ButtonSize
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
    isFullWidth?: boolean
    loading?: boolean
}

export type ButtonSize = 'small' | 'medium'
export type ButtonTheme =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'reversedPrimary'
    | 'danger'

export const Button = (props: IButtonProps) => {
    const classes: string[] = ['Button']

    if (props.isFullWidth) {
        classes.push('Button_fullWidth')
    }

    switch (props.size) {
        case 'small':
            classes.push('Button_small')
            classes.push('Button_content_small')
            break
        case 'medium':
        default:
            classes.push('Button_medium')
            classes.push('Button_content_medium')
            break
    }

    switch (props.type) {
        case 'primary':
            classes.push('Button_primary')
            break
        case 'secondary':
            classes.push('Button_secondary')
            break
        case 'tertiary':
            classes.push('Button_tertiary')
            break
        case 'reversedPrimary':
            classes.push('Button_reversedPrimary')
            break
        case 'danger':
            classes.push('Button_danger')
            break
        default:
            break
    }

    if (props.loading) {
        classes.push('ButtonLoading')
    }

    return (
        <button
            className={classes.join(' ')}
            type="button"
            onClick={props.onClick}
            disabled={props.disabled}
        >
            <span>{props.text}</span>
        </button>
    )
}
