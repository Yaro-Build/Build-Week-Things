import React from "react"

export default function Carousel () {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style = {{height:"400px", objectFit:"contain"}} src="https://2e8ram2s1li74atce18qz5y1-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/Coding-Bootcamp-Ratings-Dice-1920x1200.png" className="d-block w-100" alt="Teaching code"/>
      <div className="carousel-caption d-none d-md-block">
    
        <h4 style= {{color: "#0a7496", marginTop:"25px"}}>Full-time mentoring and code-alongs to make sure you understand key concepts.</h4>
      </div>
    </div>
    <div className="carousel-item">
      <img style = {{height: "400px", width: "400px", objectFit:"contain"}} src="http://kids.gocodemy.com/img/codingguy.png" className="d-block w-100" alt="Learning code"/>
      <div className="carousel-caption d-none d-md-block">
        
        <h4 style= {{color: "#0a7496"}}>Do extra research, learn, and peak your curiosity.</h4>
      </div>
    </div>
    <div className="carousel-item">
      <img style = {{height:"400px", objectFit: "contain"}}src="https://www.pngkey.com/png/full/43-435278_free-fire-vector-art-icon.png" className="d-block w-100" alt="Rocket taking off"/>
      <div className="carousel-caption d-none d-md-block">
        
        <h4 style= {{color: "#0a7496"}}>Complete build week, increase your clout, and take your career to the next level.</h4>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    )
}
