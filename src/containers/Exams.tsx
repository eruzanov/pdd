import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ExamsContext } from '../context/ExamsContext';

function Exams() {
    const { exams } = useContext(ExamsContext);

    return (
        <>
            {exams.map(({ id, question }, i) => (
                <h2 key={i}>
                    <Link to={`/exam/${id}`}>{question}</Link>
                </h2>
            ))}
        </>
    );
}

export default Exams;
