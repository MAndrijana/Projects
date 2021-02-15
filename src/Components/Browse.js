import React from 'react';
import { Link } from 'react-router-dom';
const Browse = (props) => {
    return (
        <div className="Browse pb-4 image">
            <Link to={`/artists/${props.id}`}>
                <img src={require(`../images/covers/${props.cover}.jpg`).default} alt="imgCover" className="imgArtists" />
                <p className="nameOfArtists">{props.name}</p>
            </Link>
        </div>
    );
};

export default Browse;