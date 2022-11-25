import * as React from 'react'

interface HeaderProps {
    children: React.ReactNode
}

const Header = ({children}: HeaderProps) => {
    return (<header>{children}</header>)
}

export default Header