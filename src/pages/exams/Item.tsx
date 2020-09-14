import React from 'react';
import { Link } from 'react-router-dom';

type defaultProps = {
    id: number;
    question: string;
};

export default function Item({ id, question }: defaultProps) {
    return (
        <h2>
            <Link to={`/exam/${id}`}>{question}</Link>
        </h2>
    );
}
