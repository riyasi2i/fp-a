import React from 'react'

interface privateRoute {
    children: JSX.Element
}

function PrivateRoute({ children }: privateRoute) {
    return (
        <>
            <p>This is Private Route</p>
            {children}
        </>
    )
}

export default PrivateRoute