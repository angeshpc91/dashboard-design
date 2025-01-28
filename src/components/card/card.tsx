import React from 'react';
import './card.scss';
import { ICardProps } from './card.types';

const Card: React.FC<ICardProps> = (props) => {
    const { customStyle } = props;
    return (
        <div className="card" style={customStyle}>
            {props.children}
        </div>
    );
};

export default Card;
