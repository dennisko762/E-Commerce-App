import React, { Component, useState, useEffect } from "react";
import "./Home.css";
import ReactDOM from "react-dom";
import Product from "./Product";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CurrencyFormat from "react-currency-format";
import { IconButton } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

function Home() {
  const imageArray = new Array();
  imageArray[0] = new Image();
  imageArray[0].src =
    "https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/gateway/placement/launch/TheBoysS2/THBY_S2_GWBleedingHero_FT_COVIDUPDATE_XSite_1500x600_PV_de-DE._CB406815409_.jpg";

  imageArray[1] = new Image();
  imageArray[1].src =
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_de_DE_1x._CB428980071_.jpg";

  imageArray[2] = new Image();
  imageArray[2].src =
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_de_DE_1x._CB431860451_.jpg";
  imageArray[3] = new Image();
  imageArray[3].src =
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_de_DE_1x._CB432534558_.jpg";
  imageArray[4] = new Image();
  imageArray[4].src =
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_de_DE_2x._CB428993290_.jpg";
  imageArray[5] = new Image();
  imageArray[5].src =
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_de_DE_1x._CB429089973_.jpg";
  const [slides, setSlides] = useState();

  useEffect(() => {
    setSlides(document.querySelector(".slides"));
  });
  let slideIndex = 1;
  //showSlides(slideIndex);
  if (slides) {
    slides.style.transform =
      "translateX(" + -imageArray[0].width * slideIndex + "px)";
  }

  function plusSlides(n) {
    console.log(slides);
    slides.style.transition = "transform 0.4s ease-in-out";
    showSlides((slideIndex += n));
    slides.style.transform = "translateX(" + -imageArray[0].width;
  }
  showSlides(slideIndex);

  function showSlides(n) {
    let i;
    if (slides) {
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (let i = 0; i < slides.length; i++) {
        slides.style.display = "none";
      }

      slides.style.display = "block";
    }
  }

  return (
    <div className="home">
      <div className="banner">
        <div className="mySlides">
          <div className="slides fade">
            <img
              className="background-img"
              id="first clone"
              src="https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/gateway/placement/launch/TheBoysS2/THBY_S2_GWBleedingHero_FT_COVIDUPDATE_XSite_1500x600_PV_de-DE._CB406815409_.jpg"
            ></img>
          </div>

          <div className="slides fade">
            <img
              className="background-img"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_de_DE_1x._CB428980071_.jpg"
            ></img>
          </div>
          <div className="slides fade">
            <img
              className="background-img"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_de_DE_1x._CB431860451_.jpg"
            ></img>
          </div>
          <div className="slides fade">
            <img
              className="background-img"
              id="last clone"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_de_DE_1x._CB432534558_.jpg"
            ></img>
          </div>
          <a
            className="prev"
            type="submit"
            onClick={() => {
              plusSlides(-1);
            }}
          >
            &#10094;
          </a>
          <a
            className="next"
            type="submit"
            onClick={() => {
              plusSlides(1);
            }}
          >
            &#10095;
          </a>
        </div>

        <div className="home_row">
          <Product
            title="Corsair K55 Gaming Tastatur (Multi-Color RGB Beleuchtung, QWERTZ) schwarz"
            price={58.99}
            image="https://www.alternate.at/p/o/n/Corsair_K55_RGB_Gaming__Gaming_Tastatur@@ntzvv628.jpg"
            rating={3}
          />
          <Product
            title="La Marzocco Linea Mini - Schwarz Matt"
            price={4069}
            image="https://www.mobacoffee.de/media/image/product/7163/lg/la-marzocco-linea-mini-schwarz-matt.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            title=" DELL UltraSharp U4919DW 124,5cm (49) 4k UltraHD Profi-Monitor HDMI/DP/USB-C"
            price={1060}
            image="https://cyberport.scene7.com/is/image/cyberport/181210113329400301900049L?$Zoom_1000$"
            rating={5}
          />
          <Product
            title="Apple Watch Series 5 (GPS, 44 mm) Aluminiumgehäuse Space Grau - Sportarmband Schwarz"
            price={438.38}
            image="https://images-na.ssl-images-amazon.com/images/I/81VAnsq%2B4AL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
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
