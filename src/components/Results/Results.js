import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import './Results.scss';
import logo from '../../images/logo.png';
import exam from '../../images/results-bg.png';

const Results = () => {
    const { total_score, question_amount, user_name } = useSelector(state => state);
    return (
        <div className="results">
            <Navbar quizPage={true} />
            <div className="d-flex justify-content-center mt-4">
                <h2 className="total-score">Your Total Score is : <span style={{ color: 'green' }}>{total_score} / {question_amount}</span></h2>
            </div>
            <div className="certificate mt-4 mb-5">
                <div>
                    <img className="certificate-logo" src={logo} alt="" />
                </div>
                <div>
                    <h3><span className="congrats">Cogratulations! </span>{user_name}</h3>
                </div>
                <div className="container row">
                    <div className="col-lg-6 col-md-6 mt-5 text-center successfull">
                        <h4 className="mt-5 offset-lg-4 offset-sm-0">You've successfully completed your quiz <br /> in Quiz Time.</h4>
                        <h5 className="offset-lg-4 mt-3" style={{ color: 'green' }}>Your score is {total_score} / {question_amount}</h5>
                    </div>
                    <div className="col-lg-6 col-md-6 text-center">
                        <img className="exam-img" src={exam} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Results;