import Dhananjay_028 from "../images/Dhananjay_028.jpg";
import omkar from "../images/omkar.jpeg";
import shankar from "../images/shankar.jpeg";

function Contactus() {
  return (
    <div>
      <div style={{ paddingTop: "8%" }} className="container">
        <h2
          style={{
            textAlign: "center",
            fontSize: 30,
            fontFamily: "initial",
            fontWeight: "bold",
            color: "red",
          }}>
          -: OUR TEAM :-
        </h2>
        <div
          className="row display-flex justify-content:center"
          style={{ paddingTop: "4%" }}>
          <div className="col-md-4 col-sm-12" style={{ textAlign: "center" }}>
            <img
              className="rounded-circle"
              src={omkar}
              alt="  Error loading image"
              width={160}
              height={160}
              style={{ marginBottom: 25, borderColor: "grey" }}
            />
            <h3 style={{ color: "blue" }}>Omkar sutar </h3>
            <p>CDAC-Mumbai</p>
            <p>
              <b>Email-</b>omkarsutar123@gmail.com
            </p>
          </div>
          <div className="col-md-4 col-sm-12" style={{ textAlign: "center" }}>
            <img
              className="rounded-circle"
              src={Dhananjay_028}
              alt="error loading  image"
              width={160}
              height={160}
              style={{ marginBottom: 25 }}
            />
            <h3 style={{ color: "blue" }}>Dhananjay Bhagwat </h3>
            <p>CDAC-Mumbai</p>
            <p>
              <b>Email-</b>dhananjaybhagwat@gmail.com
            </p>
          </div>
          <div className="col-md-4 col-sm-12" style={{ textAlign: "center" }}>
            <img
              className="rounded-circle"
              src={shankar}
              alt=" error loading image"
              width={160}
              height={160}
              style={{ marginBottom: 25 }}
            />
            <h3 style={{ color: "blue" }}>Shankar Khillare </h3>
            <p>CDAC-Mumbai</p>
            <p>
              <b>Email-</b>shankarkhillare123@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="col" style={{ margin:"10px",
        justifyContent:"center"
      }}>
        <section>
          <ul>
            <section>
              <h2 style={{ color:"red"}}>Contact Us</h2>
              <p>
                <strong>
                  If you have any questions or feedback, we'd love to hear from
                  you. Please don't hesitate to reach out to our friendly
                  support team.
                </strong>
              </p>
              <p>Phone: 0084-456-2128</p>
              <p>Email: info@Billpay.com</p>
            </section>
          </ul>
        </section>
      </div>
    </div>
  );
}
export default Contactus;
