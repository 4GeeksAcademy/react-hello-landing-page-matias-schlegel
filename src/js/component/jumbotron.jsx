import React from 'react'

const Jumbotron = () => {
    return (
        <div className="card bg-light my-4 mx-5">
            <div className="card-body my-5 mx-4 ">
                <h1 className="card-title" style={{fontSize: "3rem", fontWeight:"400"}} >A Warm Welcome!</h1>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolor, delectus,
                 quas sed nemo omnis rem natus voluptatum rerum eveniet nostrum voluptatibus iure doloribus ducimus. Sunt minima dicta amet fugit?
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="#" className="btn btn-primary fw-semibold">Call to action!</a>
            </div>
        </div>
    );
};

export default Jumbotron;