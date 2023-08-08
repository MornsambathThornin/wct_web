import React from "react";
import "./recommend.css";
import { Link } from "react-router-dom";
import {useState , useEffect} from 'react' ;
import Cards from '../../components/cards/cards';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { popular } from "../../dummyData";
import Heading from "../common/heading/Heading";

const Laptop = () => {
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
  };

  const [electronic ,setElectronic] = React.useState([]);
	const [loading , setLoading] = React.useState(true);
	const [name , setName] = React.useState('') ;
	const [major , setMajor] = React.useState('') ;
	const [price , setPrice] = React.useState('') ;


   console.log(name , major , price)

	const Filter = async () => {
		const data = {name , major , price} ;
		const response = await fetch(`http://localhost:8000/api/electronic/filtering?name=${name}&major=${major}&price=${price}`);

		// ?name=${name}&major=${major}&price=${price}

		const result = await response.json();
		setElectronic(result);

		setLoading(false);
		console.log(result);
		if(!result){
			return <h1>Not Found</h1>
		}
	}

	useEffect(()=>{
		Filter();
	}, [price , major , name] )



  return (
    <>
      <main>
        <div className="container">
          <section className="sideContainer">
     
		
    <div class="card">
    <article class="filter-group">
      <header class="card-header">
        <h6 className=' text-uppercase'>Electronic Name</h6>

      </header>
      <div class="filter-content collapse show" id="collapse_1" >
        <div class="card-body">
          <form class="pb-3">
          <div class="input-group">
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} class="form-control" placeholder="Search"/> 
          </div>
          </form>
        
        </div> 
      </div>
    </article> 
    <article class="filter-group">
      <header class="card-header">
      <h6 className=' text-uppercase'>Price</h6>
      </header>
      <div class="filter-content collapse show" id="collapse_3" >
        <div class="card-body">
          {/* <input type="range" class="custom-range"  name=""/> */}
          <div class="form-row">
          <div class="form-group col-md-6">
            <label></label>
            <input class="form-control " value = {price} onChange={(e)=>setPrice(e.target.value)}  placeholder="$0" type="number"/>
          </div>
  
          </div> 
          
        </div>
      </div>
    </article>
  
    <article class="filter-group">
      <header class="card-header">
  
        <h6 className=' text-uppercase'>Major</h6>
      </header>
      <div class="filter-content collapse show" id="collapse_2">
        <div class="card-body">
        <div class="form-check"  onChange={(e)=>setMajor(e.target.value)} >
        <input class="form-check-input" value="IT"  type="checkbox"  id="flexCheckDefault"/>
        <label class="form-check-label"  for="flexCheckDefault">
          IT 
        </label>
        </div>
  
        <div class="form-check" onChange={(e)=>setMajor(e.target.value)}>
        <input class="form-check-input"  type="checkbox"  value="Architecture" id="flexCheckDefault"/>
        <label class="form-check-label" for="flexCheckDefault">
          Architecture
        </label>
        </div>
  
        <div class="form-check"  onChange={(e)=>setMajor(e.target.value)}>
        <input class="form-check-input"  value="Designer"  type="checkbox"  id="flexCheckDefault"/>
        <label class="form-check-label" for="flexCheckDefault">
          Designer 
        </label>
        </div>
  
        <div class="form-check"  onChange={(e)=>setMajor(e.target.value)}>
        <input class="form-check-input" value="Accounting" type="checkbox"  id="flexCheckDefault"/>
        <label class="form-check-label" for="flexCheckDefault">
          Accounting
        </label>
        </div>
  
        <div class="form-check"  onChange={(e)=>setMajor(e.target.value)}>
        <input class="form-check-input" value="Content Creator"  type="checkbox"  id="flexCheckDefault"/>
        <label class="form-check-label" for="flexCheckDefault">
          Content Creator
        </label>
        </div>
  
          
        </div>
      </div>
      {/* <button class="btn btn-outline-dark btn-lg px-5 mt-4"onClick={Filter} >Apply</button> */}
    </article>

  </div> 

          </section>
         

          <section className="mainContainer popular">
            <div className="content">
                {electronic.map((val) => {
                  return (
                    <Link className='nav-link' to = {"/electronic/detail/" + val.id} key={val.id}>
                    <div className="items">
                      <div className="box shadow">
                        <div className="images row">
                          <div className="img">
                            <img src={val.image1} alt="" />
                          </div>
                        
                        </div>
                        <div className="text row">
                          <h1 className="title">{val.name}</h1>

                          <div className="date">
                        
                            <label   className="text-truncate"
                           style={{ maxWidth: "400px" }}>
                          {val.description}</label>
                          </div>
                          <div className="date">
                            <i class="fas fa-dollar"></i>
                            <label>{val.price}</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    </Link>
                  );
                })}
     
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Laptop;
