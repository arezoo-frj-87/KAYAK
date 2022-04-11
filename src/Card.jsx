import React, { useState } from "react";

export default function Card(props) {
    const [isShown, setIsShown] = useState(false);
    const allianceCode = props.allianceCode;
    const item = props.data;

    const splitURL = (url) => {
        if (url !== undefined) {
            const splitUrl = url.split("/");
            if (splitUrl && splitUrl.length > 1) {
                return splitUrl[2];
            } else {
                return splitUrl[0];
            }
        } else return null;
    };

    return (
        <div
            key={item.code}
            className={isShown ? "card-hover" : "card"}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <div className="card-content">
                <img
                    src={`https://www.kayak.com${item.logoURL}`}
                    alt="logo"
                    width="32px"
                    height="32px"
                />
                <div>
                    {isShown ? (
                        <div>
                            <p
                                className="airline-name"
                                style={{
                                    marginLeft: "18px"
                                }}
                            >
                                {item.name}
                            </p>
                            <p
                                className="alliance"
                                style={{
                                    marginLeft: "18px"
                                }}
                            >
                                {allianceCode.hasOwnProperty(item.alliance)
                                    ? allianceCode[item.alliance]
                                    : item.alliance}
                            </p>
                            <p
                                className="alliance"
                                style={{
                                    marginLeft: "18px"
                                }}
                            >
                                {item.phone}
                            </p>
                            <a
                                className="site"
                                href={item.site}
                                style={{
                                    marginLeft: "18px"
                                }}
                            >
                                {splitURL(item.site)}
                            </a>
                        </div>
                    ) : (
                        <p
                            className="airline-name"
                            style={{
                                marginLeft: "18px"
                            }}
                        >
                            {item.name}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
