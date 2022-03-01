import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaRunning } from "react-icons/fa";
import Navigation from "./Navigation";
import banner from "../../img/banner.jpg";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="banner__wrapper">
          <p>
            lorem lorem lorem lorem lorem loreml orem lorem lorem lorem lorem
            lorem lorem loreml orem lorem lorem lorem lorem lorem lorem
            loremllorem lorem loremllorem lorem loremllorem lorem loremllorem
            lorem loreml
          </p>

          <a>Keeping You Information on Our Response to covid-19</a>
        </div>
      </section>
      <div className="bg-banner">
        <div className="bg-banner__wrapper">
          <h2>
            bring on <br />
            <span>the perks</span>
          </h2>
          <p>DD Perks rewards members on every Dunkin' run.</p>
        </div>
      </div>
      <section className="contact ">
        <div className="contact__wrapper columns-3">
          <div className="contact__main">
            <img src="http://www.downloadclipart.net/large/donut-transparent-background.png" />
            <h2>Earn On Every Run</h2>
            <p>djskfhiuysdfusf shfiusdvyf kdjdyffu jbdfdfdf</p>
          </div>
          <div className="contact__main">
            <BsFillPersonFill />
            <h2>Pay Any Way</h2>
            <p>djskfhiuysdfusf shfiusdvyf kdjdyffu jbdfdfdf</p>
          </div>
          <div className="contact__main">
            <FaRunning />
            <h2>Check Out Faster</h2>
            <p>djskfhiuysdfusf shfiusdvyf kdjdyffu jbdfdfdf</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
