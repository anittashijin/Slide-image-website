
import './App.css'
import Abc from './components/Abc'
import Para from './components/Para'
import Slide from './components/Slide'





function App() {

  return (
    <>
      <div>
      <nav className="navbar  border ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img className='ms-5' style={{height:'65px',width:'100px'}} src="https://cdn.dribbble.com/users/160296/screenshots/1184454/ol-bw-1.png" alt="" /><i className="fa-solid fa-heart" style={{color:'white'}}></i>
      </a>
    </div>
  </nav>
        
        <Slide/>
        <Para/>
        <Abc/>
        <div  style={{height:'300px'}} className='container ms-3 mt-5 w-100 footer'>
         <div className="footer-content d-flex justify-content-between">
         <div className="links d-flex flex-column mt-5">
              <h3><b>Contact Us</b></h3>
              <h6><b>Email:</b></h6>
              <a  style={{textDecoration:'none'}}>feedhopeo@organic.com</a>
              <h6><b>Phone No:</b></h6>
              <a style={{textDecoration:'none'}}>9895514844</a>
              <h6><b>Address:</b></h6>
              <a style={{textDecoration:'none'}}>98 Road,Borgail Street,USA</a>
            
          </div>
          <div style={{width:'400px'}} className="media mt-5">
              <h3 className='d-flex'><img className='ms-5' style={{height:'70px',width:'150px'}} src="https://cdn.vectorstock.com/i/preview-1x/15/76/heart-for-love-vector-20521576.jpg" alt="" /><i className="fa-solid fa-heart ms-4" style={{color:'white'}}></i></h3>
              <p style={{textAlign:'justify'}}>Design and built with all the love in the world by the bootstrap team with the help of our Contributors</p>
              <div className='icons d-flex justify-content-between mt-3'>
                <a style={{textDecoration:'none'}}><i class='fa-brands fa-twitter fa-1x'></i></a>
                <a  style={{textDecoration:'none'}}><i class='fa-brands fa-instagram fa-1x'></i></a>
                <a  style={{textDecoration:'none'}}><i class='fa-brands fa-facebook fa-1x'></i></a>
                <a  style={{textDecoration:'none'}}><i class='fa-brands fa-linkedin fa-1x'></i></a>
                <a style={{textDecoration:'none'}}><i class='fa-brands fa-github fa-1x'></i></a>
                <a style={{textDecoration:'none'}}><i class='fa-brands fa-phone fa-1x'></i></a>
  
              </div>
          </div>
          <div className="guides d-flex flex-column mt-5">
              <h3><b>Utility Pages</b></h3>
              <a  style={{textDecoration:'none'}}>Style Guide</a>
              <a style={{textDecoration:'none'}}>404 not found</a>
              <a  style={{textDecoration:'none'}}>password protector</a>
              <a  target='_blank' style={{textDecoration:'none'}}>Licence</a>
              <a style={{textDecoration:'none'}}>Chargering</a>
  
          </div>
         </div>
         </div>
      </div>
    </>
  )
}

export default App
