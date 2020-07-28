import React from "react";

const Scroll = (props) => {
    return (
        <a href="/#" onClick={props.scrollToTop}>
            <img
                className="img-top"
                src={require(`../images/top.png`)}
                alt="TOP"
            />
        </a>
    );
};

export default Scroll;
