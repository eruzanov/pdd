import React, { useState } from 'react';
import Item from './Item';

function Exams() {
    const [list] = useState([
        {
            id: 1,
            question: 'В каком случае водитель совершит вынужденную остановку?',
            answers: [
                'Остановившись непосредственно перед пешеходным переходом, чтобы уступить дорогу пешеходу.',
                'Остановившись на проезжей части из-за технической неисправности транспортного средства.',
                'В обоих перечисленных случаях.',
            ],
        },
        {
            id: 2,
            question: 'Разрешен ли Вам съезд на дорогу с грунтовым покрытием?',
            answers: [
                'Разрешен.',
                'Разрешен только при технической неисправности транспортного средства.',
                'Запрещен.',
            ],
        },
    ]);

    return (
        <>
            {list.map((it, i) => (
                <Item key={i} id={it.id} question={it.question} />
            ))}
        </>
    );
}

export default Exams;