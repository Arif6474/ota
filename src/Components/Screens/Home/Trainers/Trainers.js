import React from 'react'
import { Link } from 'react-router-dom'
import './Trainers.css'
import TrainersCard from './TrainersCard/TrainersCard'

function Trainers() {
    return (
        <div className="qualifications section-padding">
            <div className="container">
                <div className="section-title-wrapper">
                    <div className="section-head-group description">
                        <div className="title-box">
                            <h1 className=" trainer-title">Meet your trainers</h1>
                        </div>
                        <div className="vab-box">
                            <Link className="box-btn" to='/trainers'>VIEW ALL TRAINERS</Link>
                        </div>
                    </div>
                </div>
            </div>
            <TrainersCard />
        </div>
    )
}

export default Trainers