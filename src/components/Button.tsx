
const Button = ({
    label,
    onClick,
    size
}) => {

    return (
        <button onClick={onClick} className="">
            {label}
        </button>
    )
}

export default Button;