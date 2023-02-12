import React from 'react';
import { HeaderStyles } from '../../styled/HeaderStyles';

const Header = () => {

    return (
        <HeaderStyles>
            <header className="main-header">
                <div className="main-header__layers">
                    <div className="main-header__content">
                        <span className="main-header__caption">Welcome to</span>
                        <h1 className="main-header__title">Fairy forest</h1>
                    </div>
                    <div className="main-header__layer main-header__base" style={{backgroundImage: `url(${window.location.href}/img/layer-base.png)`}}></div>
                    <div className="main-header__layer main-header__middle" style={{backgroundImage: `url(${window.location.href}/img/layer-middle.png)`}}></div>
                    <div className="main-header__layer main-header__front" style={{backgroundImage: `url(${window.location.href}/img/layer-front.png)`}}></div>
                </div>
            </header>
        </HeaderStyles>
    )
}

export default Header;