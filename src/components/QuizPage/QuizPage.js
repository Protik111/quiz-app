import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import Navbar from '../Navbar/Navbar';
import { Box } from "@mui/system";
import LinearProgress from '@mui/material/LinearProgress';
import './QuizPage.scss';
import { useNavigate, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { handleChangeScore } from '../../redux/Questions/Questions.action';

const QuizPage = () => {
    const [allOptions, setAllOptions] = useState([]);
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState();
    const [err, setErr] = useState('');

    const { category } = useParams();
    const navigate = useNavigate();

    const { question_category, question_difficulty, question_amount, total_score } = useSelector(state => state);
    const dispatch = useDispatch();


    const { response, loading } = useFetch({ url: `/api.php?amount=${question_amount}&category=${question_category}&difficulty=${question_difficulty}` });

    // console.log(response, error, loading, 'response, error, loading from quizpage');
    // console.log(question_category, question_difficulty, question_amount, 'question_category, question_difficulty, question_amount');

    const randomOptions = (incorrectAns) => {
        return Math.floor(Math.random() * incorrectAns) + 1;
    }


    useEffect(() => {
        if (response?.results.length) {
            const question = response.results[index];

            const options = [...question.incorrect_answers];

            options.splice(randomOptions(options.length), 0, question.correct_answer);
            setAllOptions(options);
        }
    }, [response, index])


    if (loading) {
        return (
            <Box mt={20} sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        );
    }

    const handleCorrect = (e) => {
        setSelected(e.target.textContent);

        if (e.target.textContent === response.results[index].correct_answer) {
            dispatch(handleChangeScore(total_score + 1));
        }
        setErr('');
    }


    //right and wrong color

    // const handleSelectedColor = (selectedValue) => {
    //     console.log(selectedValue, 'e.target.textContent')
    //     if (selected === selectedValue && selectedValue === response.results[index].correct_answer) {
    //         return "rightAnswer";
    //     } else if (selected === selectedValue && selectedValue == !response.results[index].correct_answer) {
    //         return "wrongAnswer";
    //     } else if (selected = selectedValue) {
    //         return "rightAnswer";
    //     }
    // }


    const handleQuit = () => {
        setIndex(0);
        navigate('/');
    }

    const handleNext = () => {
        if (selected) {
            if (index + 1 < response.results.length) {
                setIndex(index + 1);
                setSelected();
            } else {
                navigate('/result');
            }
        } else {
            setErr("Select A Option Then Click Next");
        }
    }

    return (
        <div className="quizpage">
            <Navbar quizPage={true} />

            <div className="category-score container mt-5">
                <div className="category">
                    <h2>Topic : {category}</h2>
                </div>
                <div>
                    <h2>Score : {total_score}/{" "+ question_amount}</h2>
                </div>
            </div>

            <div className="text-center mt-4">
                <h4>{index + 1 + ") "}
                    {response.results[index].question}</h4>
            </div>
            <div className="d-flex justify-content-center">
                <hr className="w-75" style={{ color: 'red' }} />
            </div>

            <div className="text-center mt-2">
                <h4 style={{ color: 'red' }}>{err}</h4>
            </div>

            <div className="row text-center d-flex justify-content-center">
                {allOptions.map((option, i) => <button
                    className={`undone col-lg-5 col-sm-10 m-4 optionBtn py-2 ${selected ? 'inactive' : ''}`}
                    // ${selected && handleSelectedColor(selected)}
                    // style={selected === response.results[index].correct_answer ? { backgroundColor: 'red' } : {}}
                    key={i}
                    value={i}
                    onClick={handleCorrect}
                    disabled={selected}
                >{option}
                </button>)}
            </div>

            <div className="quit-next container mt-3">
                <div>
                    <button onClick={handleQuit} className="px-5 py-lg-3 quitBtn">Quit Quiz</button>
                </div>
                <div>
                    <button onClick={handleNext} className="px-5 py-lg-3 nextBtn">Next Question</button>
                </div>
            </div>

        </div>
    );
};

export default QuizPage;