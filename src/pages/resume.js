import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { Grid, GridItem, Text } from '@chakra-ui/react'
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import intl from 'react-intl-universal';
import EN from '../language/EN.json';
import CH from '../language/CH.json';

//css

import '../components/page1.css'
import '../components/page2.css'
import '../components/page3.css'
import '../components/page4.css'
import '../components/page5.css'
import '../components/page6.css'

//slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//SVG、IMG、MP4、WEBM
import skylogo from '../images/skylogo.png';
import education1 from '../images/education1.png';
import education2 from '../images/circle_web2ToWeb3.7005e51f02c9567152f67fad8c71cf87.png';
import education3 from '../images/corner.ea0282e4b9fede9ef0c75c727e391b9f.svg';
import web3 from '../images/nft.209c8c759d77da40806b.gif';
import video from '../images/waferZ.bf7759f9bc7b42306d79.mp4';
import video_jpg from '../images/waferZ.003eba1ae736e79d5e50.jpg';
import roboat from '../images/roboat.png';
import codeMp4 from '../images/service.e7f614dd016d6eec8cb3.gif';
import codeimg from '../images/zinstitute.fcde5b683f257af192b7.gif';
import eth from '../images/ethereum.9337f8b2d0b3d9253d60987fefb14608.svg';
import ethtext from '../images/ethtest.png';
import downWebm from '../images/education.ddd6aff58f188f9d70d7.gif';
import downRightGif from '../images/AbilitiesTest2.gif';
import downRightStyle from '../images/arrowGroup.a854994e6e9f3fb9f9c05ecfcf3b2ea5.svg';
import mugShot from '../images/MugShot.png';
import sideProject1 from '../images/SideProject1.png';
import sideProject2 from '../images/SideProject2.png';
import sideProject3 from '../images/SideProject3.png';
import sideProject4 from '../images/SideProject4.png';
import sideProject5 from '../images/SideProject5.png';
import sideProject6 from '../images/SideProject6.png';
import sideProject7 from '../images/SideProject7.png';
import Doublehand from '../images/Doublehand.png';


function Resume() {
    const [showResults, setShowResults] = useState(false);
    const openHamburger = () => showResults == false ? setShowResults(true) : setShowResults(false);
    const Results = () => (
        <div className="css-15po4rs" style={{ backdropFilter: `blur(14px)` }}>
            <Link className="chakra-link css-v9r38k" to="#home" onClick={openHamburger}>HOME</Link>
            <Link className="chakra-link css-v9r38k" to="#about" onClick={openHamburger}>ABOUT</Link>
            <Link className="chakra-link css-v9r38k" to="#experience" onClick={openHamburger}>EXPERIENCE</Link>
            <Link className="chakra-link css-v9r38k" to="#project" onClick={openHamburger}>PROJECT</Link>
            <Link className="chakra-link css-v9r38k" to="#sideproject" onClick={openHamburger}>SIDE PROJECT</Link>
            <Link className="chakra-link css-v9r38k" to="#contact" onClick={openHamburger}>CONTACT</Link>
        </div>
    )
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    useEffect(() => {
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop);
            setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);
    useEffect(() => {
        var top = document.querySelector('.css-iybxr5');
        if (scrolling) {
            top.style.opacity = "0";
            top.style.transform = "translateY(-80px) translateZ(0px)"
        } else {
            top.style.opacity = "1";
            top.style.transform = "translateY(0px) translateZ(0px)"
        }
    });
    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'none' }}
                onClick={onClick}
            />
        );
    }
    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'none' }}
                onClick={onClick}
            />
        );
    }
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const settings2 = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "20%",
        slidesToShow: 1,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const [showAlert, setshowAlert] = useState(false);
    const AlertStatus_success = () => (
        <Alert status='success' variant='solid'>
            <AlertIcon />
            Email has been successfully sent.
        </Alert>
    )

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_7c7jsdj', 'template_rhg0b3c', form.current, 'XLWydIgVAmQJvL7xC')
            .then((result) => {
                console.log(result.text);
                setshowAlert(true)
            }, (error) => {
                console.log(error.text);
            });
    };

    const locales = {
        "en_US": EN,
        "en_CN": CH,
    };
    const [initDone, setinitDone] = useState(false);
    const [language, setLanguage] = useState('en_CN');

    useEffect(() => {
        if (initDone == false) {
            loadLocales();
            //bug code
            changeLanguage('en_CN');
            changeLanguage('en_US');

        }
    });

    const loadLocales = () => {
        intl.init({
            currentLocale: language, locales
        })
            .then(() => {
                setinitDone(true);
            })
    }

    const changeLanguage = (status) => {
        var tag1 = document.getElementById("changeLanguageTag1");
        var tag2 = document.getElementById("changeLanguageTag2");
        var tag1_1 = document.getElementById("changeLanguageTag1_1");
        var tag1_2 = document.getElementById("changeLanguageTag1_2");
        var tag2_1 = document.getElementById("changeLanguageTag2_1");
        var tag2_2 = document.getElementById("changeLanguageTag2_2");

        if (status === 'en_US') {
            tag1.classList.add("css-1sxrsep");
            tag1.classList.remove("css-1m50zn");
            tag1_1.classList.add("css-1irktzc");
            tag1_1.classList.remove("css-ix2b0u");
            tag1_2.classList.add("css-1irktzc");
            tag1_2.classList.remove("css-ix2b0u");
            tag2.classList.add("css-1m50zn");
            tag2.classList.remove("css-1sxrsep");
            tag2_1.classList.add("css-ix2b0u");
            tag2_1.classList.remove("css-1irktzc");
            tag2_2.classList.add("css-ix2b0u");
            tag2_2.classList.remove("css-1irktzc");
        } else {
            tag2.classList.add("css-1sxrsep");
            tag2.classList.remove("css-1m50zn");
            tag2_1.classList.add("css-1irktzc");
            tag2_1.classList.remove("css-ix2b0u");
            tag2_2.classList.add("css-1irktzc");
            tag2_2.classList.remove("css-ix2b0u");
            tag1.classList.add("css-1m50zn");
            tag1.classList.remove("css-1sxrsep");
            tag1_1.classList.add("css-ix2b0u");
            tag1_1.classList.remove("css-1irktzc");
            tag1_2.classList.add("css-ix2b0u");
            tag1_2.classList.remove("css-1irktzc");
        }
        setLanguage(status);
        loadLocales();
    }

    return (
        <div className='chakra-ui-light'>
            <div id='root'>
                <div className="css-2hw6dr" style={{ opacity: 0 }}>
                    <img src={skylogo} className="chakra-image css-dov9nq" style={{ opacity: 1, width: 200 }} />
                </div>
                <div className='css-1p8qfhk'>
                    <div className="css-iybxr5" style={{ opacity: 1, transform: undefined, transition: `0.5s ease-in ` }}>
                        <div className="css-wm488v" style={{ backdropFilter: `blur(14px)` }}>
                            <Link className="chakra-link css-2n2ro8" to="#home">
                                <img src={skylogo} className="chakra-image css-tcg55f" style={{ marginBottom: 0 }} />
                            </Link>
                        </div>
                        <div className="css-kz2ai8" style={{ backdropFilter: `blur(14px)` }}>
                            <Link className="chakra-link css-v9r38k" to="#home">HOME</Link>
                            <Link className="chakra-link css-v9r38k" to="#about">ABOUT</Link>
                            <Link className="chakra-link css-v9r38k" to="#experience">EXPERIENCE</Link>
                            <Link className="chakra-link css-v9r38k" to="#project">PROJECT</Link>
                            <Link className="chakra-link css-v9r38k" to="#sideproject">SIDE PROJECT</Link>
                            <Link className="chakra-link css-v9r38k" to="#contact">CONTACT</Link>
                        </div>
                        <div className="chakra-stack css-cvhavf" style={{ backdropFilter: `blur(14px)` }}>
                            <button type="button" className="chakra-button css-1sxrsep" id='changeLanguageTag1' >
                                <p className="chakra-text css-1irktzc" id='changeLanguageTag1_1'>&lt;/</p>
                                <p className="chakra-text css-2k2zd" onClick={() => changeLanguage('en_US')}>中</p>
                                <p className="chakra-text css-1irktzc" id='changeLanguageTag1_2'>&gt;</p></button>
                            <button type="button" className="chakra-button css-1m50zn" id='changeLanguageTag2'>
                                <p className="chakra-text css-ix2b0u" id='changeLanguageTag2_1'>&lt;/</p>
                                <p className="chakra-text css-2k2zd" onClick={() => changeLanguage('en_CN')}>EN</p>
                                <p className="chakra-text css-ix2b0u" id='changeLanguageTag2_2'>&gt;</p></button>
                        </div>
                        <div className="css-14lqyx8">
                            <div className="css-k008qs">
                                {showResults ? <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1mfkq3i" onClick={openHamburger}>
                                    <path fill="currentColor" d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z">
                                    </path>
                                </svg> : <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-183pgf2" onClick={openHamburger} >
                                    <path fill="currentColor" d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
                                </svg>}
                                {showResults ? <Results /> : null}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="css-zo65ya" style={{ backdropFilter: `blur(14px)` }}>
                    <p className="chakra-text css-1lejymi" style={{ color: 'white' }}>Contact</p>
                    <div className="chakra-stack css-y7lu36">
                        <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://github.com/Vincent3054">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.linkedin.com/in/%E5%BB%BA%E6%88%90-%E9%99%B3-6438201a0/">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://twitter.com/Esky1225">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='css-j7qwjs'>
                    <div justify="center" className="css-8atqhb">
                        <div name="hero" id='home' activeClassName="active">
                            <div className="css-1ivkluv">
                                <div className="css-hboir5">
                                    <div className="css-1skky35">
                                        <div className="css-17sfgba">
                                            <img src={video_jpg} className="chakra-image css-187ared" />
                                        </div>
                                        <div className="css-o60zcr">
                                            <div className="css-152z5uv">
                                                <div className="css-0">
                                                    <img src={roboat} className="chakra-image css-15tfjzk" style={{ marginTop: 20 }} />
                                                </div>
                                            </div>
                                            <div className="css-1s9109j">
                                                <p className="chakra-text css-ak2fvk" style={{ color: 'white', transform: `translateX(-149.937deg) translateZ(0px) `, animation: `translateX 30s linear infinite` }}>Maintain existing products</p>
                                            </div>
                                        </div>
                                        <div className="css-1mxnfqb">
                                            <div className="css-1x6zq7v">
                                                <img src={web3} className="chakra-image css-1x97c6v " />
                                            </div>
                                            <p className="chakra-text css-12u5jte">Get In Touch →</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="css-x2jlx">
                                <div className="css-cabqe5">
                                    <div className="css-1c5os2">
                                        <div className="css-v8pof3">
                                            <div className="chakra-aspect-ratio css-lgt4p6">
                                                <div className="css-b4kcmh">
                                                    <div className="css-af29y2">
                                                        <img src={education2} className="chakra-image css-8atqhb" style={{ transform: `rotate(157.359deg) translateZ(0px) `, animation: `rotate 10s linear infinite` }} />
                                                    </div>
                                                    <img src={education1} className="chakra-image css-189nn6s" />
                                                    <img src={education3} className="chakra-image css-svb3od" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="css-7edg9i">
                                            <div className="css-grnj0k">
                                                <img src={web3} className="chakra-image css-8atqhb" />
                                            </div>
                                            <p className="chakra-text css-1ruhbjz" style={{ transform: `translateX(0deg) translateZ(0px)`, animation: `translateXmix 2s ease infinite` }}>Get In Touch →</p>
                                        </div>
                                    </div>
                                    <div className="css-b95f0i">
                                        <div className="css-13pmxen">
                                            <div className="css-b95f0i">
                                                <div className="css-es8c1t">
                                                    <video src={video} loop autoPlay preload="auto" type="video" className="css-xj4wuc" style={{ position: `absolute`, Zindex: 5, objectFit: `cover` }}></video>
                                                    <img src={video_jpg} className="chakra-image css-dlsxfg" />
                                                </div>
                                                <div className="css-q93ar1">
                                                    <div className="css-1r6zn15">
                                                        <img src={roboat} className="chakra-image css-yikrym" style={{ marginTop: 20, transformStyle: 'preserve-3d', transform: `rotateY(164.736deg) translateZ(0px)`, animation: `rotateY 3s ease-out infinite` }} />
                                                    </div>
                                                    <div className="css-93mbcm">
                                                        <div spacing="5" className="css-1f847os" style={{ transform: `translateX(-765.665px) translateZ(0px)`, animation: `translateX 30s linear infinite` }}>
                                                            <span className="chakra-text css-16w502t" ><Text fontSize='24px' color='white'>Maintain existing products</Text></span>
                                                            <span className="chakra-text css-16w502t" ><Text fontSize='24px' color='white'>Agile development experience</Text></span>
                                                            <span className="chakra-text css-16w502t" ><Text fontSize='24px' color='white'>Automated testing experience</Text></span>
                                                            <span className="chakra-text css-16w502t" ><Text fontSize='24px' color='white'>Good programming habits</Text></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="css-1d0hevl">
                                                <div className="css-b95f0i">
                                                    <div className="css-11mzmwc">
                                                        <img src={codeMp4} className="css-3q72at" style={{ marginTop: 5, marginBottom: 0 }}></img>
                                                    </div>
                                                    <div className="css-1pca8xd">
                                                        <img src={codeimg} className="chakra-image css-6gs9hh" />
                                                    </div>
                                                </div>
                                                <div className="css-1cvzsx5">
                                                    <div className="css-jiugte">
                                                        <img src={eth} className="chakra-image css-8atqhb" style={{ transform: `rotateY('352.368deg') translateZ(0px)`, animation: `rotateY 5s ease-in infinite` }} />
                                                    </div>
                                                    <img src={ethtext} className="chakra-image css-17kn5dq" style={{ marginTop: 0 }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="css-vcje4k">
                                            <div className="css-1x20tsh">
                                                <div className="css-1s832on">
                                                    <p className="chakra-text css-3o4yf2" style={{ transformStyle: 'preserve-3d', transform: `rotateX(342.828deg) translateZ(0px)`, animation: `rotateX 3s ease-in infinite` }}>Skills</p>
                                                    <div className="css-ov4cx">
                                                        <div className="css-1q80jlu">
                                                            <img src={downWebm} className="css-1ol22ox" style={{ position: `absolute`, Zindex: 5, objectFit: `cover`, }}></img>
                                                        </div>
                                                        <div className="chakra-stack css-589axb">

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="css-58f8ah">
                                                    <img src={downRightGif} className="chakra-image css-6gs9hh" />
                                                </div>
                                            </div>
                                            <div className="css-jflkg2">
                                                <img src={downRightStyle} className="chakra-image css-8atqhb" style={{ marginBottom: 6 }} />
                                                <div className="css-ly3aem">
                                                    <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://github.com/Vincent3054">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" focusable="false" className="chakra-icon css-13otjrl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div className="css-ly3aem">
                                                    <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.linkedin.com/in/%E5%BB%BA%E6%88%90-%E9%99%B3-6438201a0/">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" focusable="false" className="chakra-icon css-13otjrl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div className="css-ly3aem">
                                                    <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://twitter.com/Esky1225">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" focusable="false" className="chakra-icon css-13otjrl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                                <img src={downRightStyle} className="chakra-image css-128e4yw" style={{ marginBottom: 0, marginTop: 6 }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div justify="center" className="css-8atqhb">
                        <div name="about" id="about">
                            <div className="css-1htib5q">
                                <div className="css-15nuc2v">
                                    <div className="css-3kl7zo">
                                        <div className="css-156k7ip2">
                                            <h2 className="chakra-heading css-o1hqf8 css-156k7ip2">ABOUT</h2>
                                        </div>
                                        <div className="css-156k7ip2">
                                            <h2 className="chakra-heading css-1gwjdoc css-156k7ip2">JIAN-CHENG</h2>
                                        </div>
                                        <div className="css-156k7ip">
                                            <div className="css-1ns35bm"></div>
                                            <div className="css-dgi8dv"></div>

                                            <div className="chakra-text css-1ci2rko">
                                                <div className="css-grnj0k2-1">
                                                    <img src={mugShot} className="chakra-image" width={200} height={200} />
                                                    <div style={{ marginLeft: 30 }}>
                                                        <p><span className="css-jx61ed">Name：</span>JIAN-CHENG CHEN</p>
                                                        <p><span className="css-jx61ed">Location：</span>Taichung City</p>
                                                        <p><span className="css-jx61ed">Education：</span>NUTC</p>
                                                        <p><span className="css-jx61ed">Email：</span>ok96305@gmail.com</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="css-inku9w">
                                        <h2 className="chakra-heading css-o1hqf8 ">Skills</h2>
                                        <h2 className="chakra-heading css-1gwjdoc2" >Front End</h2>
                                        <Grid templateColumns='repeat(5, 1fr)' gap={4}>
                                            <GridItem colSpan={2} h='200'>
                                                <p>HTML(5)</p>
                                                <p>CSS(3)</p>
                                                <p>JavaScript(ES6)</p>
                                                <p>JQuery</p>
                                            </GridItem>
                                            <GridItem colStart={4} colEnd={6} h='200'>
                                                <p>RESTful API/Ajax</p>
                                                <p>React/Redux</p>
                                                <p>Gatsby/GraphQL</p>
                                                <p>Vue/Vuex</p>
                                            </GridItem>
                                        </Grid>
                                        <h2 className="chakra-heading css-1gwjdoc2" >Back End</h2>
                                        <Grid templateColumns='repeat(5, 1fr)' gap={4}>
                                            <GridItem colSpan={2} h='200'>
                                                <p>C#</p>
                                                <p>.NET Framework</p>
                                                <p>ASP.NET Core</p>
                                                <p>EF Core/LINQ</p>
                                            </GridItem>
                                            <GridItem colStart={4} colEnd={6} h='200'  >
                                                <p>Dapper</p>
                                                <p>MVC Pattern</p>
                                                <p>NUnit</p>
                                                <p>MS SQL</p>
                                            </GridItem>
                                        </Grid>
                                        <h2 className="chakra-heading css-1gwjdoc2">Other</h2>
                                        <Grid templateColumns='repeat(5, 1fr)' gap={4}>
                                            <GridItem colSpan={2} h='50'>
                                                <p>Scrum/Kanban/Pair Programming</p>
                                                <p>Atlassian/Jira</p>
                                            </GridItem>
                                            <GridItem colStart={4} colEnd={6} h='50'  >
                                                <p>Git/Git Flow/SVN</p>
                                                <p>GitLab CI/CD</p>
                                            </GridItem>
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                            <div name="experience" id='experience' className="css-y65vn" >
                                <div className="css-161kdgv">
                                    <h2 className="chakra-heading css-1ezh9kl">Experience</h2>
                                    <div className="css-1t0s12a">
                                        <Slider className='css-1iihtel css-1iihtel2' dir="ltr"{...settings} >
                                            <div className='css-z4vrou'>
                                                <div className="css-1p2x7r1">
                                                    <div className="css-2tjxfx">
                                                        <p className="chakra-text css-nhq6ym">{intl.get("ExperienceTitle1")}</p>
                                                        <p className="chakra-text css-1ndgkws">2021/03-2022/03</p>
                                                    </div>
                                                    <div className="css-19q6myf">
                                                        <p className="chakra-text css-0">
                                                            {intl.get("Experience1")}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="css-1p2x7r1">
                                                    <div className="css-2tjxfx">
                                                        <p className="chakra-text css-nhq6ym">{intl.get("ExperienceTitle2")}</p>
                                                        <p className="chakra-text css-1ndgkws">2020/03-2021/02</p>
                                                    </div>
                                                    <div className="css-19q6myf">
                                                        <p className="chakra-text css-0">
                                                            {intl.get("Experience2")}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="css-1p2x7r1">
                                                    <div className="css-2tjxfx">
                                                        <p className="chakra-text css-nhq6ym">{intl.get("ExperienceTitle3")}</p>
                                                        <p className="chakra-text css-1ndgkws">2017/09-2021/06</p>
                                                    </div>
                                                    <div className="css-19q6myf">
                                                        <p className="chakra-text css-0">
                                                            {intl.get("Experience3")}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='css-z4vrou'>
                                                <div className="css-1p2x7r1">
                                                    <div className="css-2tjxfx">
                                                        <p className="chakra-text css-nhq6ym">{intl.get("ExperienceTitle4")}</p>
                                                        <p className="chakra-text css-1ndgkws">2017/07-2019/01</p>
                                                    </div>
                                                    <div className="css-19q6myf">
                                                        <p className="chakra-text css-0">
                                                            {intl.get("Experience4")}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                    <div className="css-1rr5s11">
                                        <Slider className='css-1iihtel css-1iihtel2' dir="ltr"{...settings} >
                                            <div className='css-z4vrou'>
                                                <div className="css-1p2x7r1">
                                                    <div className="css-2tjxfx">
                                                        <p className="chakra-text css-nhq6ym">{intl.get("ExperienceTitle1")}</p>
                                                        <p className="chakra-text css-1ndgkws">2021/03-2022/03</p>
                                                    </div>
                                                    <div className="css-19q6myf">
                                                        <p className="chakra-text css-0">{intl.get("Experience1")}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="css-1p2x7r1">
                                                    <div className="css-2tjxfx">
                                                        <p className="chakra-text css-nhq6ym">{intl.get("ExperienceTitle2")}</p>
                                                        <p className="chakra-text css-1ndgkws">2020/02-2021/02</p>
                                                    </div>
                                                    <div className="css-19q6myf">
                                                        <p className="chakra-text css-0">{intl.get("Experience2")}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="css-1p2x7r1">
                                                    <div className="css-2tjxfx">
                                                        <p className="chakra-text css-nhq6ym">{intl.get("ExperienceTitle3")}</p>
                                                        <p className="chakra-text css-1ndgkws">2017/09-2021/06</p>
                                                    </div>
                                                    <div className="css-19q6myf">
                                                        <p className="chakra-text css-0">{intl.get("Experience3")}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='css-z4vrou'>
                                                <div className="css-1p2x7r1">
                                                    <div className="css-2tjxfx">
                                                        <p className="chakra-text css-nhq6ym">{intl.get("ExperienceTitle4")}</p>
                                                        <p className="chakra-text css-1ndgkws">2017/07-2019/01</p>
                                                    </div>
                                                    <div className="css-19q6myf">
                                                        <p className="chakra-text css-0">{intl.get("Experience4")}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div justify="center" className="css-8atqhb">
                        <div name="project" id="project">
                            <div className="css-1egi2fn">
                                <div className="css-tbjli7">
                                    <h2 className="chakra-heading css-l1gp8i" align="left">PROJECT</h2>
                                    <div className="css-1t0s12a2">
                                        <Slider className='css-1iihtel css-1iihtel2' dir="ltr"{...settings} >
                                            <div className='css-z4vrou2'>
                                                <div className="css-1p2x7r12">
                                                    <div role="group" className="css-ccezj5">
                                                        <p className="chakra-text css-39c3a1">
                                                            <span className="css-79wky">{'{'}</span>
                                                            Perfomance Development System
                                                            <span className="css-79wky">{'}'}</span>
                                                        </p>
                                                        <div className="chakra-text css-rxctit">
                                                            <p>Role：Maintainer</p>
                                                            <p>Technologies：.NET Core, JavaScript, JQuery, MSSQL, Entity Framework</p>
                                                            <p>Project Scope/Description：{intl.get("ProjectScope1")}</p>
                                                            <p>Achievements：{intl.get("Achievements1")}</p>
                                                        </div>
                                                        <div spacing="16px" className="css-1htsqtv"></div><div className="css-1fwbh1l">
                                                            <a target="_blank" rel="noopener" className="chakra-link css-1ai4ze8" align="right" href="#">GET STARTED →
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="css-1p2x7r12">
                                                    <div role="group" className="css-ccezj5">
                                                        <p className="chakra-text css-39c3a1">
                                                            <span className="css-79wky">{'{'}</span>
                                                            Talent Center
                                                            <span className="css-79wky">{'}'}</span>
                                                        </p>
                                                        <div className="chakra-text css-rxctit">
                                                            <p>Role：Maintainer</p>
                                                            <p>Technologies：.NET Framework, JavaScript, JQuery, MSSQL</p>
                                                            <p>Project Scope/Description：{intl.get("ProjectScope2")}</p>
                                                            <p>Achievements：{intl.get("Achievements2")}</p>
                                                        </div>
                                                        <div spacing="16px" className="css-1htsqtv"></div><div className="css-1fwbh1l">
                                                            <a target="_blank" rel="noopener" className="chakra-link css-1ai4ze8" align="right" href="#">GET STARTED →
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="css-1p2x7r12">
                                                    <div role="group" className="css-ccezj5">
                                                        <p className="chakra-text css-39c3a1">
                                                            <span className="css-79wky">{'{'}</span>
                                                            Training System
                                                            <span className="css-79wky">{'}'}</span>
                                                        </p>
                                                        <div className="chakra-text css-rxctit">
                                                            <p>Role：Maintainer</p>
                                                            <p>Technologies：.NET Framework, JavaScript, JQuery, MSSQL</p>
                                                            <p>Project Scope/Description：{intl.get("ProjectScope3")}</p>
                                                            <p>Achievements：{intl.get("Achievements3")}</p>
                                                        </div>
                                                        <div spacing="16px" className="css-1htsqtv"></div>
                                                        <div className="css-1fwbh1l">
                                                            <a target="_blank" rel="noopener" className="chakra-link css-1ai4ze8" align="right" href="#">GET STARTED →
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='css-z4vrou2'>
                                                <div className="css-1p2x7r12">
                                                    <div role="group" className="css-ccezj5">
                                                        <p className="chakra-text css-39c3a1">
                                                            <span className="css-79wky">{'{'}</span>
                                                            Exam
                                                            <span className="css-79wky">{'}'}</span>
                                                        </p>
                                                        <div className="chakra-text css-rxctit">
                                                            <p>Role：Maintainer</p>
                                                            <p>Technologies：.NET Framework, JavaScript, JQuery, MSSQL</p>
                                                            <p>Project Scope/Description：{intl.get("ProjectScope4")}</p>
                                                            <p>Achievements：{intl.get("Achievements4")}</p>
                                                        </div>
                                                        <div spacing="16px" className="css-1htsqtv"></div>
                                                        <div className="css-1fwbh1l">
                                                            <a target="_blank" rel="noopener" className="chakra-link css-1ai4ze8" align="right" href="#">GET STARTED →
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="css-1p2x7r12">
                                                    <div role="group" className="css-ccezj5">
                                                        <p className="chakra-text css-39c3a1">
                                                            <span className="css-79wky">{'{'}</span>
                                                            Tivago
                                                            <span className="css-79wky">{'}'}</span>
                                                        </p>
                                                        <div className="chakra-text css-rxctit">
                                                            <p>Role：Maintainer</p>
                                                            <p>Technologies：.NET Framework, JavaScript, JQuery, MSSQL, React</p>
                                                            <p>Project Scope/Description：{intl.get("ProjectScope5")}</p>
                                                            <p>Achievements：{intl.get("Achievements5")}</p>
                                                        </div>
                                                        <div spacing="16px" className="css-1htsqtv"></div>
                                                        <div className="css-1fwbh1l">
                                                            <a target="_blank" rel="noopener" className="chakra-link css-1ai4ze8" align="right" href="#">GET STARTED →
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="css-1p2x7r12">
                                                    <div role="group" className="css-ccezj5">
                                                        <p className="chakra-text css-39c3a1">
                                                            <span className="css-79wky">{'{'}</span>
                                                            Campus
                                                            <span className="css-79wky">{'}'}</span>
                                                        </p>
                                                        <div className="chakra-text css-rxctit">
                                                            <p>Role：Maintainer</p>
                                                            <p>Technologies：.NET Framework, JavaScript, JQuery, MSSQL</p>
                                                            <p>Project Scope/Description：{intl.get("ProjectScope6")}</p>
                                                            <p>Achievements：{intl.get("Achievements6")}</p>
                                                        </div>
                                                        <div spacing="16px" className="css-1htsqtv"></div>
                                                        <div className="css-1fwbh1l">
                                                            <a target="_blank" rel="noopener" className="chakra-link css-1ai4ze8" align="right" href="#">GET STARTED →
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='css-z4vrou2'>
                                                <div className="css-1p2x7r12">
                                                    <div role="group" className="css-ccezj5">
                                                        <p className="chakra-text css-39c3a1">
                                                            <span className="css-79wky">{'{'}</span>
                                                            伊甸基金會-ERP會計系統
                                                            <span className="css-79wky">{'}'}</span>
                                                        </p>
                                                        <div className="chakra-text css-rxctit">
                                                            <p>Role：Developer</p>
                                                            <p>Technologies：.NET Framework, Angular,JavaScript, JQuery, MSSQL</p>
                                                            <p>Project Scope/Description：{intl.get("ProjectScope7")}</p>
                                                        </div>
                                                        <div spacing="16px" className="css-1htsqtv"></div>
                                                        <div className="css-1fwbh1l">
                                                            <a target="_blank" rel="noopener" className="chakra-link css-1ai4ze8" align="right" href="#">GET STARTED →
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="css-1p2x7r12">
                                                    <div role="group" className="css-ccezj5">
                                                        <p className="chakra-text css-39c3a1">
                                                            <span className="css-79wky">{'{'}</span>
                                                            法務部矯正署-ERP會計系統
                                                            <span className="css-79wky">{'}'}</span>
                                                        </p>
                                                        <div className="chakra-text css-rxctit">
                                                            <p>Role：Developer</p>
                                                            <p>Technologies：.NET Framework,Angular,JavaScript, JQuery, MSSQL, React</p>
                                                            <p>Project Scope/Description：{intl.get("ProjectScope8")}</p>
                                                        </div>
                                                        <div spacing="16px" className="css-1htsqtv"></div>
                                                        <div className="css-1fwbh1l">
                                                            <a target="_blank" rel="noopener" className="chakra-link css-1ai4ze8" align="right" href="#">GET STARTED →
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div justify="center" className="css-8atqhb">
                        <div name="sideproject" id="sideproject" className="css-1ycfcnn">
                            <div className="css-ets80r">
                                <h2 className="chakra-heading css-1f5itjl">Side Project</h2>
                            </div>
                            <div className="css-k008qs">
                                <div style={{ width: `100%` }}>
                                    <Slider className="css-wjpq14 css-wjpqstyle" style={{ display: `flex`, alignItems: `stretch`, position: `relative`, width: `100%`, borderRadius: 5 }} dir="ltr"{...settings2}>
                                        <div tabIndex="-1" className="css-12t0pqb" style={{ width: `100%`, display: `inline-block` }}>
                                            <div className="css-1hnpd1e">
                                                <img alt="work01" src={sideProject7} width={900} className="chakra-image css-1l6wnt8" />
                                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.fxhash.xyz/generative/10539">
                                                    <p className="chakra-text css-131hjci">{intl.get("SideProjectTitle1")}</p>
                                                </a>
                                                <p className="hideSideProject">Technologies：C#, ASP.Net MVC, MSSQL, Java Script , jQuery , React</p>
                                                <p className="hideSideProject" style={{ marginBottom: 10 }}>Project Scope/Description：{intl.get("SideProjectScope1")}</p>
                                            </div>
                                        </div>
                                        <div tabIndex="-1" className="css-12t0pqb" style={{ width: `100%`, display: `inline-block` }}>
                                            <div className="css-1hnpd1e">
                                                <img alt="work01" src={sideProject6} width={900} className="chakra-image css-1l6wnt8" />
                                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.fxhash.xyz/generative/10539">
                                                    <p className="chakra-text css-131hjci">{intl.get("SideProjectTitle2")}</p>
                                                </a>
                                                <p className="hideSideProject">Technologies：C#, NET Core 3.1,Python 3.8,OpenCV, MSSQL, Java Script , jQuery ,React ,DvaJS</p>
                                                <p className="hideSideProject" style={{ marginBottom: 10 }}>Project Scope/Description：{intl.get("SideProjectScope2")}</p>
                                            </div>
                                        </div>
                                        <div tabIndex="-1" className="css-12t0pqb" style={{ width: `100%`, display: `inline-block` }}>
                                            <div className="css-1hnpd1e">
                                                <img alt="work01" src={sideProject5} width={900} className="chakra-image css-1l6wnt8" />
                                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.fxhash.xyz/generative/10539">
                                                    <p className="chakra-text css-131hjci">{intl.get("SideProjectTitle3")}</p>
                                                </a>
                                                <p className="hideSideProject">Technologies：C#, NET Core 3.1, MSSQL, Java Script , jQuery , React, Ant Design</p>
                                                <p className="hideSideProject" style={{ marginBottom: 10 }}>Project Scope/Description：{intl.get("SideProjectScope3")}</p>
                                            </div>
                                        </div>
                                        <div tabIndex="-1" className="css-12t0pqb" style={{ width: `100%`, display: `inline-block` }}>
                                            <div className="css-1hnpd1e">
                                                <img alt="work01" src={sideProject1} width={900} className="chakra-image css-1l6wnt8" />
                                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.fxhash.xyz/generative/10539">
                                                    <p className="chakra-text css-131hjci">{intl.get("SideProjectTitle4")}</p>
                                                </a>
                                                <p className="hideSideProject">Technologies：Java Script , jQuery , React, Gatsby.js , GraphQL , ChakraUI</p>
                                                <p className="hideSideProject" style={{ marginBottom: 10 }}>Project Scope/Description：{intl.get("SideProjectScope4")}</p>
                                            </div>
                                        </div>
                                        <div tabIndex="-1" className="css-12t0pqb" style={{ width: `100%`, display: `inline-block` }}>
                                            <div className="css-1hnpd1e">
                                                <img alt="work01" src={sideProject4} width={900} className="chakra-image css-1l6wnt8" />
                                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.fxhash.xyz/generative/10539">
                                                    <p className="chakra-text css-131hjci">{intl.get("SideProjectTitle5")}</p>
                                                </a>
                                                <p className="hideSideProject">Technologies：C#, ASP.Net MVC, MSSQL, Java Script , jQuery</p>
                                                <p className="hideSideProject" style={{ marginBottom: 10 }}>Project Scope/Description：{intl.get("SideProjectScope5")}</p>
                                            </div>
                                        </div>
                                        <div tabIndex="-1" className="css-12t0pqb" style={{ width: `100%`, display: `inline-block` }}>
                                            <div className="css-1hnpd1e">
                                                <img alt="work01" src={sideProject3} width={900} className="chakra-image css-1l6wnt8" />
                                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.fxhash.xyz/generative/10539">
                                                    <p className="chakra-text css-131hjci">{intl.get("SideProjectTitle6")}</p>
                                                </a>
                                                <p className="hideSideProject">Technologies：HTML5 , CSS3 , Java Script , jQuery , Bootstrap</p>
                                                <p className="hideSideProject" style={{ marginBottom: 10 }}>Project Scope/Description：{intl.get("SideProjectScope6")}</p>
                                            </div>
                                        </div>
                                        <div tabIndex="-1" className="css-12t0pqb" style={{ width: `100%`, display: `inline-block` }}>
                                            <div className="css-1hnpd1e">
                                                <img alt="work01" src={sideProject2} width={900} className="chakra-image css-1l6wnt8" />
                                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.fxhash.xyz/generative/10539">
                                                    <p className="chakra-text css-131hjci">{intl.get("SideProjectTitle7")}</p>
                                                </a>
                                                <p className="hideSideProject">Technologies：HTML5 , CSS3 , Java Script , jQuery , Bootstrap</p>
                                                <p className="hideSideProject" style={{ marginBottom: 10 }}>Project Scope/Description：{intl.get("SideProjectScope7")}</p>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <img src={Doublehand} className="chakra-image css-1eqhctw" />
                        </div>
                    </div>
                    <div justify="center" className="css-8atqhb">
                        <div name="contact" id='contact'>
                            <div className="css-1yku1s2">
                                <div className="css-ejdpnu">
                                    {showAlert == true ? <AlertStatus_success /> : ""}
                                    <div className="css-1985z01">
                                        <div className="css-23l46w">
                                            <p className="chakra-text css-1lejymi">Contact</p>
                                            <p className="chakra-text css-0">→</p>
                                        </div>
                                        <p className="chakra-text css-7w6khc">
                                            {intl.get("ContactContent")}
                                        </p>
                                        <div className="chakra-stack css-mnsd50">
                                            <p className="chakra-text css-0">Email:ok96305@gmail.com</p>
                                            <div className="chakra-stack css-y7lu36">
                                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://github.com/Vincent3054" style={{ marginBottom: 0 }}>
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                    </svg>
                                                </a>
                                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.linkedin.com/in/%E5%BB%BA%E6%88%90-%E9%99%B3-6438201a0/">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                    </svg>
                                                </a>
                                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://twitter.com/Esky1225">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="css-ez5eip">
                                        <form ref={form} onSubmit={sendEmail}>
                                            <div className="chakra-stack css-uc6l60">
                                                <div className="chakra-stack css-1y8x67">
                                                    <div role="group" className="chakra-form-control css-1kxonj9">
                                                        <label htmlFor="name" id="field-31-label" className="chakra-form__label css-2gx1h6">Name</label>
                                                        <input name="name" placeholder="Name" id="field-31" className="chakra-input css-1c6j008" />
                                                    </div>
                                                </div>
                                                <div role="group" className="chakra-form-control css-1kxonj9">
                                                    <label htmlFor="mail" id="field-33-label" className="chakra-form__label css-2gx1h6">Email address</label>
                                                    <input name="email" placeholder="Your Mail" id="field-33" className="chakra-input css-1c6j008" />
                                                </div>
                                                <div role="group" className="chakra-form-control css-1kxonj9">
                                                    <label htmlFor="title" id="field-33-label" className="chakra-form__label css-2gx1h6">Title</label>
                                                    <input name="title" placeholder="Mail Title" id="field-33" className="chakra-input css-1c6j008" />
                                                </div>
                                                <div role="group" className="chakra-form-control css-1kxonj9">
                                                    <label id="field-36-label" htmlFor="field-36" className="chakra-form__label css-2gx1h6"> Details</label>
                                                    <textarea name="content" placeholder="Mail Content" id="field-36" className="chakra-textarea css-tmj4qa"></textarea>
                                                </div>
                                            </div>
                                            <button type="submit" className="chakra-button css-qabqbr">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="css-k42sdu">
                    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                        <GridItem w='100%' h='10'>
                            <img src={skylogo} className="chakra-image css-dov9nq" style={{ opacity: 1, width: 200 }} />
                        </GridItem>
                        <GridItem w='100%' h='10'>
                            <p className="chakra-text css-suy9op">
                                <span className='hideFoot'>This Web site and the Contents are intended only for the individual, non-commercial use of Web-site users.</span>(Imitate to Z INSTITUTE)
                            </p>
                        </GridItem>
                        <GridItem w='100%' h='10'>
                            <div className="chakra-stack css-y7lu362" style={{ justifyContent: `flex-end` }}>
                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://github.com/Vincent3054">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.linkedin.com/in/%E5%BB%BA%E6%88%90-%E9%99%B3-6438201a0/">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://twitter.com/Esky1225">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </GridItem>
                    </Grid>
                </div>
            </div>
        </div>
    );
}
export default Resume