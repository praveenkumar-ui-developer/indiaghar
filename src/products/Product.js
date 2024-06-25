import React from 'react';
import './product.css'
const Product = ({ title, imgUrl, link,id }) => {
    return (
        <div className="card p-1 pt-0">
            <a href={link} className="primary">
            <img src={imgUrl} className="card-img-top" alt={title} style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
            <h5 className="card-title" id="card-title" >{id}</h5>

                <h6 className="pt-2 pb-2 p-0 p-name" style={{ textDecoration: 'none !important', color: 'white' }}>{title}</h6>

            </div>
            </a>
        </div>
    );
};

export default Product;
