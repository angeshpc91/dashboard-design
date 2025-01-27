import React from 'react';
import './card.scss';
import { ICardProps } from './card.types';

const Card: React.FC<ICardProps> = (props) => {
    const { mainTitle, subTitle, bg } = props;
    return (
        <div className="card" style={{background: bg?.charAt(0) === '#'? bg : 'none'}}>
            {bg?.charAt(0) !== '#' &&
                <img src={bg} alt={mainTitle}/>
            }
            <div className="card-content">
                <p>{subTitle}</p>
                <h2>{mainTitle}</h2>
            </div>
        </div>
    );
};

export default Card;
