import React from 'react';
import '../Styles/About.css'; 

export default function AboutUs() {
    return (
        <section className="about-us-section" id='about'>
            <div className="about-us-container">
                <h2 className="about-us-title">About YummyYield</h2>
                <p className="about-us-text">
                    At <strong>YummyYield</strong>, we believe that good food brings people together. Our mission is to make delicious, high-quality meals accessible and convenient for everyone. Whether you're craving a comforting meal after a long day, looking for a quick and healthy lunch option, or celebrating with loved ones, YummyYield has something for every occasion.
                </p>

                <h3 className="commitment-title">Our Commitment to Quality</h3>
                <p className="commitment-text">
                    At YummyYield, quality is our top priority. Our partner restaurants are carefully selected for their commitment to delivering exceptional food. Every meal is prepared with care, and our chefs focus on creating dishes that are both flavorful and nutritious. From sourcing sustainable ingredients to ensuring hygienic preparation practices, we leave no stone unturned in bringing you the best food experience.
                </p>

                <h3 className="satisfaction-title">Satisfy Your Cravings with YummyYield</h3>
                <p className="satisfaction-text">
                    YummyYield is your go-to app for a hassle-free food ordering experience. Whether you're dining solo, with family, or with friends, we’ve got something to suit every mood and occasion. Download our app, explore the menu, and order your favorites today!
                </p>
            </div>
        </section>
    );
}
