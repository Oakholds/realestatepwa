import React from 'react'
import './Footie.css'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { MdCall, MdEmail, MdPlace } from 'react-icons/md'
const Footie = () => {
  return (
    <div className=''>
    <footer class="footer">
  	 <div class="container">
		<div className="footer-col flexColStart small">
                <img src="./logo.png" alt="" width={120}/>

                <span style={{
                    color : 'lavender'
                }} className="secondaryText">
                    {/* Our Vision is to make all people<br />
                    the best place to live for them. */}

                </span>
            </div>
  	 	<div class="innerWidth rowf">
		   <div className="footer-col flexColStart f-left">
                <img src="./logo.png" alt="" width={120}/>

                <span style={{
                    color : 'lavender'
                }} className="secondaryText">
                    {/* Our Vision is to make all people<br />
                    the best place to live for them. */}

                </span>
            </div>
			<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li> <a href="#"> <MdPlace size={20}/> No 4 Ribadu Road Ikoyi, Lagos</a></li>
  	 				<li><a href="#"> <MdCall size={20}/> 08111120003</a></li>
  	 				<li><a href="#"> <MdEmail size={20}/>info@oakhomeslimited.com</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Company</h4>
  	 			<ul>
  	 				<li><a href="/about">About us</a></li>
  	 				<li><a href="/projects">Properties</a></li>
  	 				<li><a href="https://theoakholdings.ng/">Oak Holdings</a></li>
  	 			</ul>
  	 		</div>

  	 		{/* <div class="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#">watch</a></li>
  	 				<li><a href="#">bag</a></li>
  	 				<li><a href="#">shoes</a></li>
  	 				<li><a href="#">dress</a></li>
  	 			</ul>
  	 		</div> */}
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="https://www.facebook.com/oakhomeslimited/"><i class="fab fa-facebook-f"><FaFacebook/></i></a>
  	 				<a href="https://x.com/oakhomeslimited"><i class="fab fa-twitter"><FaTwitter/></i></a>
  	 				<a href="https://www.instagram.com/oakhomeslimited?igsh=MTc4NGtzaTVxZzVvYw=="><i class="fab fa-instagram"><FaInstagram/></i></a>
  	 				<a href="https://www.linkedin.com/company/oak-homes-limited"><i class="fab fa-linkedin-in"><FaLinkedinIn/></i></a>
  	 			</div>
  	 		</div>
			   <div class="bottm_footer">
            <span style={{color: "#e0e0e0"}}>©2025 Oak Homes. All Rights Reserved</span>
        </div>
  	 	</div>

  	 </div>


  </footer>
    </div>
  )
}

export default Footie