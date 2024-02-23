import React from "react";
import "./Newsbanners.css";

const Newsbanners = () => {
  return (
    <div>
      <div className="container-news">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10 peek-header">
                <div className="peek-header">
                  <span>A PEEK INTO OUR STORIES</span>
                </div>
                <div className="peek-para">
                  <span>
                    Each story is a journey, an adventure waiting to unfold.
                    Immerse yourself in our tales, discover the wonder that
                    awaits within our stories.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="carouselExampleAutoplaying" class="carousel slide d-flex justify-content-center" data-bs-ride="carousel" data-bs-interval="10">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/newsletterimages/achivemore.png" class="d-block mx-auto w-50" alt="Achieve More" />
    </div>
    <div class="carousel-item">
      <img src="https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/newsletterimages/awspartner.png" class="d-block mx-auto w-50" alt="AWS Partner" />
    </div>
    <div class="carousel-item">
      <img src="https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/newsletterimages/blockchain.png" class="d-block mx-auto w-50" alt="Blockchain" />
    </div>
    <div class="carousel-item">
      <img src="https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/newsletterimages/cloud.png" class="d-block mx-auto w-50" alt="Cloud" />
    </div>
    <div class="carousel-item">
      <img src="https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/newsletterimages/cloudcost.png" class="d-block mx-auto w-50" alt="Cloud Cost" />
    </div>
    <div class="carousel-item">
      <img src="https://dataevolve-client-team-images.s3.ap-south-1.amazonaws.com/newsletterimages/hightavailablity.png" class="d-block mx-auto w-50" alt="High Availability" />
    </div>
  </div>
</div>

    
    </div>
  );
};

export default Newsbanners;
