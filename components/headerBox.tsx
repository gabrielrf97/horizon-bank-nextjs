import React from 'react';
import {HeaderBoxProps} from "@/types";

export const HeaderBox = ({type, title, subtext, user}: HeaderBoxProps) => {
    return (
        <div className="header-box">
            <h1 className="header-box-title">
                {title}
                {
                    (type === "greeting") &&
                <span className="header-box-title-greeting">
                    ,&nbsp;
                    <span className="text-bankGradient">
                        {user}
                    </span>
                </span>
                }
            </h1>
            <p className="header-box-subtext">
                {subtext}
            </p>
        </div>
    );

};