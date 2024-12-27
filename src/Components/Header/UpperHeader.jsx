import React from 'react'

function UpperHeader() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand brand-logo" href="#">
             <img src="https://media.licdn.com/dms/image/D4E16AQHC1Ycu6hpqCQ/profile-displaybackgroundimage-shrink_200_800/0/1708668997140?e=2147483647&v=beta&t=rNXjzJC8GtAgsaY9wHCjgBzRP4rE_qtAqhCXSC1nEhQ" alt="" />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {/* <li className="nav-item active">
                        <a className="nav-link" href="#">
                            Home
                        </a>
                    </li> */}
                    <li className="nav-item d-flex login-signup-btn">
                        <a className="nav-link signup-btn" href="#">
                            Signup
                        </a>

                        <a className="nav-link login-btn" href="#">
                            Login
                        </a>
                    </li>

                </ul>

            </div>
        </nav>


    )
}

export default UpperHeader