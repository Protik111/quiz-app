import React, { useContext, useState } from 'react';
import './Selection.scss';
import Navbar from '../Navbar/Navbar';
import { FcNext } from 'react-icons/fc';
import { useNavigate, useParams } from 'react-router';
import { UserContext } from '../../App';
import useFetch from '../../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';


const Selection = () => {
    const dispath = useDispatch();
    const { question_amount } = useSelector(state => state);
    console.log(question_amount, 'question_amount');
    
    const [name, setName] = useContext(UserContext);
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

    const { response, error } = useFetch({ url: '/api.php?amount=20'});
    console.log(response, error, 'from api');

    return (
        <div className="selection-container">
            <Navbar getStarted={false} />

            <div className="selection-items">
                <div className="text-center mt-4">
                    <h4 style={{color: 'red'}}>{error2}</h4>
                </div>
                <form action="">
                    <div>
                        <label for="name" className="form-label">Your Name</label>
                        <input id="name" className="form-control py-3 px-4 nameInput" type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mt-3">
                        <label for="category" className="form-label">Choose Category</label>
                        <select id="category" className="form-select" aria-label="Default select example" onChange={handleOption}>
                            <option selected value={category}>{category}</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="mt-3">
                        <label for="difficulty" className="form-label">Choose Difficulty</label>
                        <select id="difficulty" className="form-select" aria-label="Default select example">
                            <option selected>Difficulty</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="mt-3">
                        <label for="amount" className="form-label">Amount Of Questions</label>
                        <select id="amount" className="form-select" aria-label="Default select example">
                            <option selected>Amount</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
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