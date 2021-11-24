import React from 'react';
import './Selection.scss';
import Navbar from '../Navbar/Navbar';
import { FcNext } from 'react-icons/fc';


const Selection = () => {
    return (
        <div className="selection-container">
            <Navbar getStarted={false} />

            <div className="selection-items">
                <form action="">
                    <div>
                        <label for="name" className="form-label">Your Name</label>
                        <input id="name" className="form-control py-3 px-4 nameInput" type="text" placeholder="Enter Your Name" />
                    </div>
                    <div className="mt-3">
                        <label for="category" className="form-label">Choose Category</label>
                        <select id="category" className="form-select" aria-label="Default select example">
                            <option selected>Category</option>
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
                    <div className="mt-4">
                        <input className="w-100 py-3 startBtn" type="button" value="Start Quiz"></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Selection;