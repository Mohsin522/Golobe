import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Logo from '../Assets/Images/footerLogo.png';
import Newsletter from '../Assets/Images/Newsletter.png';

const Footer = () => {
  return (
    <div className='footer_wrapper'>
      <Container>
         <Row>
            <div className='newsLetter_outer'>
              <div className='subscription_area'>
                <h2>Subscribe Newsletter</h2>
                <h5>The Travel</h5>
                <p>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
                <div className='newsletter_input'>
                  <input type='email' placeholder='Your email address'></input>
                  <button>Subscribe</button>
                </div>
              </div>
              <img className='newsletter_img' src={Newsletter}></img>
            </div>
            <div className='col-6 col-md-6 col-lg-2'>
              <div className='footer_logo_container'>
                <img src={Logo} alt="footer_logo"></img>
                <div className='social_icons_outer'>
                  <Link to=''><FacebookIcon /></Link>
                  <Link to=''><InstagramIcon /></Link>
                  <Link to=''><TwitterIcon /></Link>
                  <Link to=''><YouTubeIcon /></Link>

                </div>
              </div>
            </div>
            <div className='col-6 col-md-6 col-lg-2'>
              <div className='footer_links_list'>
                <h3>Our Destinations</h3>
                <ul className='footer_links_ul'>
                  <li><Link>Canada</Link></li>
                  <li><Link>America</Link></li>
                  <li><Link>Pakistan</Link></li>
                  <li><Link>Aferica</Link></li>

                </ul>
              </div>
            </div>
            
            <div className='col-6 col-md-6 col-lg-2'>
            <div className='footer_links_list'>
                <h3>Our Activites</h3>
                <ul className='footer_links_ul'>
                  <li><Link>Northern Lights</Link></li>
                  <li><Link>Cruising & Saling</Link></li>
                  <li><Link>Multi-Activities</Link></li>
                  <li><Link>Kaying</Link></li>

                </ul>
              </div>
            </div>
            <div className='col-6 col-md-6 col-lg-2'>
            <div className='footer_links_list'>
                <h3>Travel Blogs</h3>
                <ul className='footer_links_ul'>
                  <li><Link>Bali Travel Guide</Link></li>
                  <li><Link>Sri lanka Travel Guide</Link></li>
                  <li><Link>Peru Travel Guide</Link></li>
                  <li><Link>Bali Travel Guide</Link></li>

                </ul>
              </div>
            </div>
            <div className='col-6 col-md-6 col-lg-2'>
            <div className='footer_links_list'>
                <h3>About us</h3>
                <ul className='footer_links_ul'>
                  <li><Link>Our Story</Link></li>
                  <li><Link>Work With us</Link></li>
                 

                </ul>
              </div>
            </div>
            <div className='col-6 col-md-6 col-lg-2'>
            <div className='footer_links_list'>
                <h3>Contact us</h3>
                <ul className='footer_links_ul'>
                  <li><Link>Our Story</Link></li>
                  <li><Link>Work With us</Link></li>
                 

                </ul>
              </div>
            </div>

         </Row>
      </Container>
    </div>
  )
}

export default Footer