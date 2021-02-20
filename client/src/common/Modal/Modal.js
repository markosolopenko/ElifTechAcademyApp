import React from 'react';

export const Modal = ({children, className, open}) => {
    if(!open) return null;
    return (
        <div className={className}>
            {children}
        </div>
    )
} 