import React, { Component } from "react";
import "../style/landingPage.css";

export class About extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="about" id="about">
          <section className="about-us">
            <h1>ABOUT<br/>GRIYA KAIN</h1>
            <p>
                Ini merupakan laman yang di desain untuk memenuhi Ujian Tengah Semester (UTS) mata kuliah Framework Programming.
                Desain ini menggunakan tema culture yang mana user dapat melihat list produk yang sedang trending saat ini.
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
