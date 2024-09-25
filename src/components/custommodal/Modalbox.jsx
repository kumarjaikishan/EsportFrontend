import React from 'react'
import './modalbox.css'
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const Modalbox = ({ open, onClose, children, shadow=true }) => {

    useEffect(() => {
        if(open){
        const getScrollbarWidth = () => {
            return window.innerWidth - document.documentElement.clientWidth;
        };

        const scrollbarWidth = getScrollbarWidth();

        // Set body styles to compensate for scrollbar disappearance
        document.body.style.overflowY = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;


        return () => {
            setTimeout(() => {
                document.body.style.overflowY = 'scroll';
                document.body.style.paddingRight = '0px'; // Reset padding
            }, 100); // Adjust delay to match your modal’s transition timing
        };
    }
    }, [open])
    return (
        <>
            {open && createPortal(
                <div className='modalwrapper' onClick={onClose}>
                    <div className="modalbox"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        style={shadow ? { boxShadow: '0 10px 20px rgba(0,0,0,0.4)' } : undefined}
                    >
                        {children}
                    </div>
                </div>,
                document.body
            )}
        </>
    )
}

export default Modalbox