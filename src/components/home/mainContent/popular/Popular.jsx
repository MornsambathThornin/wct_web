
import "./Popular.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { popular } from "../../../../dummyData";
import Heading from "../../../common/heading/Heading";
import { useEffect, useState } from "react" ;
import { Link } from "react-router-dom" ;


const Popular = () => {


  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  }
   
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
      <section className='popular'>
        <Heading title='Electronic' />
        <div className='content'>
          <Slider {...settings}>
            {electronic.map((val) => {
              return (
              <Link to = {"/electronic/detail/" + val.id} key={val.id} className="nav-link" >
                <div className='items'>
                  <div className='box shadow'>
                    <div className='images row'>
                      <div className='img'>
                        <img src={val.image1} alt=''/>
                      </div>
     
                    </div>
                    <div className='text row'>
                      <h1 className='title'>{val.name.slice(0, 40)}...</h1>
                      <div className='date'>
                       
                        <label>{val.major}</label>
                      </div>
                      <div className='date'>
                        <i class='fas fa-dollar'></i>
                        <label>{val.price}</label>
                      </div>
            
                    </div>
                  </div>
                </div>
                </Link>
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Popular
