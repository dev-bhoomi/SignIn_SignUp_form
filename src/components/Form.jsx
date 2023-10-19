// import { Person, Lock } from "@material-ui/icons"
// import { useState } from "react";
// import { AiFillGoogleCircle, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
// import { BiLogoFacebookCircle } from "react-icons/bi";
// import { BsFillEnvelopeFill } from "react-icons/bs";

// export default function Form() {

//     const [isSignUp, setIsSignUp] = useState(false);

//     const handleFormSwitch = () => {
//         setIsSignUp(!isSignUp);
//     };

//     return (
//         <>
//         <div className="container-fluid">
//             <div className="forms-container">
//                 <div className={`signin-signup ${isSignUp ? 'sign-up-mode' : ''}`}>
//                     {/* Sign-in Form */}
//                     <form action="" className="sign-in-form">
//                         <h2 className="title">Sign in</h2>
//                         <div className="input-field">
//                             <Person className="i" />
//                             <input type="text" placeholder="Username" />
//                         </div>
//                         <div className="input-field">
//                             <Lock className="i" />
//                             <input type="password" placeholder="Password" />
//                         </div>
//                         <input type="submit" value="Login" className="btn solid" />
//                         <p className="social-text">Or Sign in with social platforms</p>
//                         <div className="social-media">
//                             <a href="#" className="social-icon">
//                                 <BiLogoFacebookCircle />
//                             </a>
//                             <a href="#" className="social-icon">
//                                 <AiFillTwitterCircle />
//                             </a>
//                             <a href="#" className="social-icon">
//                                 <AiFillGoogleCircle />
//                             </a>
//                             <a href="#" className="social-icon">
//                                 <AiFillInstagram />
//                             </a>
//                         </div>
//                     </form>

//                     {/* Sign-up Form */}
//                     <form action="" className="sign-up-form">
//                         <h2 className="title">Sign Up</h2>
//                         <div className="input-field">
//                             <Person className="i" />
//                             <input type="text" placeholder="Username" />
//                         </div>
//                         <div className="input-field">
//                             <BsFillEnvelopeFill className="i" />
//                             <input type="text" placeholder="Email" />
//                         </div>
//                         <div className="input-field">
//                             <Lock className="i" />
//                             <input type="password" placeholder="Password" />
//                         </div>
//                         <input type="submit" value="Sign up" className="btn solid" />
//                         <p className="social-text">Or Sign in with social platforms</p>
//                         <div className="social-media">
//                             <a href="#" className="social-icon">
//                                 <BiLogoFacebookCircle />
//                             </a>
//                             <a href="#" className="social-icon">
//                                 <AiFillTwitterCircle />
//                             </a>
//                             <a href="#" className="social-icon">
//                                 <AiFillGoogleCircle />
//                             </a>
//                             <a href="#" className="social-icon">
//                                 <AiFillInstagram />
//                             </a>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//                 <div className="panels-container">
//                     <div className="panel left-panel">
//                         <div className="content">
//                             <h3>New here ?</h3>
//                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ex dicta deserunt ratione nemo voluptatem dolorem praesentium odio! Soluta laborum nemo deleniti atque eveniet temporibus fugit, illum maxime aliquid sapiente?</p>
//                             <button className="btn transparent" 
//                             onClick={handleFormSwitch}
//                             id={isSignUp ? "sign-in-btn" : "sign-up-btn"}
//                                >
//                                 Sign up
//                                 </button>
//                         </div>
//                         <img src="img/log.svg" alt="" className="image" />
//                     </div>
//                     <div className="panel right-panel">
//                         <div className="content">
//                             <h3>One of us ?</h3>
//                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ex dicta deserunt ratione nemo voluptatem dolorem praesentium odio! Soluta laborum nemo deleniti atque eveniet temporibus fugit, illum maxime aliquid sapiente?</p>
//                             <button className="btn transparent" id="sign-in-btn">Sign up</button>
//                         </div>
//                         <img src="img/register.svg" alt="" className="image" />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }









// import React, { useState } from 'react';
// import { Person, Lock } from "@material-ui/icons";
// import { AiFillGoogleCircle, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
// import { BiLogoFacebookCircle } from "react-icons/bi";
// import { BsFillEnvelopeFill } from "react-icons/bs";

// export default function Form() {
//     const [isSignUp, setIsSignUp] = useState(false);

//     const handleFormSwitch = () => {
//         setIsSignUp(!isSignUp);
//     };

//     return (
//         <div className={`container-fluid ${isSignUp ? 'sign-up-mode' : ''}`}>
//             <div className="forms-container">
//                 <div className="signin-signup">
//                     <form action="" className={`sign-in-form ${isSignUp ? 'hidden' : ''}`}>
//                         <h2 className="title">Sign in</h2>
//                         <div className="input-field">
//                             <Person className="i" />
//                             <input type="text" placeholder="Username" />
//                         </div>
//                         <div className="input-field">
//                             <Lock className="i" />
//                             <input type="password" placeholder="Password" />
//                         </div>
//                         <input type="submit" value="Login" className="btn solid" />
//                         <p className="social-text">Or Sign in with social platforms</p>
//                         <div className="social-media">
//                             <a href="#" className="social-icon">
//                                 <BiLogoFacebookCircle />
//                             </a>
//                             <a href="#" className="social-icon">
//                                 <AiFillTwitterCircle />
//                             </a>
//                             <a href="#" className="social-icon">
//                                 <AiFillGoogleCircle />
//                             </a>
//                             <a href="#" className="social-icon">
//                                 <AiFillInstagram />
//                             </a>
//                         </div>
//                     </form>

//                     <form action="" className={`sign-up-form ${isSignUp ? '' : 'hidden'}`}>
//                         <h2 className="title">Sign Up</h2>
//                         <div className="input-field">
//                             <Person className="i" />
//                             <input type="text" placeholder="Username" />
//                         </div>
//                         <div className="input-field">
//                             <BsFillEnvelopeFill className="i" />
//                             <input type="text" placeholder="Email" />
//                         </div>
//                         <div className="input-field">
//                             <Lock className="i" />
//                             <input type="password" placeholder="Password" />
//                         </div>
//                         <input type="submit" value="Sign up" className="btn solid" />
//                         <p className="social-text">Or Sign in with social platforms</p>
//                         <div className="social-media">
//                             <a href="#" className="social-icon">
//                                 <BiLogoFacebookCircle />
//                             </a>
//                             <a href="#" className="social-icon">
//                                 <AiFillTwitterCircle />
//                             </a>
//                             <a href="#" className="social-icon">
//                                 <AiFillGoogleCircle />
//                             </a>
//                             <a href="#" className="social-icon">
//                                 <AiFillInstagram />
//                             </a>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <div className="panels-container">
//                 <div className="panel left-panel">
//                     <div className="content">
//                         <h3>New here ?</h3>
//                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ex dicta deserunt ratione nemo voluptatem dolorem praesentium odio! Soluta laborum nemo deleniti atque eveniet temporibus fugit, illum maxime aliquid sapiente?</p>
//                         <button
//                             className="btn transparent"
//                             onClick={handleFormSwitch}
//                         >
//                             {isSignUp ? "Sign in" : "Sign up"}
//                         </button>
//                     </div>
//                     <img src="img/log.svg" alt="" className="image" />
//                 </div>
//                 <div className="panel right-panel">
//                     <div className="content">
//                         <h3>One of us ?</h3>
//                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ex dicta deserunt ratione nemo voluptatem dolorem praesentium odio! Soluta laborum nemo deleniti atque eveniet temporibus fugit, illum maxime aliquid sapiente?</p>
//                         <button className="btn transparent" onClick={handleFormSwitch}>Sign up</button>
//                     </div>
//                     <img src="img/register.svg" alt="" className="image" />
//                 </div>
//             </div>
//         </div>
//     );
// }









import { Person, Lock } from "@material-ui/icons"
import { useState } from "react";
import { AiFillGoogleCircle, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsFillEnvelopeFill } from "react-icons/bs";

export default function Form() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [isSignIn, setIsSignIn] = useState(false);
    const handleFormSwitch = () => {
        setIsSignUp(!isSignUp);
        setIsSignIn(!isSignIn)
    };
    return (
        <>
            <div className={`container-fluid ${isSignUp ? 'sign-up-mode' : ''}`}>
                <div className="forms-container">
                    <div className="signin-signup">

                        <form action="" className="sign-in-form">
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <Person className="i" />
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <Lock className="i" />
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" value="Login" className=" btn solid" />
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <BiLogoFacebookCircle />
                                </a>
                                <a href="#" className="social-icon">
                                    <AiFillTwitterCircle />
                                </a>
                                <a href="#" className="social-icon">
                                    <AiFillGoogleCircle />
                                </a>
                                <a href="#" className="social-icon">
                                    <AiFillInstagram />
                                </a>
                            </div>
                        </form>

                        <form action="" className="sign-up-form">
                            <h2 className="title">Sign Up</h2>
                            <div className="input-field">
                                <Person className="i" />
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <BsFillEnvelopeFill className="i" />
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <Lock className="i" />
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" value="Sign up" className=" btn solid" />
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <BiLogoFacebookCircle />
                                </a>
                                <a href="#" className="social-icon">
                                    <AiFillTwitterCircle />
                                </a>
                                <a href="#" className="social-icon">
                                    <AiFillGoogleCircle />
                                </a>
                                <a href="#" className="social-icon">
                                    <AiFillInstagram />
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ex dicta deserunt ratione nemo voluptatem dolorem praesentium odio! Soluta laborum nemo deleniti atque eveniet temporibus fugit, illum maxime aliquid sapiente?</p>
                            <button className="btn transparent"
                                onClick={handleFormSwitch}
                            >
                                Sign up
                            </button>
                        </div>
                        <img src="img/log.svg" alt="" className="image" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ex dicta deserunt ratione nemo voluptatem dolorem praesentium odio! Soluta laborum nemo deleniti atque eveniet temporibus fugit, illum maxime aliquid sapiente?</p>
                            <button className="btn transparent" 
                          onClick={handleFormSwitch}
                          >Sign In</button>
                        </div>
                        <img src="img/register.svg" alt="" className="image" />
                    </div>
                </div>
            </div>
        </>
    )
}

