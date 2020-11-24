import { useLayoutEffect, useState } from 'react';

export const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        };
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [])
    return size;
};

export function chooseWallpaperSize (screenWidth, mobile, tablet, desktop) {
    const width = screenWidth;
    if(width <= 768) return mobile;
    if(width <= 1280) return tablet;
    return desktop;
}
