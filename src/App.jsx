import './App.css'


function App() {

  return (
    <div>
      {/* navbar */}
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid py-3">
          <a class="navbar-brand ms-5 logo text-light fs-4 fw-bolder" href="#"><span>Build</span>Space</a>
          <button class="navbar-toggler nav-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto me-5">
              <a class="nav-link link1" href="#home">HOME</a>
              <a class="nav-link" href="#about">ABOUT</a>
              <a class="nav-link" href="#services">SERVICES</a>
              <a class="nav-link" href="#portfolio">PORTFOLIO</a>
              <a class="nav-link" href="#footer">BLOG</a>
            </div>
          </div>
        </div>
      </nav>

      {/* home */}
      <section id='home'>
        <div className='home-img container-fluid p-0  position-relative d-flex justify-content-center align-items-center'>
          <img className='img-fluid' src="./images/bg-img.jpg" alt="" />
          <div className="main-titles d-flex flex-column justify-content-center align-items-center">
            <h1>WE BUILD THE FUTURE</h1>
            <p>Best Ideas - Best Solution - Best Result</p>
            <button className='main-btn btn btn rounded-0 mt-5'>VIEW MORE</button>
          </div>
        </div>
      </section>

      {/* about */}
      <section id='about'>
        <div className="container row d-flex justify-content-center mt-5">
          <div className="col-3"></div>
          <div className="col-lg-4 headings">
            <p>ABOUT COMPANY</p>
            <h2>WE CREATE <br /> AND TURN INTO <br /> REALITY</h2>
            <div className='separator mt-3'></div>
          </div>

          <div className="col-lg-5 details">
            <p>We apply innovative design solutions to enhance people's residential wellbeing and to help workplaces succeed! All our team collaborates with our clients!</p>
            <p className='p-tag2 mt-5'>All our team collaborates with our clients, across all of our 3 offices, which are located throughout the US. Our mission is to implement the outstanding design ideas and solutions for any project we're working on… During that process we carefully combine client's guidelines, technical possibilities, as well as the environmental issues. Engineering and interior design solutions that we deliver are usually born after a collaborative process.</p>
          </div>
        </div>
        <div className="container mt-5 d-flex flex-wrap justify-content-evenly align-items-center">
          <div className='about-images position-relative mb-3'>
            <img src="./images/about1.jpg" alt="" />
            <p className="img-title">ARCHITECTURE</p>
          </div>
          <div className='about-images position-relative mb-3'>
            <img src="./images/about2.jpg" alt="" />
            <p className="img-title">ENGINEERING</p>
          </div>
          <div className='about-images position-relative mb-3'>
            <img src="./images/about3.jpg" alt="" />
            <p className="img-title">INTERIOR DESIGN</p>
          </div>
        </div>
      </section>

      {/* services */}
      <section id='services'>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header headings my-5">
                <p>OUR SERVICES</p>
                <h2>OUR TOP-TIER <br /> OFFERINGS</h2>
                <div className='separator mt-3'></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-12 col-lg-4 mb-3">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                <i class="fa-regular fa-building"></i>
                <h4 className='card-title'>Best Quality</h4>
                <p className="lead mt-4">Experience unparalleled quality and expertise in architectural design, tailored to your unique needs and vision. Discover innovative, functional, and visually stunning architectural solutions that exceed your expectations</p>
                <button className='sub-btn btn'>Read More</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4 mb-3">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                <i class="fa-brands fa-slack"></i>
                <h4 className='card-title'>Sustainability</h4>
                <p className="lead mt-4">We prioritize sustainable design and environmentally responsible practices, creating buildings that minimize ecological footprint ,conserve resources, reduce waste and maximize human well-being</p>
                <button className='sub-btn btn'>Read More</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4 mb-3">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                <i class="fa-brands fa-playstation"></i>
                <h4 className='card-title'>Integrity</h4>
                <p className="lead mt-4">We uphold the highest standards of integrity, ethics, and professionalism, maintain confidentiality and trust, deliver exceptional quality and value, ensuring transparent, honest, and fair practices in every project</p>
                <button className='sub-btn btn'>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* portfolio */}
      <section id='portfolio'>
        <div className='container mt-5 d-flex flex-wrap justify-content-center align-items-center'>
          <div className="col-lg-4 headings">
            <p>PORTFOLIO</p>
            <h2>OUR LATEST <br /> PROJECTS</h2>
            <div className='separator mt-4'></div>
          </div>
          <div style={{ width: "600px" }} className='mt-4'>
            <p style={{ color: 'gray', lineHeight: '30px' }}>We specialize in author's projects which represent your individuality. Our award-winning designers know how to create a perfect space for your. We stand for durable materials, qualitative work and innovative technologies. Enjoy our unique architectural solution and design projects! Archivolt.</p>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-evenly align-items-center mt-5">
          <div className='portfolio-img mb-4'>
            <img src="./images/p1.jpg" alt="" />
          </div>
          <div className='portfolio-img mb-4'>
            <img src="./images/p2.jpg" alt="" />
          </div>
          <div className='portfolio-img mb-4'>
            <img src="./images/p3.jpg" alt="" />
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-evenly align-items-center">
          <div className='portfolio-img mb-4'>
            <img src="./images/p4.jpg" alt="" />
          </div>
          <div className='portfolio-img mb-4'>
            <img src="./images/p5.jpg" alt="" />
          </div>
          <div className='portfolio-img mb-4'>
            <img src="./images/p6.jpg" alt="" />
          </div>
        </div>

        <div className='text-center'>
          <button className='view-btn btn rounded-0 mt-3'>VIEW MORE</button>
        </div>

      </section>

      {/* partners */}
      <div className='container mt-5 d-flex flex-wrap justify-content-evenly align-items-center'>

        <div className="headings ">
          <p>PARTNERS</p>
          <h2>OUR CLIENTS & <br /> PARTNERS</h2>
          <div className='separator mt-4'></div>
        </div>

        <div className='home-brands-images mt-5'>
          <div className="row px-5">
            <div className="col-md-4 mb-5">
              <img src="./images/home-brands-1.jpg" alt="" />
            </div>
            <div className="col-md-4 mb-5">
              <img src="./images/home-brands-2.jpg" alt="" />
            </div>
            <div className="col-md-4 mb-5">
              <img src="./images/home-brands-3.jpg" alt="" />
            </div>
          </div>
          <div className="row px-5">
            <div className="col-md-4 mb-5">
              <img src="./images/home-brands-4.jpg" alt="" />
            </div>
            <div className="col-md-4 mb-5">
              <img src="./images/home-brands-5.jpg" alt="" />
            </div>
            <div className="col-md-4 mb-5">
              <img src="./images/home-brands-6.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer id='footer'>
      <div className='d-flex flex-wrap justify-content-center gap-5 mt-5 border-top'>
      <div>
        <div className="headings pt-5">
            <p>LET'S GET IN TOUCH</p>
            <h2>CONTACT DETAILS</h2>
            <div className='separator mt-4'></div>
        </div>
          <div className='contact-details mt-5'>
                <p>Phone: <a href="">(555)123-4567</a></p>
                <p>Email: <a href="">info@demolink.org</a></p>
                <p>Address: Alexandria, 32 Washingtorn str, 22303</p>
                <p>Opening hours:</p>
                <p>Monday — Thursday 10:00 - 23:00</p>
                <p>Friday — Sunday 10:00 - 19:00</p>
           </div>
           <div className="icons mt-5">
              <a href=""><i class="fa-brands fa-facebook-f"></i></a>
              <a href=""><i class="fa-brands fa-twitter ms-4"></i></a>
              <a href=""><i class="fa-brands fa-google-plus-g ms-4"></i></a>
              <a href=""><i class="fa-brands fa-instagram ms-4"></i></a>  
              <a href=""><i class="fa-brands fa-youtube ms-4"></i></a> 
              <a href=""><i class="fa-brands fa-pinterest ms-4"></i></a>                                        
           </div>
      </div>
  
        <div className="contact-input mt-5">
          <form className='form-input'>
              <input className='form-control input-one' type="text" placeholder='Your name' />
              <input className='form-control mt-5' type="email" placeholder='Your E-mail' />
              <input style={{height:"220px"}} className='form-control mt-5' type="address" placeholder='Your message' />
          </form>
          <button className='sub-btn btn mt-5 mb-5'>SEND</button>
        </div>
      </div>

      </footer>

      <div className="copyright text-center text-light mt-5 pt-3 bg-dark">
        <p>Copyright &#169;, All Rights Reserved by BuildSpace</p>
      </div>
    </div>
  )
}

export default App
