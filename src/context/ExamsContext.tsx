import React, { createContext } from 'react';

interface IExam {
    id: number;
    question: string;
    answers: Array<string>;
}

const exams: IExam[] = [
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
];

const ExamsContext = createContext<IExam[]>(exams);

interface Props {
    children: React.ReactNode;
}

function ExamsProvider({ children }: Props) {
    return (
        <ExamsContext.Provider value={exams}>{children}</ExamsContext.Provider>
    );
}

export { ExamsProvider as default, ExamsContext };
