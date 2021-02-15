import React, { Component } from 'react';
import './BrowseArtists.css';
import artists from '../../db';
import Browse from '../Browse';
class BrowseArtists extends Component {
    state = {
        artists: artists
    };

    render() {
        return (
            <div className="BrowseArtists text-center py-3 px-4 bgGray">
                <h3 className="artistsHeader mb-0 pb-3">Browse this artists</h3>
                {this.state.artists.map(el => {
                    return (
                        <Browse key={el.id} id={el.id} cover={el.cover} name={el.name} />
                    )
                })}
            </div>
        );
    }
};

export default BrowseArtists;