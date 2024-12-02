import Container from '@/components/custom/Container'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <Container className='h-screen flex justify-center items-center'>{children}</Container>
    )
}

export default Layout