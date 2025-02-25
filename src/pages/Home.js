import "./Home.css";
import Navbar from "./Navbar";
import myImage from "./img/G8.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <>
      <Navbar />
     <div className="wrapper">
      <div className="overlay"> 
      <div className="container1">


      <div id="home-info">
      
      <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="display-2 text-white fw-bold">Hi I'm <span className="alex">JERICO</span></h1>
                    <h2 className="text-animate">Billiard Player</h2>
                    <p className="text-white">I have a passion for billiards. Ever since I first picked up a cue stick, I've been fascinated by the strategic and precise nature of the game. Billiards isn't just a hobby for me; it's a captivating blend of skill, geometry, and focus.</p>
                    <a href="#work" className="btn btn-brand">Play with Me</a>
                    <a href="#work" className="btn btn-brand">Billiards</a>

                </div>
                
            <div className="col-lg-6 img">
               <img src={myImage}/>
            </div>
          </div>
        </div>
      </div>
     
        </div>
       </div>
      </div>

      
    </>
  );
};

export default Home;
