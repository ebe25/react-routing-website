import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>One stop for all your solutions.</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
          <p>
            We are you one and only solution to the tech problems you face every
            day.We are leading the industry and dispurting the market since
            1960's.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who are we?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            provident voluptas saepe eligendi adipisci libero temporibus illum
            quam placeat veniam commodi inventore accusamus dicta dolores at
            veritatis odio, r odit porro unde! Facere architecto ad accusantium
            nulla ullam illo obcaecati, vero impedit velit doloribus repellat
            mollitia quidem nihil autem nemo vel maiores ab! Cupiditate
            doloremque perferendis necessitatibus molestiae alias, facilis quia
            fugit quidem accusantium dicta omnis magni eveniet a! Consequatur
            aut mollitia debitis dolores iure, nemo id quod dicta.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{
              animationDelay:"0.3s",
            }}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style={{
              animationDelay:"0.5s",
            }}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style={{
              animationDelay:"0.7s",
            }}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
            <div style={{
              animationDelay:"1s",
            }}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
