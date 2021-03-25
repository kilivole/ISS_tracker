import React from 'react';
//import Card from './Card';

const CardList = ({pepe}) => {
    return(
        <div>
        {
           pepe.map((user, i) => {

        return (
            <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robotvoe' src={`https://robohash.org/${pepe[i].id}?200x200`} />
            <div>
                <h2>{pepe[i].name}</h2>
                <p>{pepe[i].email}</p>
            </div>
        </div>
        );
    })
    }
        </div> 
    );
}

export default CardList;