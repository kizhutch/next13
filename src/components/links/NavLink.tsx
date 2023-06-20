import Link from "next/link";

const NavLink = ({
    label,
    href,
    width = ""
} : {
    label: string,
    href: string,
    width?: string
}) => {

    return (
        <Link href={href} className={`bg-cta hover:bg-cta-hover rounded p-2 text-white ${width} min-w-btn-sm`}>
            {label}
        </Link>
    )
}

export default NavLink;