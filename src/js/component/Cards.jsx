import React from "react";

export const Cards = (props) => {
    return (
        <React.Fragment>
            <div className="card">
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="forPadding">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                    </div>
                    <div className="boton">
                        <a href="#" className="btn btn-primary">{props.button}</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}