import * as React from "react";
import "./Header.css";

import Menu from './Menu/Menu';

class Header extends React.Component {
    public render() {
        return (
            <div className="header-container">
               <Menu/>
            </div>
        );
    }
}

export default Header;