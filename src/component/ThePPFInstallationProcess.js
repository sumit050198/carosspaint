import React from 'react';
import './ThePPFInstallationProcess.css';

const ThePPFInstallationProcess = () => (
    <>
    <div style={{ marginBottom: "80px" }} className="wrap">
        <div style={{ color: "" }} className="col-12 my-5 d-flex justify-content-center align-items-center">
            <h1 className='PPF-Installation'>The PPF Installation Process</h1>
        </div>
        <div className="col col1"></div>
        <div className="col col2">
            <div className="circle circle1">
                <h2><span><b>Consultation</b> </span></h2>
                <div className="shim shim1"></div>
            </div>
            <div className="content">
                <p className='parraTitle'>1. Initial Consultation and Assessment</p>
                <p>We start with a detailed consultation to understand your needs and assess your vehicle for the best PPF solution.</p>
            </div>
        </div>
        <div className="col col1">
            <div className="circle circle2">
                <h2><span><b>Preparation </b></span></h2>
                <div className="shim shimx shim2"></div>
            </div>
            <div className="content">
                <p className='parraTitle'>2. Preparing Your Car for PPF</p>
                <p>Our technicians meticulously clean and prepare your car's surface to ensure the film adheres perfectly.</p>
            </div>
        </div>
        <div className="col col2"></div>
        <div className="col col1"></div>
        <div className="col col2">
            <div className="circle circle3">
                <h2><span><b>Apply </b></span></h2>
                <div className="shim shim3"></div>
            </div>
            <div className="content">
                <p className='parraTitle'>3. Applying the Film: Step-by-Step Guide</p>
                <p>We apply the PPF with precision, using advanced techniques to avoid bubbles and ensure a smooth finish.</p>
            </div>
        </div>
        <div className="col col1">
            <div className="circle circle4">
                <h2><span><b> Installation</b></span></h2>
                <div className="shim shimx shim4"></div>
            </div>
            <div className="content">
                <p className='parraTitle'>4. Post-Installation Care and Maintenance</p>
                <p>We provide guidelines on how to care for your PPF, ensuring it stays in top condition for years to come.</p>
            </div>
        </div>
        <div className="col col2"></div>
    </div>
        <div className="my-5">
            <button style={{backgroundColor: "#b42424", color: "#fff", padding: "13px 50px", fontSize: "15px"}} className="btn btn">Book Your PPF Consultation Now</button>
        </div>
        </>
);

export default ThePPFInstallationProcess;
