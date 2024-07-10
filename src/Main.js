import React from 'react'
import './Main.css';
import InstallationProcess from './component/InstallationProcess';
import ThePPFInstallationProcess from './component/ThePPFInstallationProcess';
import Testimonials from './component/Testimonials';
import CardFeeds from './component/CardFeeds';

const Main = () => {
    return (
        <div style={{ width: "85%" }} className="container-fluid mt-5">
            <h1 style={{ textTransform: "uppercase", fontSize: "42px", textAlign: "center", color: "#b8242a", fontWeight: "700", marginBottom: "30px" }}>Paint Protection Film</h1>
            <div className="container d-flex justify-content-center">
                <div className="content d-flex gap-5 mt-5">
                    <div className="img-div">
                        <img
                            style={{ height: "450px", width: "550px", objectFit: "cover" }}
                            src="https://img.freepik.com/free-photo/view-3d-car_23-2150796904.jpg?t=st=1720501978~exp=1720505578~hmac=803bfe4514dc7e311bcb6b24c8f40fb4930256ff88e8de5d30a23653cf4c4450&w=740"
                            className="content-image"
                        />
                    </div>

                    <div class="accordion border border-0 text-start " id="accordionExample">
                        <div class="accordion-item border border-0">
                            <h2 class="accordion-header ">
                                <button style={{ color: "#ffff" }} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <h5 style={{ fontSize: "19.5px" }}>What is a Paint Protection Film?</h5>
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong style={{ fontSize: " 18px", fontWeight: "500px", letterSpacing: "0.04rem" }}> Paint Protection Film (PPF) is a clear, flexible film applied to your car's paintwork.</strong> <span style={{ fontSize: " 17.5px", fontWeight: "", letterSpacing: "0.04rem" }}> It acts like a protective shield against scratches, chips, and minor damages. <code><strong>This layer ensures</strong> </code>, your car's paint stays looking new and fresh.</span>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item border border-0">
                            <h2 class="accordion-header">
                                <button style={{ backgroundColor: "#b8242a", color: "#ffff" }} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <h5 style={{ fontSize: "19.5px" }}>Why is PPF Essential for Your Car in Delhi NCR?</h5>
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong style={{ fontSize: " 18px", fontWeight: "500px", letterSpacing: "0.04rem" }}>In the bustling environment of Delhi NCR, your car faces numerous challenges. </strong> <span style={{ fontSize: " 17.5px", fontWeight: "", letterSpacing: "0.04rem" }}> From harsh weather conditions, pollution, and heavy traffic to minor accidents and road debris, your car's paintwork is constantly under threat. <code><strong> your car's paintwork is constantly under threat. PPF provides the essential protection needed </strong>  </code>to keep your car in pristine condition amidst these urban challenges. </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='mt-5 pt-5' style={{ textTransform: "uppercase", fontSize: "42px", textAlign: "center", color: "#b8242a", fontWeight: "700", marginBottom: "40px" }}>Benefits of Paint Protection Film</h1>
            <div className="container d-flex justify-content-center my-5">
                <div className="content d-flex gap-5 mt-5">
                    <div className="d-flex flex-column">
                        <div className="content-text text-start">
                            <div className="d-flex">
                                <div className=" mt-">
                                    <i class="bi bi-check-circle-fill"></i>
                                </div>

                                <div className="">
                                    <h4 className='benefits-list '> 1) Superior Protection Against Scratches and Chips </h4>
                                    <p className='beni-content-parra'>
                                        Delhi NCR roads can be tough on your car. PPF absorbs the impact of small stones, debris, and other elements that can cause scratches and chips, ensuring your car's paint remains intact.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="content-text text-start">
                            <div className="d-flex">
                                <div className="m-0">
                                    <i class="bi bi-check-circle-fill"></i>
                                </div>
                                <div className="">
                                    <h4 className='benefits-list'> 2)UV Resistance and Paint Fading Prevention</h4>
                                    <p className='beni-content-parra'>
                                        The intense sun in Delhi NCR can cause your car’s paint to fade or discolour over time. PPF offers excellent UV resistance, keeping your car's paint vibrant and fresh.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="content-text text-start">
                            <div className="d-flex align-items-start">
                                <div className="mt-0">
                                    <i class="bi bi-check-circle-fill"></i>
                                </div>
                                <div className="">
                                    <h4 className='benefits-list'> 3)	Self-Healing Properties of PPF</h4>
                                    <p className='beni-content-parra'>
                                        With advanced self-healing properties, minor scratches and swirl marks disappear with heat, keeping your car looking flawless despite the rigors of daily commuting.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="content-text text-start">
                            <div className="d-flex align-items-start">
                                <div className="mt-0">
                                    <i class="bi bi-check-circle-fill"></i>
                                </div>
                                <div className="">
                                    <h4 className='benefits-list'> 4)	Preserving Your Car's Resale Value</h4>
                                    <p className='beni-content-parra'>
                                        Maintaining the original paint condition is crucial for preserving your car's resale value. PPF ensures your car looks new, making it more attractive to potential buyers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="img-div">
                        <img
                            style={{ height: "450px", width: "550px", objectFit: "cover" }}
                            src="https://img.freepik.com/free-photo/back-shot-white-car_23-2148320258.jpg?t=st=1720438522~exp=1720442122~hmac=0fd702d4cf1f704bc471faf20bfb4ede3ad4fae4bafb8c73b7b4f7638324b1bc&w=1060"
                            className="content-image"
                        />
                        <div className="content-text text-start mt-5">
                            <div className="d-flex align-items-start">
                                <div className="mt-0">
                                    <i class="bi bi-check-circle-fill"></i>
                                </div>
                                <div className="">
                                    <h4 className='benefits-list'> 5)	Superior Protection Against Scratches and Chips</h4>
                                    <p className='beni-content-parra'>
                                        Delhi NCR roads can be tough on your car. PPF absorbs the impact of small stones, debris, and other elements that can cause scratches and chips, ensuring your car's paint remains intact.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="content-text text-start">
                            <div className="d-flex align-items-start">
                                <div className="mt-0">
                                    <i class="bi bi-check-circle-fill"></i>
                                </div>
                                <div className="">
                                    <h4 className='benefits-list'>  6)	Superior Protection Against Scratches and Chips</h4>
                                    <p className='beni-content-parra'>
                                        Delhi NCR roads can be tough on your car. PPF absorbs the impact of small stones, debris, and other elements that can cause scratches and chips, ensuring your car's paint remains intact.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container d-flex justify-content-center my-5">
                <div className="content d-flex gap-5 mt-5">
                    <div className="img-div">
                        <img
                            style={{ height: "450px", width: "550px", objectFit: "cover" }}
                            src="https://img.freepik.com/free-photo/smiling-woman-getting-out-car_23-2148320219.jpg?t=st=1720438567~exp=1720442167~hmac=8456661e10515c426e5713d5b4c981639ba8ab8dbe2acaff941e5c81d49e8865&w=1060"
                            className="content-image"
                        />
                    </div>
                    {/* -------------------------------------3rd section------------------ */}
                    <div className="content-text" style={{ width: "600px", height: "auto" }}>
                        <div class="accordion border border-0 text-start " id="accordionExample">
                            <div class="accordion-item border border-0">
                                <h2 class="accordion-header ">
                                    <button style={{ color: "#ffff" }} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="true" aria-controls="collapsefour">
                                        <h5 style={{ fontSize: "19.5px" }}>Garware Paint Protection Film</h5>
                                    </button>
                                </h2>
                                <div id="collapsefour" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong style={{ fontSize: " 18px", fontWeight: "500px", letterSpacing: "0.04rem" }}> Garware Car Paint Protection Film (PPF) offers unparalleled protection to keep your vehicle's finish in pristine condition. </strong> Engineered for superior durability, this nearly invisible film ensures your car's design and colour remain untouched while shielding critical areas like front bumpers, hoods, side mirrors, door handle cavities, door edges, rocker panels, and rear fender panels. Choosing Garware PPF means your vehicle stays looking fresh for longer, with the added benefit of potentially increasing its resale value.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item border border-0">
                                <h2 class="accordion-header">
                                    <button style={{ backgroundColor: "#b8242a", color: "#ffff" }} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                        <h5 style={{ fontSize: "19.5px" }}>PaintGuard Paint Protection Film</h5>
                                    </button>
                                </h2>
                                <div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong style={{ fontSize: " 18px", fontWeight: "500px", letterSpacing: "0.04rem" }}>PaintGuard Car Paint Protection Film (PPF) is an outstanding solution to maintain your vehicle's showroom-quality finish.</strong> This virtually invisible film preserves your car's design and colour while protecting front bumpers, hoods, side mirrors, door handle cavities, door edges, rocker panels, and rear fender panels. By using PaintGuard PPF, your vehicle will look newer for longer and its resale value can be enhanced in the future.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item border border-0">
                                <h2 class="accordion-header">
                                    <button style={{ backgroundColor: "#b8242a", color: "#ffff" }} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <h5 style={{ fontSize: "19.5px" }}>Custom PPF Packages</h5>
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong style={{ fontSize: " 18px", fontWeight: "500px", letterSpacing: "0.04rem" }}>We offer custom PPF packages tailored to your specific needs,</strong> whether you want full-body car protection or coverage for high-impact areas.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <InstallationProcess />

            <ThePPFInstallationProcess />

            <Testimonials />

            <CardFeeds />

        </div>
    )
}

export default Main
