import * as React from "react";
import "./Header.css";

import Logo from './Logo/Logo';
import Menu from './Menu/Menu';

class Header extends React.Component {
    public render() {
        return (
            <div className="header-container">
               <Menu/>
               <Logo/>
            </div>
        );
    }
}

export default Header;