import React, { useState } from 'react';

export default function ToggleContent({ toggle, content }) {
    const [isShown, setIsShown] = useState(false);
    const show = () => setIsShown(true);
    const hide = () => setIsShown(false);

    return (
        <>
            {toggle(show)}
            {isShown && content(hide)}
        </>
    )
}