import React, { useContext, useState } from 'react';
import './Selection.scss';
import Navbar from '../Navbar/Navbar';
import { useNavigate, useParams } from 'react-router';
import { UserContext } from '../../App';
import useFetch from '../../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from "@mui/system";
import LinearProgress from '@mui/material/LinearProgress';



const Selection = () => {
    const dispath = useDispatch();
    const { question_amount } = useSelector(state => state);
    // console.log(question_amount, 'question_amount');

    const [name, setName] = useContext(UserContext);
    const [amount, setAmount] = useState(10);
    const [error2, setError2] = useState('');

    const { category } = useParams();

    const handleOption = () => {
        console.log('click');
    }

    const navigate = useNavigate();

    const handleStart = () => {
        if (name) {
            navigate('/quizPage')
        } else {
            setError2('Please Provide Necessary Info')
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

    return (
        <div className="selection-container">
            <Navbar getStarted={false} />

            <div className="selection-items">
                <div className="text-center mt-4">
                    <h4 style={{ color: 'red' }}>{error2}</h4>
                </div>
                <form action="">
                    <div>
                        <label for="name" className="form-label">Your Name</label>
                        <input id="name" className="form-control py-3 px-4 nameInput" type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mt-3">
                        <label for="category" className="form-label">Your Category</label>
                        <select id="category" className="form-select" aria-label="Default select example" onChange={handleOption}>
                            {/* {response.trivia_categories.map(result => <option>{result.name}</option>)} */}
                            <option>{category}</option>
                        </select>
                    </div>

                    <div className="mt-3">
                        <label for="difficulty" className="form-label">Choose Difficulty</label>
                        <select id="difficulty" className="form-select" aria-label="Default select example">
                            {
                                difficultyOptions.map(option => <option>{option.name}</option>)
                            }
                        </select>
                    </div>

                    <div className="mt-3">
                        <label for="amount" className="form-label">Amount Of Questions</label>
                        <input id="amount" className="form-control py-3 px-4 nameInput" type="number" placeholder="Enter Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
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