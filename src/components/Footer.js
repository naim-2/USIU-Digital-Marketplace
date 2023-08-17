import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <div>
        <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="https://cx.usiu.ac.ke/ics">Portal</a></li>
                                <li><a href="https://blackboard.usiu.ac.ke/">Blackboard</a></li>
                                <li><a href="https://cx.usiu.ac.ke/ICS/Admissions/">Admissions</a></li>
                                <li><a href="https://cx.usiu.ac.ke/ICS/REGISTRAR/">Registrar</a></li>
                                <li><a href="https://cx.usiu.ac.ke/ICS/Alumni/">Alumni</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>About Us</h3>
                            <ul>
                                <li><a href="https://www.usiu.ac.ke/" target="_blank">USIU-Africa</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3>USIU-Africa</h3>
                            <p>USIU is a diverse academic institution that hosts students from 130 countries and has wide range of research partnerships with leading institutions across the world.</p>
                        </div>
                        <div class="col item social">
                            <a href="https://www.facebook.com/USIUAFRICA/" target="_blank"><i class="icon ion-social-facebook"></i></a>
                            <a href="https://twitter.com/ExperienceUSIU" target="_blank"><i class="icon ion-social-twitter"></i></a>
                            <a href="https://www.youtube.com/channel/UC9FfQmnxT71HqR6naR9NjxQ" target="_blank"><i class="icon ion-social-youtube"></i></a>
                            <a href="https://instagram.com/usiuafrica" target="_blank"><i class="icon ion-social-instagram"></i></a>
                        </div>
                    </div>
                    <p class="copyright">USIU-Africa © 2023</p>
                </div>
            </footer>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default Footer;