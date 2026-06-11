import React, { useEffect } from "react";
import dummy1 from "../assets/dummy/dummy1.jpg";
import dummy2 from "../assets/dummy/dummy2.jpg";
import dummy3 from "../assets/dummy/dummy3.jpg";
import dummy4 from "../assets/dummy/dummy4.jpg";
import dummy5 from "../assets/dummy/dummy5.jpg";
import "./GlideGallery.css";

const GlideGallery = () => {
  useEffect(() => {
    // Initialize StringTune animations
    if (window.StringTune) {
      const stringTune = window.StringTune.StringTune.getInstance();
      stringTune.use(window.StringTune.StringLazy);
      stringTune.use(window.StringTune.StringGlide);
      stringTune.start(0);
    }
  }, []);

  return (
    <div className="-w">
      {/* <span className="note -mm -up -tac">(Disabled on mobile devices by default)</span>
      <p>Order is temporary — tension is permanent.</p> */}

      <figure className="image-1" string="glide[]" data-string-glide="0.5">
        <img src={dummy1} alt="Gallery 1" />
      </figure>

      <figure className="image-2" string="glide[]" data-string-glide="1.0">
        <img src={dummy2} alt="Gallery 2" />
      </figure>

      <figure className="image-3" string="glide[]" data-string-glide="1.5">
        <img src={dummy3} alt="Gallery 3" />
      </figure>

      <figure className="image-4" string="glide[]" data-string-glide="1.0">
        <img src={dummy4} alt="Gallery 4" />
      </figure>

      <figure className="image-5" string="glide[]" data-string-glide="0.5">
        <img src={dummy5} alt="Gallery 5" />
      </figure>
    </div>
  );
};

export default GlideGallery;
