import React from "react";
import "./recommend.css";

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
  return (
    <>
      <main>
        <div className="container">
          <section className="sideContainer">
            <div class="card">
              <article class="filter-group">
                <header class="card-header">
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse_1"
                    aria-expanded="true"
                    class=""
                  >
                    <i class="icon-control fa fa-chevron-down"></i>
                    <h6 class="title text-uppercase text-success">
                      Product Name
                    </h6>
                  </a>
                </header>
                <div class="filter-content collapse show" id="collapse_1">
                  <div class="card-body">
                    <form class="pb-3">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search"
                        />
                        <div class="input-group-append">
                          <button class="btn btn-light" type="button">
                            <i class="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </form>

                    {/* <ul class="list-menu">
				<li><a href="#">People  </a></li>
				<li><a href="#">Watches </a></li>
				<li><a href="#">Cinema  </a></li>
				<li><a href="#">Clothes  </a></li>
				<li><a href="#">Home items </a></li>
				<li><a href="#">Animals</a></li>
				<li><a href="#">People </a></li>
				</ul> */}
                  </div>
                </div>
              </article>
              <article class="filter-group">
                <header class="card-header">
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse_2"
                    aria-expanded="true"
                    class=""
                  >
                    <i class="icon-control fa fa-chevron-down"></i>
                    <h6 class="title">Brands </h6>
                  </a>
                </header>
                <div class="filter-content collapse show" id="collapse_2">
                  <div class="card-body">
                    <label class="  custom-control custom-checkbox ">
                      <input
                        type="checkbox"
                        checked=""
                        class="custom-control-input"
                      />
                      <div class="custom-control-label">
                        IT
                        {/* <b class="badge badge-pill badge-light float-right">120</b> */}
                      </div>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        checked=""
                        class="custom-control-input"
                      />
                      <div class="custom-control-label">
                        Accounting
                        {/* <b class="badge badge-pill badge-light float-right">15</b>  */}
                      </div>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        checked=""
                        class="custom-control-input"
                      />
                      <div class="custom-control-label">
                        Architecture
                        {/* <b class="badge badge-pill badge-light float-right">35</b>  */}
                      </div>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        checked=""
                        class="custom-control-input"
                      />
                      <div class="custom-control-label">
                        Graphic Design
                        {/* <b class="badge badge-pill badge-light float-right">89</b>  */}
                      </div>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" />
                      <div class="custom-control-label">
                        Gamer
                        {/* <b class="badge badge-pill badge-light float-right">30</b>  */}
                      </div>
                    </label>
                  </div>
                </div>
              </article>
              <article class="filter-group">
                <header class="card-header">
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse_3"
                    aria-expanded="true"
                    class=""
                  >
                    <i class="icon-control fa fa-chevron-down"></i>
                    <h6 class="title">Price range </h6>
                  </a>
                </header>
                <div class="filter-content collapse show" id="collapse_3">
                  <div class="card-body">
                    <input
                      type="range"
                      class="custom-range"
                      min="0"
                      max="100"
                      name=""
                    />
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label>Min</label>
                        <input
                          class="form-control"
                          placeholder="$0"
                          type="number"
                        />
                      </div>
                      <div class="form-group text-right col-md-6">
                        <label>Max</label>
                        <input
                          class="form-control"
                          placeholder="$1,0000"
                          type="number"
                        />
                      </div>
                    </div>
                    <button class="btn btn-block btn-danger btn-lg m-3">
                      Apply
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section className="mainContainer popular">
            <div className="content">
              <Slider {...settings}>
                {popular.map((val) => {
                  return (
                    <div className="items">
                      <div className="box shadow">
                        <div className="images row">
                          <div className="img">
                            <img src={val.cover} alt="" />
                          </div>
                          <div class="category category1">
                            <span>{val.catgeory}</span>
                          </div>
                        </div>
                        <div className="text row">
                          <h1 className="title">{val.title.slice(0, 40)}...</h1>
                          <div className="date">
                            <i class="fas fa-calendar-days"></i>
                            <label>{val.date}</label>
                          </div>
                          <div className="comment">
                            <i class="fas fa-comments"></i>
                            <label>{val.comments}</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Laptop;
