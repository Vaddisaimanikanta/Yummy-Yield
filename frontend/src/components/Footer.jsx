import React from 'react';
import '../Styles/Footer.css';
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>YummyYield</h3>
                    <p>We deliver the freshest, most delicious food to your doorstep. From breakfast to dinner, we ensure you enjoy every meal.</p>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p><strong>Email:</strong> support@yummyyield.com</p>
                    <p><strong>Phone:</strong> +91-912-456-7890</p>
                    <p><strong>Address:</strong> 123 Foodie Street, Gourmet City</p>
                </div>
                <div className="footer-section follow">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} YummyYield. All rights reserved.</p>
            </div>
        </footer>
    );
}
