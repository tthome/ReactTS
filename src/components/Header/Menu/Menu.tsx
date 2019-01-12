import * as React from "react";
import "./Menu.css";

const menuItems: string[] = [
    'Навыки',
    'Образование',
    'Работы',
    'Увлечения',
    'Контакты',
];

class Menu extends React.Component {
    public render() {
        return (
            <div className="menu-container">
                <ul className="menu-list">
                    {
                        menuItems.map((item: string, id: number) => {
                            return (
                                <li
                                    className="menu-item"
                                    key={id}
                                >
                                    {item}
                                </li>);
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Menu;