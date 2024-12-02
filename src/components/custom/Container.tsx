import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

type Props = {
    className: string,
    children: ReactNode
}

const Container = ({ children, className }: Props) => {
    return (
        <div className={cn("mx-auto w-full max-w-custom-xl px-2.5", className)}>
            {children}
        </div>
    )
}

export default Container