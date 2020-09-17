import React, { createContext } from 'react';
import firebase from '../api/firebase';

interface IExam {
    id: number;
    question: string;
    answers: Array<string>;
    image?: string;
}

interface IProvider {
    exams: IExam[];
    getImageByName: (image: string) => Promise<string>;
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
        image: 'exam21.png',
    },
    {
        id: 3,
        question: 'Можно ли Вам остановиться в указанном месте для посадки пассажира?',
        answers: [
            'Можно.',
            'Можно, если Вы управляете такси.',
            'Нельзя.'
        ],
        image: 'exam31.png'
    }
];

const storageRef = firebase.storage().ref();
const ctx = {
    exams,
    getImageByName: async (image: string) => {
        return await storageRef.child(`exams/${image}`).getDownloadURL();
    },
};

const ExamsContext = createContext<IProvider>(ctx);

function ExamsProvider({ children }: { children: React.ReactNode }) {
    return (
        <ExamsContext.Provider value={ctx}>{children}</ExamsContext.Provider>
    );
}

export { ExamsProvider as default, ExamsContext };
