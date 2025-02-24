import React from 'react';
import "./EbookCard.css";


function EbookCard(props) {

    return (
        <div className='anime-card'>
            <div className='card-title'>
                {props.volumeInfo.title}
            </div>
            <div className='content'>
                <div>
                    <img
                        src={props.volumeInfo.imageLinks?.thumbnail}
                        alt={props.volumeInfo.title}
                        className="image-card"
                    />
                </div>

                <div className="sinopse">
                    {props.volumeInfo.description}
                </div>
            </div>
            <div>
                <div className='studios'>
                    <div>
                        {/* Verifica se volumeInfo.authors é um array antes de usar join */}
                        {Array.isArray(props.volumeInfo.authors) ? props.volumeInfo.authors.join(', ') : 'Autores não disponíveis'}
                    </div>
                    <div>
                        {props.volumeInfo.publishedDate} 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EbookCard;
