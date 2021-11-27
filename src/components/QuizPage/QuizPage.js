import React from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import Navbar from '../Navbar/Navbar';

const QuizPage = () => {
    const { question_category, question_difficulty, question_amount } = useSelector(state => state);

    const {response, error, loading} = useFetch({ url : `/api.php?amount=${question_amount}&category=${question_category}&difficulty=${question_difficulty}`});

    console.log(response, error, loading, 'response, error, loading from quizpage');
    // console.log(question_category, question_difficulty, question_amount, 'question_category, question_difficulty, question_amount');

    return (
        <div>
            <Navbar quizPage={true}/>
            <h3>THis is quiz </h3>
            {/* {error} */}
        </div>
    );
};

export default QuizPage;