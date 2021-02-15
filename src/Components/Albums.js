import React from 'react';

const Albums = (props) => {
    return (
        <div className="Albums">
            <img key={props.cover} src={require(`../images/albums/${props.cover}.jpg`).default} alt="albums" className="w-100" />
        </div>
    );
};

export default Albums;