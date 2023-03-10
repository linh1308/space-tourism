import React from "react";
import "./style.scss";

interface IProps {
    text: string;
    size: number;
    fontSize: number;
}

const Button = (props: IProps) => {
    const { text, size, fontSize } = props;
    return (
        <div>
            <button style={{ width: size, height: size, fontSize }}>{text}</button>
        </div>
    );
};

export default Button;
