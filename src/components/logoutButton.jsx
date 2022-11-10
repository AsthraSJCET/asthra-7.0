import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <button className='border w-fit p-4' onClick={() => logout()}>
                Sign Out
            </button>
        )
    )
}

export default LogoutButton