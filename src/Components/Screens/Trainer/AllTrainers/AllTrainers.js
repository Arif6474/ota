import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './AllTrainers.css'
import useTrainers from '../../../../hooks/useTrainers';
import { IMAGE_URL } from '../../../../Utilities/APIs';

function AllTrainers() {
    const [trainers] =useTrainers();
    
    const navigate = useNavigate();
    const navigateToTrainerDetails = (id) => {
        navigate(`/trainer-details/${id}`);
      };
    return (

        <div className="trainers-section section-padding">
            <div className="container">
                <div className="section-title-wrapper">
                    <h1 className="section-title">Meet your trainers</h1>
                </div>
                <div className="all-trainers">
                    {
                        trainers?.map(trainer => 
                    <div className="trainer" key={trainers._id} onClick={() => navigateToTrainerDetails(trainer._id)}>
                    <div className="item card">
                        <Link href="trainers-details.html" className="d-block-text-reset">
                           <img src={IMAGE_URL + trainer?.image} alt="" />
                                <div className="card-body">
                                    <h5 className="name"> {trainer.name}</h5>
                                    <p className="designation">{trainer.qualifications}</p>
                                    <p className="company">{trainer?.description}</p>
                                </div>
                        </Link>
                    </div>
                    </div>
                            )
                    }
                 
                </div>
            </div>
        </div>

    )
}

export default AllTrainers