import { Carousel } from "react-bootstrap";
function Footer() {
  return (
    <>
      <div
        style={{ backgroundColor: "#3a3f42", color: "white" }}
        className="row justify-content-center">
        <div
          className="col-sm-12 col-md-6"
          style={{ paddingTop: "4%", paddingLeft: "3%" }}>
          <h4>PayBill</h4>
          <p>
            Online face-to-face mock interviews with experts help you train
            &amp; prepare for job interviews in a no pressure, stress-free
            environment simulating a real job interview. Stay ahead of the
            competition with expert mentoring &amp; feedback!
          </p>
          <div className="row">
            <div className="col">
              <h5>
                <i
                  className="fa-solid fa-phone-volume"
                  style={{ color: "#f8f80d" }}
                />
                Call Us
              </h5>
              <p>+91 966565 0861</p>
            </div>
            <div className="col">
              <h5>
                <i
                  className="fa-sharp fa-solid fa-envelope"
                  style={{ color: "#1264f3" }}
                />
                Email Us
              </h5>
              <p>ask@PayBill.in</p>
            </div>
          </div>
          <div>
            <ul className="d-flex" style={{ listStyleType: "none" }}>
              <li style={{ paddingRight: "3%" }}>
                <a href>
                  <i className="fa-brands fa-facebook fa-xl" />
                </a>
              </li>
              <li style={{ paddingRight: "3%" }}>
                <a href>
                  <i className="fa-brands fa-twitter fa-xl" />
                </a>
              </li>
              <li style={{ paddingRight: "3%" }}>
                <a href>
                  <i
                    className="fa-brands fa-square-instagram fa-xl"
                    style={{ color: "#ed2c7f" }}
                  />
                </a>
              </li>
              <li style={{ paddingRight: "3%" }}>
                <a href>
                  <i
                    className="fa-brands fa-youtube fa-xl"
                    style={{ color: "#f50529" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6"
          style={{ paddingTop: "4%", paddingLeft: "2%" }}>
          <h4>INTERVIEW TIPS IN YOUR INBOX</h4>
          <p>
            Handcrafted &amp; curated material for every stage of career
            grooming &amp; industry insights, delivered to your inbox once a
            month. No spam. Period.
          </p>
          <form action="subscribesuccess.html" onsubmit="return validate1()">
            <input
              type="email"
              defaultValue
              placeholder="Email"
              style={{ width: "40%" }}
              id="subemail"
              value={" "}
            />
            <label id="emptysubemail" style={{ color: "red", display: "none" }}>
              *Empty Space not allowed
            </label>
            <label
              id="invalidsubemail"
              style={{ color: "red", display: "none" }}>
              *Email address is invalid.
            </label>
            <div style={{ marginTop: "2%" }}></div>
          </form>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "black",
          color: "white",
          paddingRight: "10%",
          textAlign: "center",
          padding: "1%",
        }}>
        <h5 style={{ fontSize: "large" }}>
          Copyright
          <i
            className="fa-sharp fa-regular fa-copyright fa-xl"
            style={{ color: "#f9fafa" }}
          />
          2023 All Rights Reserved | Privacy Policy
        </h5>
      </div>
    </>
  );
}

export default Footer;
