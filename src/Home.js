import React, { Component, useState, useEffect } from "react";
import "./Home.css";
import ReactDOM from "react-dom";
import Product from "./Product";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CurrencyFormat from "react-currency-format";
import { IconButton } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import Axios from "axios";

function Home() {
  //------------------------------------------------Slides-------------------------------------//

  const [slides, setSlides] = useState();
  const [nextBtn, setNextBtn] = useState();
  const [prevBtn, setPrevBtn] = useState();
  const slideImg = document.querySelectorAll(".slides img");

  //the slides and arrows are set when the component is mounted the first time
  useEffect(() => {
    
    setSlides(document.querySelector(".slides"));
    setNextBtn(document.querySelector(".next"));
    setPrevBtn(document.querySelector(".prev"));
  },[]);
  let slideIndex = 1;

//if slides and if btn check wether the elements have been loaded.
//first the values are assigned in the useEffect before they can be used.

  if (slides) {
    slides.style.transform =
      "translateX(" + -slideImg[0].width * slideIndex + "px)";
  }

  //if the buttons are loaded we give them an eventlistener
  //the slider is implemented as an array where the index determine wether you can slide to the left or right.

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (slides) {
        if (slideIndex >= slideImg.length - 1) return; //wenn der letzte index erreicht ist springen wir aus der funktion raus
        slides.style.transition = "transform 0.4s ease-in-out";
        slideIndex++;
        slides.style.transform =
          "translateX(" + -slideImg[0].width * slideIndex + "px)";
      }
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (slides) {
        if (slideIndex <= 0) return;
        slides.style.transition = "transform 0.4s ease-in-out";
        slideIndex--;
        slides.style.transform =
          "translateX(" + -slideImg[0].width * slideIndex + "px)";
      }
    });
  }
  //---what happens when we were on the last slide or on the first slide?
  //the respective indices are set to either the 
  if (slides) {
    slides.addEventListener("transitionend", () => {
      if (slideImg[slideIndex].id === "lastClone") {
        slides.style.transition = "none";
        slideIndex = slideImg.length - 2;
        slides.style.transform =
          "translateX(" + -slideImg[0].width * slideIndex + "px)";
      }
      if (slideImg[slideIndex].id === "firstClone") {
        slides.style.transition = "none";
        slideIndex = slideImg.length - slideIndex;
        slides.style.transform =
          "translateX(" + -slideImg[0].width * slideIndex + "px)";
      }
    });
  }
  //------------------------------------------------the html stuff etc--------------------------//
  return (
    <div className="home">
      <div className="banner">
        <a className="prev" type="submit">
          &#10094;
        </a>
        <a className="next" type="submit">
          &#10095;
        </a>
        <div className="slides ">
          <img
            className="background-img"
            id="lastClone"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_de_DE_1x._CB429089973_.jpg"
          ></img>
          <img
            className="background-img"
            src="https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/gateway/placement/launch/TheBoysS2/THBY_S2_GWBleedingHero_FT_COVIDUPDATE_XSite_1500x600_PV_de-DE._CB406815409_.jpg"
          ></img>
          <img
            className="background-img"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_de_DE_1x._CB428980071_.jpg"
            alt=""
          ></img>
          <img
            className="background-img"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_de_DE_1x._CB431860451_.jpg"
          ></img>

          <img
            className="background-img"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_de_DE_1x._CB432534558_.jpg"
            alt=""
          ></img>
          <img
            className="background-img"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_de_DE_2x._CB428993290_.jpg"
            alt=""
          ></img>
          <img
            className="background-img"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_de_DE_1x._CB429089973_.jpg"
            alt=""
          ></img>
          <img
            className="background-img"
            id="firstClone"
            src="https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/gateway/placement/launch/TheBoysS2/THBY_S2_GWBleedingHero_FT_COVIDUPDATE_XSite_1500x600_PV_de-DE._CB406815409_.jpg"
            alt=""
          ></img>
        </div>

        <div className="home_row rowtop">
          <Product
            id="23232"
            title="Corsair K55 Gaming Tastatur (Multi-Color RGB Beleuchtung, QWERTZ) schwarz"
            price={58.99}
            image="https://www.alternate.at/p/o/n/Corsair_K55_RGB_Gaming__Gaming_Tastatur@@ntzvv628.jpg"
            rating={3}
          />
          <Product
          id="3232389"
            title="La Marzocco Linea Mini - Schwarz Matt"
            price={4069}
            image="https://www.mobacoffee.de/media/image/product/7163/lg/la-marzocco-linea-mini-schwarz-matt.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
          id="0009339"
            title=" DELL UltraSharp U4919DW 124,5cm (49) 4k UltraHD Profi-Monitor HDMI/DP/USB-C"
            price={1060}
            image="https://cyberport.scene7.com/is/image/cyberport/181210113329400301900049L?$Zoom_1000$"
            rating={5}
          />
          <Product
          id="55838204"
            title="Apple Watch Series 5 (GPS, 44 mm) Aluminiumgehäuse Space Grau - Sportarmband Schwarz"
            price={438.38}
            image="https://images-na.ssl-images-amazon.com/images/I/81VAnsq%2B4AL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
          id="002223"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 1TB) - Space Gray (4th Generation) with AppleCare+ Bundle"
            price={1778}
            image="https://images-na.ssl-images-amazon.com/images/I/61GrEskUMAL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="Me: Elton John Official Autobiography Kindle Edition"
            price={15.29}
            image=" https://d188rgcu4zozwl.cloudfront.net/content/B07PK1ZF4K/resources/410597631"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
