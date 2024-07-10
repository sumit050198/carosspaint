import React from 'react';
import './CardFeeds.css'; // Import the CSS file

const CardFeeds = () => {
    return (
    <>
        <p style={{margin: "30px 0 20px 0"}}>OUR INSTAGRAM FEED</p>
        <h1 className='INSTAGRAM'>INSTAGRAM</h1>
        <div className='d-flex my-3 justify-content-center'>
            <div className="card">
                <img src="https://img.freepik.com/free-photo/3d-car-vibrant-city-night_23-2150796996.jpg?t=st=1720611130~exp=1720614730~hmac=e6595022c1e28ca29877d93b1683a7353dedf4ab370ddcb867a32a4801936d29&w=740" className="card-img-top" alt="1" />
            </div>
            <div className="card">
                <img src="https://img.freepik.com/free-photo/3d-car-with-simple-background_23-2150797020.jpg?t=st=1720610069~exp=1720613669~hmac=4d74f1025e1b8eb2e60d6a2fa9717b57927fc5efdfdeeee56ccea1197b02d88c&w=740" className="card-img-top" alt="2" />
            </div>
            <div className="card">
                <img src="https://img.freepik.com/free-photo/view-3d-car_23-2150796904.jpg?t=st=1720610288~exp=1720613888~hmac=95380f01fca9691b554c25c712cdb2dd3dbcd262ff3811b189d76d3030063b30&w=740" className="card-img-top" alt="3" />
            </div>
        </div>
        <div className='d-flex justify-content-center'>
            <div className="card">
                <img src="https://img.freepik.com/free-photo/3d-car-vibrant-city-night_23-2150796972.jpg?t=st=1720611178~exp=1720614778~hmac=f9feff0d210e01c0a10c02e2dcb799568be2ea4b12d0f9f794d9d2f3e53b1992&w=740" className="card-img-top" alt="1" />
            </div>
            <div className="card">
                <img src="https://img.freepik.com/free-photo/view-3d-car_23-2150796980.jpg?uid=R140412218&ga=GA1.1.494869419.1717679442&semt=ais_hybrid" className="card-img-top" alt="2" />
            </div>
            <div className="card">
                <img src="https://img.freepik.com/free-photo/3d-car-city-street_23-2150796864.jpg?uid=R140412218&ga=GA1.1.494869419.1717679442&semt=ais_hybrid" className="card-img-top" alt="3" />
            </div>
        </div>
        </>
    )
}

export default CardFeeds;
