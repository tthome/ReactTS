import * as React from "react";
import "./Logo.css";

class Logo extends React.Component {
    public render() {
        return (
            <div className="logo-container">
                <div className="logo-title">
                    <p>Тимофей Тимко</p>
                    <p>Frontend Developer</p>
                </div>
                <div className="logo">
                    <div className="photo" />
                    <div className="description">
                        Новосибирск
                        25 лет

                    </div>
                </div>
            </div>
        );
    }
}

export default Logo;