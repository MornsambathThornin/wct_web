import React from "react";
import "./review.css";
import Heading from "../common/heading/Heading";
import Slider from "react-slick";
import { popular } from "../../dummyData";
import SinglePageSlider from "../singlePage/slider/SinglePageSlider";
import { useEffect, useState } from "react" ;
import { Link } from "react-router-dom" ;

const Review = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 6,
    slidesPerRow: 1,
  };
  const [electronic, setElectronic] = useState([]);

  const getData = async () => {
    try{
      const response = await fetch("http://localhost:8000/api/electronics");
      const result = await response.json();
      console.log(result.data);

    
      setElectronic(result.data);
  
    }catch(error){  
      console.log(error);
    }
  }

  useEffect(() =>{
    getData(); 

  } , [])


    
  return (
    <>
      <SinglePageSlider />
      <div className="container">
        <section className="music review">
          <div className="content">
            <Slider {...settings}>
              {electronic
                
                .map((val) => {
                  return (

                    <Link to = {"/electronic/detail/" + val.id} key={val.id} className="nav-link" >
                    <div className="items">
                      <div className="box shadow flexSB">
                        <div className="images">
                          <div className="img">
                            <img src={val.image1} alt="" />
                          </div>
                          <div class="category category1">
                            {/* <span>{val}</span> */}
                          </div>
                        </div>
                        <div className="text">
                          <h1 className="title">{val.name}</h1>
                          <div className="date">
                         
                            <label>{val.description}</label>
                          </div>
                          
                          <div className="comment">
                        
                            <i class="fas fa-dollar"></i>
                            <label>{val.price}</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    </Link>
                  );
                })}
            </Slider>
          </div>
        </section>
      </div>
    </>
  );
};

export default Review;
