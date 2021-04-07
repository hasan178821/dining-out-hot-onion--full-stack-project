import React from "react";
import './Slider.css';

const Slider = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide slider-area" data-bs-ride="" >
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" ></button>

        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" ></button>

        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" ></button>
      </div>



      <div className="carousel-inner slider-area">
        <div className="carousel-item active">

          <div className="row d-flex justify-content-center align-items-center slider-item">

            <div className="col-md-6 slider-left">
              <h5 className="">Qualityfull Breakfast</h5>
              <p className="">We believe in Quality.The Food is Healthy also.</p>
            </div>
            <div className="col-md-6 slider-right">
              <img src='https://i.ibb.co/gZk2tsV/breakfast1.png' className="d-block w-100" alt="..." />
            </div>

          </div>

        </div>
        
        <div className="carousel-item">
          
            <div className="row d-flex justify-content-center align-items-center slider-item">

              <div className="col-md-6 slider-left">
                <h5 className="">Qualityfull Lunch</h5>
                <p className="">We believe in Quality.The Food is Healthy also.</p>
              </div>
              <div className="col-md-6 slider-right">
                <img src="https://i.ibb.co/j5mf3hW/lunch1.png" className="d-block w-100" alt="..." />
              </div>

            </div>

        </div>
        <div className="carousel-item">

          <div className="row d-flex justify-content-center align-items-center slider-item">

            <div className="col-md-6 slider-left">
              <h5 className="">Qualityfull Dinner</h5>
              <p className="">We believe in Quality.The Food is Healthy also.</p>
            </div>
            <div className="col-md-6 slider-right">
              <img src="https://i.ibb.co/sQdtpNL/burger1.png" className="d-block w-100" alt="..." />
            </div>
            
          </div>

        </div>
      </div>



      <button className="carousel-control-prev side-button" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next side-button" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
