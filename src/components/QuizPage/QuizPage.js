import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import Navbar from '../Navbar/Navbar';
import { Box } from "@mui/system";
import LinearProgress from '@mui/material/LinearProgress';
import './QuizPage.scss';

const QuizPage = () => {
    const [allOptions, setAllOptions] = useState([]);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState();

    const { question_category, question_difficulty, question_amount } = useSelector(state => state);

    const { response, error, loading } = useFetch({ url: `/api.php?amount=${question_amount}&category=${question_category}&difficulty=${question_difficulty}` });

    console.log(response, error, loading, 'response, error, loading from quizpage');
    // console.log(question_category, question_difficulty, question_amount, 'question_category, question_difficulty, question_amount');

    const randomOptions = (incorrectAns) => {
        return Math.floor(Math.random() * incorrectAns) + 1;
    }


    useEffect(() => {
        if (response?.results.length) {
            const question = response.results[index];
            // console.log(question, 'question');

            const options = [...question.incorrect_answers];
            console.log(options, options.length, question.correct_answer, 'all');

            options.splice(randomOptions(options.length), 0, question.correct_answer);
            setAllOptions(options);
        }
    }, [response])

    console.log(allOptions, 'allOptions');



    if (loading) {
        return (
            <Box mt={20} sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        );
    }

    const handleCorrect = (e) => {
        console.log(e.target.textContent);
        setSelected(e.target.textContent);

        if(e.target.textContent ===  response.results[index].correct_answer){
            setScore(score+1);
        }
    }

    const handleSelectedColor = (selectedValue) => {
        console.log(selectedValue, 'e.target.textContent')
        // if(selected === selectedValue && selectedValue === response.results[index].correct_answer) {
        //     return "rightAnswer";
        // }else if(selected === selectedValue && selectedValue ==! response.results[index].correct_answer){
        //     return "wrongAnswer";
        // }else if(selected = selectedValue){
        //     return "rightAnswer";
        // }
    }

    console.log(score, 'score');
    console.log(selected, 'selected');

    return (
        <div>
            <Navbar quizPage={true} />
            <h3>THis is quiz </h3>

            {response.results[index].question}

            {allOptions.map((option, i) => <button className={`undone ${selected && handleSelectedColor(selected)}`} key={i} value={i} onClick={handleCorrect}>{option}</button>)}

        </div>
    );
};

export default QuizPage;