import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import defaultImage from '../images/room-12.jpeg';

export default function Rooms({ room }) {
    const { name, slug, images, price } = room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImage} alt="" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">Features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}

Rooms.protoType = {
  rooms : PropTypes.shape({
    name : PropTypes.string.isRequired,
    slug : PropTypes.string.isRequired,
    images : PropTypes.arrayOf(PropTypes.string).isRequired,
    price : PropTypes.number.isRequired
  })
}

        //https://youtu.be/ScDWrogElmo?t=8416
