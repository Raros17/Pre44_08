import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterContainer">
        <div className="FooterLogo">
          <img
            src="https://user-images.githubusercontent.com/22885068/88129765-814e3100-cbf6-11ea-9e18-e1b5144cfbcb.png"
            alt="로고 이미지"
          />
        </div>
        <nav className="FooterNav">
          <div>
            <h5>STACK OVERFLOW</h5>
            <ul>
              <li>Questions</li>
              <li>Help</li>
            </ul>
          </div>
          <div>
            <h5>PRODUCTS</h5>
            <ul>
              <li>Teams</li>
              <li>Advertising</li>
              <li>Collectives</li>
              <li>Talent</li>
            </ul>
          </div>
          <div>
            <h5>COMPANY</h5>
            <ul>
              <li>About</li>
              <li>Press</li>
              <li>Work Here</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact Us</li>
              <li>Coookie Settings</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div>
            <h5>STACK EXCHANGE NETWORK</h5>
            <ul>
              <li>Technology</li>
              <li>Culture & recreation</li>
              <li>Life & arts</li>
              <li>Science</li>
              <li>Professional</li>
              <li>Business</li>
              <li>API</li>
              <li>Data</li>
            </ul>
          </div>
        </nav>
        <div className="FooterApp">
          <ul>
            <li>Blog</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
          <p>
            Site design / logo @ 2023 Stack Exchange Inc, user conrtibutions
            <br></br>licensed under CC BY-SA, rev 2023.6.16.43501
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
