import React from "react";

const QButton = ({ label = "", qbtnCls = "", ...otherProps }) => {
    return (
        <div className = "qbutton-wrapper">
            <button className={`btn ${qbtnCls}`} {...otherProps}>{label}</button>
        </div>
    )
};
export default QButton;