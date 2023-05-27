import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const TextLabelButton = ({
    label,
    onClick,
    type = "button",
    width = ""
} : {
    label: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
    width?: string
}) => {

    const [isToggled, setIsToggled] = useState(false);

    const handleClick = (e) => {
        setIsToggled(!isToggled);
        onClick && onClick(e);
    }

    return (
        <button type={type} role="toggle" onClick={handleClick}>
            {isToggled ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
        </button>
    )
}

export default TextLabelButton;