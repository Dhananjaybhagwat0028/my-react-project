import { Carousel } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        /* footer /\n\n.footer{\n  background: var(--bg);  text-align: center;\n}\n\n.footer .box-container{\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\n  gap: 2rem;\n}\n\n.footer .box-container .box h3{\n  font-size: 2.2rem;\n  text-transform: capitalize;\n  color: var(--primary-color);\n  padding: 1rem 0;\n}\n\n.footer .box-container .box p{\n  font-size: 1.5rem;\n  line-height: 2;\n  color: var(--black);\n  padding: 1rem 0;\n}\n\n.footer .box-container .box .share{\n  margin-top: 1rem;\n}\n\n.footer .box-container .box .share a{\n  height: 4.5rem;\n  width: 4.5rem;\n  line-height: 4.5rem;\n  border-radius: 10%;\n  font-size: 1.7rem;\n  background: var(--primary-color);\n  color: var(--white);\n  margin-right: .3rem;\n  text-align: center;\n}\n\n.footer .box-container .box .share a:hover{\n  background: var(--secondary);\n}\n\n.footer .box-container .box .link{\n  font-size: 1.7rem;\n  line-height: 2;\n  color: var(--primary-color);\n  padding: .5rem 0;\n  display: block;\n}\n\n.footer .box-container .box .link:hover{\n  color: var(--secondary);\n}\n\n.footer .credit{\n  text-align: center;\n  margin-top: 3rem;\n  padding-top: 3rem;\n  font-size: 2rem;\n  text-transform: capitalize;\n  color: var(--primary-color);\n  border-top: .1rem solid var(--black);\n}\n\n.footer .credit span{\n  color: var(--secondary);\n}\n\n:root{\n  --primary-color: #3bb77e;\n  --secondary :#ffba43;\n  --bg: #e2f9ee;\n  --black: #1c2137;\n  --white: #fff;\n  --box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.1);\n}\n\n{\n  font-family: 'Roboto', sans-serif;\n  margin: 0; padding: 0;\n  box-sizing: border-box;\n  outline: none; border: none;\n  text-transform: capitalize;\n  text-decoration: none;\n  transition: .2s linear;\n}\n\nhtml{\n  font-size: 62.5%;\n  overflow-x: hidden;\n  scroll-padding-top: 9rem;\n  scroll-behavior: smooth;\n}\n\nhtml::-webkit-scrollbar{\n  width: .8rem;\n}\n\nhtml::-webkit-scrollbar-track{\n  background: transparent;\n}\n\nhtml::-webkit-scrollbar-thumb{\n  background: var(--primary-color);\n  border-radius: 5rem;\n}\n    ",
          }}
        />
        {/* footer */}
        <section className="footer">
          <div className="box-container">
            <div className="box">
              <h3>find us here</h3>
              <p>
                Paybill is one of the global platform <br />
                that aims a wide range of customer chain support .{" "}
              </p>
              <div className="share">
                <a
                  href="https://www.facebook.com/Rmart20bd/"
                  className="fab fa-facebook-f"
                />
                <a
                  href="https://twitter.com/RMARTOFFICIAL"
                  className="fab fa-twitter"
                />
                <a
                  href="https://www.instagram.com/rmartgroceries/?hl=en"
                  className="fab fa-instagram"
                />
                <a
                  href="https://www.linkedin.com/in/r-mart-b2b-commodities-pvt-ltd-b43196233/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in"
                  className="fab fa-linkedin"
                />
              </div>
            </div>
            <div className="box">
              <h3>contact us.</h3>
              <p>
                {" "}
                <a href>+91 9665670861</a> <br />
                <a href>+91 9665670861</a> <br />
                <a href>+91 9665670861</a>
              </p>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                className="link">
                <r- />
                paybill@gmail.com
              </a>
            </div>
            <div className="box">
              <h3>Main office </h3>
              <p>
                mcleren tower
                <br />
                Opp.to j w marriott
                <br />
                south bombay, mumbai, Maharashtra 400201
              </p>
            </div>
          </div>
          <div className="credit">
            Copyright c 2023 <span> PayBill All rights reserved.</span>{" "}
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
