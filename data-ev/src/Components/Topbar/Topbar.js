import React from "react";
import "./Topbar.css";
import main_video from "../../Assets/Videos/main_video.mp4";
import mobilevideo from "../../Assets/Videos/mobilevideo.mp4";
const Topbar = () => {
  return (
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
  );
};

export default Topbar;
