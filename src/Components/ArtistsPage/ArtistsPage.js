import React from 'react';
import './ArtistsPage.css';
import artists from '../../db';
import Albums from '../Albums';

const ArtistsPage = (props) => {
    let currentEl = artists.find((el) => el.id === parseInt(props.match.params.id));
    return (
        <div className="ArtistsPage text-center bgGray" key={currentEl.id}>

            <img key={currentEl.cover} src={require(`../../images/covers/${currentEl.cover}.jpg`).default} alt="img" className="w-25 py-4" />
            <h2 key={currentEl.name} className="nameArtistsPage pb-3" >{currentEl.name}</h2>
            <p key={currentEl.bio} className="mb-0">{currentEl.bio}</p>
            <div className="row no-gutters px-5 py-4">
                {currentEl.albums.map(elem => {
                    return (
                        <div className="col-6" key={elem.cover}>
                            <Albums cover={elem.cover} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ArtistsPage;
