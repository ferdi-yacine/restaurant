import React from "react";
import "./aboutUs.css";
import { Navbar } from "../../components/navbar/Navbar";
import mainpizza from "../../public/img/mainpizza.jpg";
import {
  CakeOutlined,
  LocalCafe,
  Restaurant,
  RocketLaunch,
} from "@mui/icons-material";
import { Footer } from "../../components/footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="aboutSection">
        <div className="aboutContainer">
          <div className="main">
            <div className="main__content">
              <h1 className="main__content-title">
                Delicious & Crispy <b>Recipes</b>
              </h1>
              <p className="main__content-desc">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.print, and publishing industries for previewing
                layouts and visual mockups.
              </p>
              <div className="main__content-buttons">
                <button className="readmore">Read More</button>
                <button className="contactus">Contact Us</button>
              </div>
              <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
            <div className="main__image-container">
              <img className="main__image" src="" alt="main pizza" />
            </div>
          </div>
          <div className="second">
            <h1 className="about-title">About Us</h1>
            <div className="second__container">
              <div className="second__content">
                <h2 className="second__content-title">
                  Enjoy The Greatest Pleasure In Our Restaurant!
                </h2>
                <p className="second__content-desc">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.print, and publishing industries for previewing
                  layouts and visual mockups.Lorem ipsum is placeholder text
                  commonly used in the graphic, print.
                </p>
                <div className="second__content-icons">
                  <div className="second__content-icon">
                    <div className="second__content-icon-container">
                      <CakeOutlined
                        sx={{ fontSize: 40, color: "white", cursor: "pointer" }}
                      />
                    </div>
                    <span className="second__content-icon-desc">healthy</span>
                  </div>
                  <div className="second__content-icon">
                    <div className="second__content-icon-container">
                      <RocketLaunch
                        sx={{ fontSize: 40, color: "white", cursor: "pointer" }}
                      />
                    </div>
                    <span className="second__content-icon-desc">
                      spicy & hot
                    </span>
                  </div>
                  <div className="second__content-icon">
                    <div className="second__content-icon-container">
                      <Restaurant
                        sx={{ fontSize: 40, color: "white", cursor: "pointer" }}
                      />
                    </div>
                    <span className="second__content-icon-desc">crunchy</span>
                  </div>
                  <div className="second__content-icon">
                    <div className="second__content-icon-container">
                      <LocalCafe
                        sx={{ fontSize: 40, color: "white", cursor: "pointer" }}
                      />
                    </div>
                    <span className="second__content-icon-desc">reciepe</span>
                  </div>
                </div>
              </div>
              <div className="second__image-container"></div>
            </div>
            <div className="second__container">
              <div className="second__image-container"></div>
              <div className="second__content">
                <h2 className="second__content-title">
                  A Tasty And Healthy Pizza That We Serve For You.
                </h2>
                <p className="second__content-desc">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.print, and publishing industries for previewing
                </p>
                <p className="second__content-desc">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                </p>
              </div>
            </div>
          </div>
          <div className="testimonials">
            <h1 className="about-title">Testimonials</h1>
            <div className="testimonials__container">
              <div className="testimonial">
                <div className="testimonial-content">
                  <p>
                    &ldquo; I absolutely love this pizza restaurant! The pizza is always fresh and delicious. The crust is perfectly crispy and the toppings are always flavorful.
                  </p>
                </div>
                <div className="testimonial-profile">
                  <div className="testimonial-profile-picture">
                    <img
                      src="https://scontent.fczl2-2.fna.fbcdn.net/v/t39.30808-6/289156986_762951018051237_2093815019993158164_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHbpZpYciuhpLufCar-OwOBYM1RRyL4b-5gzVFHIvhv7rjoK1RYO_P76niZeO7ht63Jm17buGkOXJOJn-3VHWRD&_nc_ohc=WknyLC5wCS0AX_oXMZU&_nc_ht=scontent.fczl2-2.fna&oh=00_AfAck3m2c4LvzvlUEjlDFoNEDSuFJITM5HpcghmtUyNZ7g&oe=64644822"
                      alt="Yahia Tlb"
                    />
                  </div>
                  <div className="testimonial-profile-user">
                    <h3 className="testimonial-profile-user-username">
                      Yahia Tlb
                    </h3>
                    <span className="testimonial-profile-user-date">
                      -January 05, 2023
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="testimonial-content">
                  <p>
                    &ldquo; The pizza at this restaurant is seriously amazing. The quality of the ingredients is top-notch, and you can tell that everything is made with care. 
                  </p>
                </div>
                <div className="testimonial-profile">
                  <div className="testimonial-profile-picture">
                    <img
                      src="https://scontent.fczl2-2.fna.fbcdn.net/v/t39.30808-6/331302667_5117531448350394_1300977752217926753_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFyyVdumVviZb8xrv-yynFeZ5QnQzkFwPhnlCdDOQXA-EpVkt-JTYf5C7Onlz8BWmpPt96QoytPibBvZTarOYS4&_nc_ohc=FtsEK5abKVkAX-lhXei&_nc_ht=scontent.fczl2-2.fna&oh=00_AfBvArVGbzgRD73gZPCMvHVXyRhkqwpvMCYFliGGCefdIg&oe=64639C01"
                      alt="Aimene Mhd"
                    />
                  </div>
                  <div className="testimonial-profile-user">
                    <h3 className="testimonial-profile-user-username">
                      Aimene Mhd
                    </h3>
                    <span className="testimonial-profile-user-date">
                      -March 23, 2023
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="testimonial-content">
                  <p>
                    &ldquo; I recently tried this pizza restaurant for the first time and was blown away. The pizza was so delicious that I immediately ordered a second one.
                  </p>
                </div>
                <div className="testimonial-profile">
                  <div className="testimonial-profile-picture">
                    <img
                      src="https://scontent.fczl2-1.fna.fbcdn.net/v/t1.6435-9/207495947_1168461626989332_4469978287462961474_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFBJc7jxT8rqjak2UOnpXn2B1eH6-5sg0kHV4fr7myDSdulZ7goGehb0OB4-SxnZmZxXv7l6MRzAZHjjXGFcKRG&_nc_ohc=FCBAHdfIowsAX-ZYVah&_nc_ht=scontent.fczl2-1.fna&oh=00_AfAnzq_vHgjqzr-PEOQaY45i729Rtx-zRVf_dJHQlFksRw&oe=64863441"
                      alt="Yacine Frd"
                    />
                  </div>
                  <div className="testimonial-profile-user">
                    <h3 className="testimonial-profile-user-username">
                      Yacine Frd
                    </h3>
                    <span className="testimonial-profile-user-date">
                      -April 29, 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
