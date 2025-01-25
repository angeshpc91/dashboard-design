import React from 'react';
import './card.css';
import { ICardProps } from './card.types';

const Card: React.FC<ICardProps> = (props) => {
    const { mainTitle, subTitle, bg } = props;
    return (
        <div className="card" style={{ background: bg?.charAt(0) !== '#'? `url(${bg}) no-repeat fixed center` : bg }}>
            <p>{subTitle}</p>
            <h2>{mainTitle}</h2>
        </div>
    );
};

export default Card;
