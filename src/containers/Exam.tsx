import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ExamsContext } from '../context/ExamsContext';

interface IParams {
    id: string;
}

function Exam() {
    const { id } = useParams<IParams>();
    const exams = useContext(ExamsContext);
    const exam = exams.find((it) => it.id === +id);

    if (exam) {
        const { question, answers } = exam;
        return (
            <>
                <h2>{question}</h2>
                <ul>
                    {answers.map((it, i) => (
                        <li key={i}>{it}</li>
                    ))}
                </ul>
            </>
        );
    }
    return <h3>ничего не найдено</h3>;
}

export default Exam;
