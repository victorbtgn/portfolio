import React from 'react';
import Media from 'react-media';
import MenuBtn from '../../common/MenuBtn';
import NavBar from './NavBar';

export default function Navigation() {
    

    return (
        <nav>
            <Media queries={{
                mobile: "(max-width: 767px)"
            }}>
                {matches => (
                    <>
                        {matches.mobile ? <MenuBtn /> : <NavBar />}
                    </>
                )}
            </Media>
        </nav>
    )
}

