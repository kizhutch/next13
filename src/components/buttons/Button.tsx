const Button = ({
    label,
    onClick,
    type = 'button',
    width = ""
} : {
    label: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
    width?: string
}) => {

    return (
        <button type={type} onClick={onClick} className={`bg-cta hover:bg-cta-hover rounded p-2 text-white ${width} min-w-btn-sm`}>
            {label}
        </button>
    )
}

export default Button;