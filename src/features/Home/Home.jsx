import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import './Home.css';

const Home = () => {
  const data = useSelector((globalStore) => globalStore);
  const navigate = useNavigate();

  const CheckLogin = () => {
    if (
      data.auth.dataLogin === null ||
      data.auth.dataLogin?.email === "admin@admin.com"
    )
      navigate("/");
  };

  useEffect(() => {
    CheckLogin();
    // eslint-disable-next-line
  }, []);

  const state = {
    navCollapsed: true
  }

  const _onToggleNav = () => {
    this.setState({ navCollapsed: !state.navCollapsed })
  }

  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/");
  };
  
  return (
    <>
      <header className="header-nav">
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={process.env.PUBLIC_URL + 'logo1.png'} alt="logo" width="100" height="34" />
                </a>
                <button aria-expanded="false" className="navbar-toggler collapsed" onClick={_onToggleNav} type="button">
                    <img src={process.env.PUBLIC_URL + 'navbar_toggle.png'} alt="toggle" width="34" height="34"/>
                </button>
                <div className={(state ? "collapse " : "") + "collapse navbar-collapse justify-content-end"} id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link font-nav" href="#ourServices" >Our Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-nav" href="#whyUs" >Why Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-nav" href="#testimonial" >Testimonial</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-nav me-2" href="#faq" >FAQ</a>                
                        </li>
                    </ul>
                    <button className="btn my-2 my-sm-0 font-nav text-light color-btn-green" onClick={handleLogout} >Logout</button>
                </div>
            </div>
        </nav>
    </header> 
    <section className="header-nav" id="hero">
      <br /><br />
      <div className="container">
          <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6">
              <h1 className="font-sewa">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </h1>
              <p className="font-p">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas <br/>
              terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br/>
              untuk sewa mobil selama 24 jam.
              </p>
              <button id="btn-find" to="/find-car" className="btn my-2 my-sm-0 text-light color-btn-green">
                  Mulai Sewa Mobil
              </button>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-6">                   
              <div>
                  <img className="img-fluid" src="/img_car.png" alt="car" />
              </div>
          </div>            
          </div>       
      </div>
    </section>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="js/bootstrap.min.js"></script>
    </>
  );
};

export default Home;