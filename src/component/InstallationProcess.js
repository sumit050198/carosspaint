import React from 'react';
import './Whyinstall.css';


const InstallationProcess = () => (
    <div className="container">
    <div className="installation-process ">
            <h2 className='my-5 pb-4'>Installation Process</h2>
        <div className="d-flex justify-content-center align-items-center">
            <div className="installation-process-step purchase-step">
                <h3>1. Experienced and Skilled Technicians</h3>
                <p>Our team of technicians is highly trained and experienced in PPF installation, ensuring precise and flawless application.</p>
            </div>
            <div className="installation-process-step call-scheduled-step">
                <h3>2.	Use of High-Quality Materials</h3>
                <p>We use only the best quality PPF materials from trusted manufacturers to guarantee optimal protection and longevity.</p>
            </div>
            <div className="installation-process-step install-test-step">
                <h3>3.	Advanced Installation Techniques</h3>
                <p>Our installation process utilises the latest techniques and tools to achieve a seamless, bubble-free finish that adheres perfectly to your car's contours.</p>
            </div>
            <div className="installation-process-step finished-step">
                <h3>4.Customer Satisfaction Guarantee</h3>
                <p>At Caross, we prioritise customer satisfaction, offering warranties and aftercare support to ensure you are completely happy with our services.</p>
            </div>
        </div>
    </div>
    </div>
);

export default InstallationProcess;
