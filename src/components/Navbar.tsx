import LogInButton from "./buttons/LogInButton"
import SignUpButton from "./buttons/SignUpButton"


const Navbar = () => {
    //TODO: need mechanism for checking user is authenticated
    const authenticated = false

    const authenticatedNav = (
        <></>
    )

    const unAuthenticatedNav = (
        <>
          <LogInButton />
          <SignUpButton />
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