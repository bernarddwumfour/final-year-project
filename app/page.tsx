import Image from "next/image";
import Link from "next/link";
import Homebutton from "./components/Homebutton";
import Modal from "./components/Modal";


export default function Home() {
  return (
    <main id="homepage">

        <div className="svg">
        <Image src={'/blob.svg'} fill alt="svg"/>
        </div>

      <Modal/>

      <div id="hero">
        <div className="intro">
          <div>
            <h1>Simplifying Privacy, One Policy at a Time</h1>
            <p>
              Tired of scrolling through endless legal jargon? We're here to
              help. Our Privacy Policy Summarizer transforms complex, lengthy
              policies into concise, easy-to-understand summaries.
            </p>
            <Homebutton />
          </div>

          
        </div>

        <div className="image">
          <Image src={"/homeimage.png"} alt="homeimage" fill />
        </div>
      </div>

      <div id="services">
        <div className="page">
          <h1 className="heading">How It Works</h1>
          <p className="subheading">
            From Complexity to Clarity in Three Simple Steps
          </p>

          <div className="servicegrid">
            <div className="service">
              <div className="image">
                <Image src={"/upload.png"} alt="home1" fill />
              </div>
              <div className="details">
                <p className="servicename">Upload or Link</p>
                <p className="description">
                  Easily upload a privacy policy document or provide a link to
                  the policy you want summarized.
                </p>
              </div>
            </div>
            <div className="service">
              <div className="image">
                <Image src={"/process.png"} alt="home1" fill />
              </div>
              <div className="details">
                <p className="servicename">Automated Analysis</p>
                <p className="description">
                  Our advanced algorithms analyze the text, breaking down the
                  key points and essential details.
                </p>
              </div>
            </div>
            <div className="service">
              <div className="image">
                <Image src={"/download.png"} alt="home1" fill />
              </div>
              <div className="details">
                <p className="servicename">Clear Summaries.</p>
                <p className="description">
                  Receive a concise, easy-to-understand summary, highlighting
                  the most important aspects of the privacy policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="page">
          <h1 className="heading">About Our Platform</h1>
          <p className="subheading">
            Making Privacy Policies Understandable, One Click at a Time
          </p>

          <div className="aboutflex">
            <div className="abouttext">
              Our platform is a testament to the belief that privacy should be
              accessible and understandable for everyone. In a world where
              digital interactions are increasingly complex, we recognized the
              need for a tool that simplifies the often-confusing language of
              privacy policies. That's why we've created this platform – to
              empower individuals and businesses alike with clear, concise
              summaries of their privacy rights and obligations.
              <br />
              <br />
              <Link href="/about" className="click">
                Learn More
              </Link>
            </div>

            <div className="image">
              <Image src={"/aboutimage.jpg"} alt="homeimage" fill />
            </div>
          </div>
        </div>
      </div>

      <div id="testimonials">
        <div className="page">
          <h1 className="heading">Hear from Our Users</h1>
          <p className="subheading">What People Are Saying About Us</p>

          <div className="testimonialsflex">
            <div className="testimonial">
              <p className="comment">
                Incredible tool! As a small business owner, navigating privacy
                policies was a headache. Thanks to this platform, I now have a
                clear understanding of my obligations and can confidently
                communicate with my customers
              </p>
              <p className="name">Sarah, Small Business Owner</p>
            </div>

            <div className="testimonial">
              <p className="comment">
                I love how easy it is to use this platform. Privacy policies
                used to be a mystery to me, but now I feel empowered knowing
                exactly what I'm agreeing to when I use online services. Highly
                recommended!
              </p>
              <p className="name">Mark, Everyday User</p>
            </div>

            <div className="testimonial">
              <p className="comment">
                As a privacy advocate, I'm thrilled to see a platform like this
                making privacy policies more accessible. It's a game-changer for
                ensuring that individuals understand their rights .
              </p>
              <p className="name">Alex, Online Consumer.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="contact">
        <div className="page">
          <h1 className="heading">Get in Touch.</h1>
          <p className="subheading">Reach Out to Us</p>

          <div className="contactflex">
            <div className="image">
              <Image src={"/contactimage.jpg"} alt="homeimage" fill />
            </div>
            <div className="form">
              <form action="">
                <div className="control">
                  <input type="text" name="name" />
                  <label htmlFor="name"> Name</label>
                </div>

                <div className="control">
                  <input type="text" name="email" />
                  <label htmlFor="mail"> Email</label>
                </div>

                <div className="control">
                  <textarea name="message" id="message"></textarea>
                  <label htmlFor="message"> Message</label>
                </div>

                <button className="click">Send Messsage</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
