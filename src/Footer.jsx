import React from "react";

class Footer extends React.Component {
    render() {  
        return(
            <footer className="position-absolute bottom-0 w-100">

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-4">
                        <div className="w-100">
                            <a className="navbarlogo" href="#">Navbar</a>
                        </div>
                    </div>

                    <div className="col-5">
                        <div className="w-100 d-flex justify-content-between">
                            <a className="footer-links" href="#">Home</a>
                            <a className="footer-links" href="#">Link</a>
                            <a className="footer-links" href="#">Link 2</a>
                            <a className="footer-links" href="#">Link 3</a>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="w-100 borderSet">
                            <a className="socmedia" href="#">Facebook</a>
                            <a className="socmedia ms-2" href="#">Instagram</a>
                            <a className="socmedia ms-2" href="#">Youtube</a>
                            <a className="socmedia ms-2" href="#">Twitter</a>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="hrline"/>
            <div className="w-100">
                <p className="copyright">© - By Avtandil Saginashvili</p>
            </div>

            </footer>
        )
    }
}

export default Footer;