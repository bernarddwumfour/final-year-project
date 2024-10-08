import MessageForm from "@/app/components/MessageForm";
import Image from "next/image";
import React from "react";

const Contactpage = () => {
  return (
    <main id="contactpage">
      <div>
        <div id="contact">
          <div className="page">
        
            <h1 className="heading">Get in Touch.</h1>
            <p className="subheading">Reach Out to Us</p>

            <div className="contactflex">
              <div className="image">
              <Image src={'/contactimage.jpg'} alt="contact image" fill/>
              </div>
              <div className="form">
              <MessageForm type="message"/>
              </div>
            </div>

            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219.026338478856!2d-0.19587219308806253!3d5.64993214364426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7ebaeabe93%3A0xd78257e67498c1a0!2sUniversity%20of%20Ghana!5e0!3m2!1sen!2sgh!4v1716835348943!5m2!1sen!2sgh"  style={{border:0}}  loading="lazy" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contactpage;
