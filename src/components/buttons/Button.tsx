const Button = ({
    label,
    onClick,
    width = ""
} : {
    label: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    width?: string
}) => {

    return (
        <button onClick={onClick} className={`bg-cta hover:bg-cta-hover rounded p-2 text-white ${width} min-w-btn-sm`}>
            {label}
        </button>
    )
}

export default Button;