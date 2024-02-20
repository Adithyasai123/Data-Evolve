import React from "react";
import "./Topbar.css";
import main_video from "../../Assets/Videos/main_video.mp4";
import mobilevideo from "../../Assets/Videos/mobilevideo.mp4";
const Topbar = () => {
  return (
<<<<<<< HEAD
   <div>
   <section>
   <div className="full-screen" style={{overflow:"hidden"}}>
   <div className="d-md-block d-none">
   <video width="100%" autoPlay loop muted plays-inline className="back-video" >
   <source src={main_video} type="video/mp4"/>
  </video>
   </div>
   </div></section>
    
 </div>
=======
  <div>
      
      <div className="full-screen " style={{overflow:"hidden"}}>
     <div className="d-md-block d-none">
     <video width="100%" autoPlay loop muted playsInline >
      <source src={main_video} type="video/mp4"/>
     </video>
     </div>
      </div>
<div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5">
              <div className="premier-text">
                <span>PREMIER</span><br/>
                <span>TECHNOLOGY</span><br/>
                <span>COLLABRATIONS</span>
              </div>
              <div className="dive-text">
                <span>Dive Deeper into Our Partnerships</span>
              </div>

            </div>

          </div>

        </div>
      </section>
      
    </div>
  </div>
>>>>>>> ee50f899e31d0c6cd69f58dcb7308966a4ebba77
  );
};

export default Topbar;
