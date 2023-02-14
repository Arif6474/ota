import React from 'react'
import './TrainerDetails.css'
import book from '../../../assets/images/icon-svg/book-open.png'
import InvoledCourses from './InvoledCourses/InvoledCourses'
import CountDown from '../Home/CountDown/CountDown'
import Testimonials from '../Home/Testimonials/Testimonials'
import { useParams } from 'react-router-dom'
import useTrainers from '../../../hooks/useTrainers'
import { IMAGE_URL } from '../../../Utilities/APIs'
function TrainerDetails() {
  const [trainers] =useTrainers();
  const {id} = useParams();
  const trainer = trainers?.find(trainer => trainer._id === id);
  return (
    <div>
      <div className="trainers-details">
      <div className="container">
        <div className="trainer-details">
          <div className="trainer-pic">
            <div className="image-wrapper">
              <img className="img-fluid" src={IMAGE_URL + trainer?.image} alt="trainer" />
            </div>
          </div>
          <div className="trainer-info">
            <div className="content-wrapper">
              <h1 className="section-title">{trainer?.name}</h1>
              <p className="relation">{trainer?.qualifications},</p>
              <p className="organization">{trainer?.description}</p>
              <div className="qualification-box">
                <div className="qtitle-box">
                  <div>
                    <img src={book} alt="book" />
                  </div>
                  <div>
                    <h5 className="qTitle">Qualifications</h5>
                  </div>
                </div>
                <p className="education">MBA (Operations Management, Logistics and Supply Chain)</p>
                <p>University of Mumbai</p>
              </div>
            </div>
          </div>
        </div>
        <div className="description">
          <p>Mr. Nagendra Aswatha has 38 years of post qualification experience in logistics and supply chain management with specific focus in the integrated logistics space of warehousing, transportation, freight forwarding, customs clearance, project cargo movements, container freight station (CFS)/inland container depot (ICD) and port services management.</p>
          <p>His first 18 years has been in the client logistics domain of organizations like Hindustan Unilever, Kansai Nerolac Paints and Tata Hitachi Earth Moving Equipment’s. His last 16 years’ experience has been predominantly on the Supply Chain Services side across 3PLs like DHL-Excel and Maersk Logistics (DAMCO). His last assignment was in the capacity of Chief Operating Officer of Forbes and Company Limited (Part of the USD 3 billion Shapoorji Pallonji Group) in their shipping and Logistics Division. He has had both domestic (India) and International experience in the Middle East and Far East. He has worked in operations, business development, implementation, key client management and profit center head areas, He also has prior consultancy and teaching experience.</p>
          <p>For the past 15 years, Mr. Nagendra has balanced his corporate work with passion for teaching by equipping students with the latest developments in the practical world regarding emerging trends in logistics and supply chain. He also endeavors to share his experience with industry practitioners to further enhance their skill-sets in the operations and customer service domain.</p>
          <p>Mr. Nagendra graduated in 1983 with a Bachelors degree in Mechanical Engineering from VJTI (Veermata Jijabai Technological Institute), Mumbai and Masters in Management Studies from SPJIMR (S. P. Jain Institute of Management and Research), Mumbai.</p>
        </div>
        <div className="specialist">
          <h6>Specialties:</h6>
          <p>Experience in supporting ongoing business, facilitating start-ups and managing multiple internal and external stakeholders across large professional organizations.</p>
        </div>
      </div>
    </div>
    <InvoledCourses/>
    <CountDown />
      <Testimonials />
    </div>
  )
}

export default TrainerDetails