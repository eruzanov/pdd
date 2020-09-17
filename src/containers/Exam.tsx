import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ExamsContext } from '../context/ExamsContext';

interface IParams {
    id: string;
}

function Exam() {
    const { id } = useParams<IParams>();
    const [image, setImage] = useState<string>();
    const context = useContext(ExamsContext);
    const exam = context.exams.find((it) => it.id === +id);

    useEffect(() => {
        if (exam && exam.image) {
            context.getImageByName(exam.image).then((image) => setImage(image));
        }
    });

    if (exam) {
        const { question, answers } = exam;
        return (
            <>
                <h2>{question}</h2>
                {image && <img src={image} alt="" />}
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
