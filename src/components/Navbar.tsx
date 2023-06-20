import LoginLink from "./links/LoginLink"
import RegisterLink from "./links/RegisterLink"


const Navbar = () => {
    //TODO: need mechanism for checking user is authenticated
    const authenticated = false

    const authenticatedNav = (
        <></>
    )

    const unAuthenticatedNav = (
        <>
          <LoginLink />
          <RegisterLink />
        </>
    )
    return (
        <header>
            <nav className="h-12 w-full p-4 border-b border-black flex justify-end items-center">
                {authenticated  ? authenticatedNav : unAuthenticatedNav}
            </nav>
        </header>
    )
}

export default Navbar;