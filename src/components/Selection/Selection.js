import React, { useContext, useEffect, useState } from 'react';
import './Selection.scss';
import Navbar from '../Navbar/Navbar';
import { useNavigate, useParams } from 'react-router';
import { UserContext } from '../../App';
import useFetch from '../../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from "@mui/system";
import LinearProgress from '@mui/material/LinearProgress';

//actions from redux
import { handleCategoryChange,
        handleDifficultyChange,
        handleAmountChange, 
        handleChangeName
    } from '../../redux/Questions/Questions.action';



const Selection = () => {
    const dispatch = useDispatch();
    const { question_amount, user_name } = useSelector(state => state);

    // const [name, setName] = useContext(UserContext);
    const [error2, setError2] = useState('');

    const { category, apiVal } = useParams();

    useEffect(() => {
        dispatch(handleCategoryChange(apiVal));
    }, [apiVal]);

    const navigate = useNavigate();

    const handleStart = () => {
        if (user_name) {
            navigate('/quizPage')
        } else {
            setError2('Please Provide Your Name')
        }
    }

    const { response, error, loading } = useFetch({ url: '/api_category.php' });

    if (loading) {
        return (
            <Box mt={20} sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        );
    }

    const difficultyOptions = [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" },
    ];

    const handleDifficulty = (e) => {
        // console.log('difficulty', e.target.value);
        dispatch(handleDifficultyChange(e.target.value));
    }
    const handleAmount = (e) => {
        dispatch(handleAmountChange(e.target.value));
    }

    const handleCategory = (e) => {
        console.log('click', (e.target.value));
        dispatch(handleCategoryChange(e.target.value))
    }

    // console.log(response.trivia_categories, 'response.trivia_categories');

    return (
        <div className="selection-container">
            <Navbar getStarted={false} />

            <div className="selection-items">
                <div className="text-center mt-5">
                    <h4 style={{ color: 'red' }}>{error2}</h4>
                </div>
                <form action="">
                    <div>
                        <label htmlFor="name" className="form-label">Your Name</label>
                        <input id="name" className="form-control py-3 px-4 nameInput" type="text" placeholder="Enter Your Name" value={user_name} onChange={(e) => dispatch(handleChangeName(e.target.value))} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="category" className="form-label">Your Category</label>
                        <select id="category" className="form-select" aria-label="Default select example" onChange={handleCategory}>
                            {/* {response.trivia_categories.map(result => <option value={result.id}>{result.name}</option>)} */}
                            <option value={category}>{category}</option>
                        </select>
                    </div>

                    <div className="mt-3">
                        <label htmlFor="difficulty" className="form-label">Choose Difficulty</label>
                        <select id="difficulty" className="form-select" aria-label="Default select example" onChange={handleDifficulty}>
                            {
                                difficultyOptions.map((option, id) => <option value={option.id} key={id}>{option.name}</option>)
                            }
                        </select>
                    </div>

                    <div className="mt-3">
                        <label htmlFor="amount" className="form-label">Amount Of Questions</label>
                        <input id="amount" className="form-control py-3 px-4 nameInput" type="number" placeholder="Enter Amount" value={question_amount} onChange={handleAmount} />
                    </div>

                    <div className="mt-4">
                        <input className={`w-100 py-3 startBtn`} type="button" value="Start Quiz" onClick={handleStart}></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Selection;