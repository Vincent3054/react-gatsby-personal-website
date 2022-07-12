import React, { useState, useEffect, useRef } from 'react';

import { Link } from 'gatsby'
import '../components/page1.css'
import '../components/page2.css'
import '../components/page3.css'
import '../components/page4.css'
import '../components/page5.css'
import '../components/page6.css'

import Layout from '../components/layout'
import { Grid, GridItem, Text } from '@chakra-ui/react'
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

import temp from '../images/work_nft_01.332c8f63861f66f99216.jpg';
import Doublehand from '../images/Doublehand.png';


function Resume() {
    const [showResults, setShowResults] = useState(false)
    const onClick = () => showResults == false ? setShowResults(true) : setShowResults(false);
    const Results = () => (
        <div className="css-15po4rs" style={{ backdropFilter: `blur(14px)` }}>
            <a className="chakra-link css-v9r38k">ABOUT</a>
            <a className="chakra-link css-v9r38k">VISION</a>
            <a className="chakra-link css-v9r38k">SERVICE</a>
            <a className="chakra-link css-v9r38k">COURSE</a>
            <a className="chakra-link css-v9r38k">INSTRUCTOR</a>
            <a className="chakra-link css-v9r38k">PARTNER</a>
            <a className="chakra-link css-v9r38k">Q&amp;A</a>
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
    return (
        <div className='chakra-ui-light'>
            <div id='root'>
                <div className="css-2hw6dr" style={{ opacity: 0 }}>
                    <img src={skylogo} className="chakra-image css-dov9nq" style={{ opacity: 1, width: 200 }} />
                </div>
                <div className='css-1p8qfhk'>
                    <div className="css-iybxr5" style={{ opacity: 1, transform: undefined, transition: `0.5s ease-in ` }}>
                        <div className="css-wm488v" style={{ backdropFilter: `blur(14px)` }}>
                            <a className="chakra-link css-2n2ro8">
                                <img src={skylogo} className="chakra-image css-tcg55f" style={{ marginBottom: 0 }} />
                            </a>
                        </div>
                        <div className="css-kz2ai8" style={{ backdropFilter: `blur(14px)` }}>
                            <a className="chakra-link css-v9r38k">ABOUT</a>
                            <a className="chakra-link css-v9r38k">VISION</a>
                            <a className="chakra-link css-v9r38k">SERVICE</a>
                            <a className="chakra-link css-v9r38k">COURSE</a>
                            <a className="chakra-link css-v9r38k">INSTRUCTOR</a>
                            <a className="chakra-link css-v9r38k">PARTNER</a>
                            <a className="chakra-link css-v9r38k">Q&amp;A</a>
                            <a target="_blank" rel="noopener" className="chakra-link css-1uzmgig" href="https://medium.com/the-z-institute">blog</a>
                            <a className="chakra-link css-zaqq0p"></a>
                        </div>
                        <div className="chakra-stack css-cvhavf" style={{ backdropFilter: `blur(14px)` }}>
                            <button type="button" className="chakra-button css-1m50zn" >
                                <p className="chakra-text css-ix2b0u">&lt;/</p>
                                <p className="chakra-text css-2k2zd">中</p>
                                <p className="chakra-text css-ix2b0u">&gt;</p></button>
                            <button type="button" className="chakra-button css-1sxrsep" >
                                <p className="chakra-text css-1irktzc">&lt;/</p>
                                <p className="chakra-text css-2k2zd">EN</p>
                                <p className="chakra-text css-1irktzc">&gt;</p></button>
                        </div>
                        <div className="css-14lqyx8">
                            <div className="css-k008qs">
                                <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-183pgf2" onClick={onClick} >
                                    <path fill="currentColor" d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
                                </svg>
                                {showResults ? <Results /> : null}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="css-zo65ya" style={{ backdropFilter: `blur(14px)` }}>
                    <p className="chakra-text css-1lejymi" style={{ color: 'white' }}>Join us</p>
                    <div className="chakra-stack css-y7lu36">
                        <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://discord.gg/WtCFxxJSu4">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                            </svg>
                        </a>
                        <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.facebook.com/the.z.institute">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                            </svg>
                        </a>
                        <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://mobile.twitter.com/the_z_institute">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                            </svg>
                        </a>
                        <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.youtube.com/channel/UC42E-54LCmsclJJ2-LZ7RdA">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                            </svg>
                        </a>
                        <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.instagram.com/the_z_institute/">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='css-j7qwjs'>
                    <div justify="center" className="css-8atqhb">
                        <div name="hero">
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
                                                    <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.facebook.com/the.z.institute">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" focusable="false" className="chakra-icon css-13otjrl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path></svg>
                                                    </a>
                                                </div>
                                                <div className="css-ly3aem">
                                                    <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://discord.gg/WtCFxxJSu4">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" focusable="false" className="chakra-icon css-13otjrl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div className="css-ly3aem">
                                                    <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://twitter.com/the_z_institute">
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
                        <div name="about">
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
                            <div className="css-y65vn" >
                                <div className="css-161kdgv">
                                    <h2 className="chakra-heading css-1ezh9kl">Experience</h2>
                                    <div className="css-1t0s12a">
                                        <Slider className='css-1iihtel css-1iihtel2' dir="ltr"{...settings} >
                                            <div className='css-z4vrou'>
                                                <div className="css-1p2x7r1">
                                                    <div className="css-2tjxfx">
                                                        <p className="chakra-text css-nhq6ym">新加坡商鈦坦科技</p>
                                                        <p className="chakra-text css-1ndgkws">2021/03-2022/03</p>
                                                    </div>
                                                    <div className="css-19q6myf">
                                                        <p className="chakra-text css-0">
                                                            主要維護並研發8個跟OD相關的內部系統，以敏捷(Scrum)和看板(Kanban)的方式進行開發，維護的專案有使用MVC和API開發，
                                                            接觸到的後端技術有C#, ASP.Net MVC, .NET Core, Entity Framework , MSSQL，前端技術有JavaScript, JQuery ,React。
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="css-1p2x7r1">
                                                    <div className="css-2tjxfx">
                                                        <p className="chakra-text css-nhq6ym">國興資訊</p>
                                                        <p className="chakra-text css-1ndgkws">2020/02-2021/02</p>
                                                    </div>
                                                    <div className="css-19q6myf">
                                                        <p className="chakra-text css-0">
                                                            主要維護並研發2個EPR會計系統，以瀑布式(Waterfall)的方式進行開發，維護的專案有使用MVC開發，
                                                            接觸到的後端技術有C#, ASP.Net MVC, MSSQL，前端技術有JavaScript, JQuery, Angular。
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="css-1p2x7r1">
                                                    <div className="css-2tjxfx">
                                                        <p className="chakra-text css-nhq6ym">國立臺中科技大學</p>
                                                        <p className="chakra-text css-1ndgkws">2017/09-2021/06</p>
                                                    </div>
                                                    <div className="css-19q6myf">
                                                        <p className="chakra-text css-0">
                                                            以全國技藝競賽金手獎的佳績推甄進入臺中科大資管系，擔任日間部資訊管理系學會會長，
                                                            籌備多場小型活動和七場大型活動並擔任活動總副召，積極參與校內外各項競賽，榮獲全國資訊應用服務創新競賽第三名和資訊學院專題展第三名成績，
                                                            課外喜歡參與各式社群和論壇，擁有二年資訊公司實習經驗。
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='css-z4vrou'>
                                                <div className="css-1p2x7r1">
                                                    <div className="css-2tjxfx">
                                                        <p className="chakra-text css-nhq6ym">典時成金</p>
                                                        <p className="chakra-text css-1ndgkws">2017/07-2019/01</p>
                                                    </div>
                                                    <div className="css-19q6myf">
                                                        <p className="chakra-text css-0">
                                                            典時成金是為了技職體系選手成立的新創公司，主要業務為企業授課以及選手培訓，
                                                            我們定期舉辦營隊、研習、競賽校園演講等活動，過程中當任講師及幹部一職。

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
                                                        <p className="chakra-text css-nhq6ym">新加坡商鈦坦科技</p>
                                                        <p className="chakra-text css-1ndgkws">2021/03-2022/03</p>
                                                    </div>
                                                    <div className="css-19q6myf">
                                                        <p className="chakra-text css-0">The course planning and organization is very complete and challenging. You can become a DeFi master if fully absorb the content!
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="css-1p2x7r1">
                                                    <div className="css-2tjxfx">
                                                        <p className="chakra-text css-nhq6ym">國興資訊</p>
                                                        <p className="chakra-text css-1ndgkws">2020/02-2021/02</p>
                                                    </div>
                                                    <div className="css-19q6myf">
                                                        <p className="chakra-text css-0">The course planning and organization is very complete and challenging. You can become a DeFi master if fully absorb the content!
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="css-1p2x7r1">
                                                    <div className="css-2tjxfx">
                                                        <p className="chakra-text css-nhq6ym">國立臺中科技大學</p>
                                                        <p className="chakra-text css-1ndgkws">2017/09-2021/06</p>
                                                    </div>
                                                    <div className="css-19q6myf">
                                                        <p className="chakra-text css-0">The course planning and organization is very complete and challenging. You can become a DeFi master if fully absorb the content!
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='css-z4vrou'>
                                                <div className="css-1p2x7r1">
                                                    <div className="css-2tjxfx">
                                                        <p className="chakra-text css-nhq6ym">典時成金</p>
                                                        <p className="chakra-text css-1ndgkws">2017/07-2019/01</p>
                                                    </div>
                                                    <div className="css-19q6myf">
                                                        <p className="chakra-text css-0">The course planning and organization is very complete and challenging. You can become a DeFi master if fully absorb the content!
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
                        <div name="service">
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
                                                            <p>Project Scope/Description：提供員工進行績效評估、升遷的系統 同時也協助 HR 們進行表單狀態追蹤、產生報表、借用會議室</p>
                                                            <p>Achievements：1.開發新加坡員工Performances功能&emsp;2.重構Promotion，改善系統穩定性&emsp;3.開發UI Promotion、Technical Review報表</p>
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
                                                            <p>Project Scope/Description：協助HR進行人才招募，記錄各式面試紀錄、產生報表，根據招募結果與求職者聯繫</p>
                                                            <p>Achievements：1.開發面試官後台功能，使面試相關表單可以線上填寫&emsp;2.優化表單填寫功能，使表單題目可以動態更新且能版本控制&emsp;3.開發排程功能，寄送面試相關提醒信</p>
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
                                                            <p>Project Scope/Description：提供全公司員工申請課程、開設課程、管理課程預算，提供講師與管理者查看使用者Feedback、ASK，提供員工查看必修課程相關資訊，產生成報表。</p>
                                                            <p>Achievements：1.協助MIS升級Server&emsp;2.使新加坡員工能使用部分功能&emsp;3.維護更新鈦坦學院功能</p>
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
                                                            <p>Project Scope/Description：提供 HR 寄發考試信件、考試管理，並串接至 TTC 招募系統</p>
                                                            <p>Achievements：1.新增新職位的考試&emsp;2.協助查找到外部串接網站的考試額度已超額並告知 HR</p>
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
                                                            <p>Project Scope/Description：提供公司員工進行出差、住宿申請 並提供 Admin 進行住宿管理、寄信</p>
                                                            <p>Achievements：1. 將專案 CI/CD 移轉至Gitlab 2.協助進行 2021 系統 Feedback 更新</p>
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
                                                            <p>Project Scope/Description：校園招募系統，跟據求職者填寫的表單寄送考試信或書審通知。</p>
                                                            <p>Achievements：新增新求職職位，串聯Exam寄送考試信</p>
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
                                                            <p>Project Scope/Description：</p>
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
                                                            <p>Project Scope/Description：</p>
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
                        <div className="css-1ycfcnn">
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
                                                    <p className="chakra-text css-131hjci">線上預約輔導系統</p>
                                                </a>
                                                <p className="hideSideProject">Technologies：C#, ASP.Net MVC, MSSQL, Java Script , jQuery , React</p>
                                                <p className="hideSideProject" style={{ marginBottom: 10 }}>Project Scope/Description：提供一個線上預約輔導系統，學生可透過系統線上預約，並隨時查看預約狀態，班級老師和輔導老師也可以了解學生輔導的狀況和查詢輔導紀錄，使控管更加方便。</p>
                                            </div>
                                        </div>
                                        <div tabIndex="-1" className="css-12t0pqb" style={{ width: `100%`, display: `inline-block` }}>
                                            <div className="css-1hnpd1e">
                                                <img alt="work01" src={sideProject6} width={900} className="chakra-image css-1l6wnt8" />
                                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.fxhash.xyz/generative/10539">
                                                    <p className="chakra-text css-131hjci">Eye Opener-不良用眼行為警示系統</p>
                                                </a>
                                                <p className="hideSideProject">Technologies：C#, NET Core 3.1,Python 3.8,OpenCV, MSSQL, Java Script , jQuery ,React ,DvaJS</p>
                                                <p className="hideSideProject" style={{ marginBottom: 10 }}>Project Scope/Description：本系統藉由兩個鏡頭蒐集使用者使用電腦時的狀態，將視距及視角輸入影像進行特徵比對和光線感測，並使用OpenCV做使用者與電腦間的距離檢測，判斷受試者當前是否為正確狀態，若為錯誤則給予警告。</p>
                                            </div>
                                        </div>
                                        <div tabIndex="-1" className="css-12t0pqb" style={{ width: `100%`, display: `inline-block` }}>
                                            <div className="css-1hnpd1e">
                                                <img alt="work01" src={sideProject5} width={900} className="chakra-image css-1l6wnt8" />
                                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.fxhash.xyz/generative/10539">
                                                    <p className="chakra-text css-131hjci">旅行書蛙</p>
                                                </a>
                                                <p className="hideSideProject">Technologies：C#, NET Core 3.1, MSSQL, Java Script , jQuery , React, Ant Design</p>
                                                <p className="hideSideProject" style={{ marginBottom: 10 }}>Project Scope/Description：透過主題標籤或定位功能尋找附近展覽或書籍，填寫學習心得後匯入學習歷程。</p>
                                            </div>
                                        </div>
                                        <div tabIndex="-1" className="css-12t0pqb" style={{ width: `100%`, display: `inline-block` }}>
                                            <div className="css-1hnpd1e">
                                                <img alt="work01" src={sideProject1} width={900} className="chakra-image css-1l6wnt8" />
                                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.fxhash.xyz/generative/10539">
                                                    <p className="chakra-text css-131hjci">個人網站</p>
                                                </a>
                                                <p className="hideSideProject">Technologies：Java Script , jQuery , React, Gatsby.js , GraphQL , ChakraUI</p>
                                                <p className="hideSideProject" style={{ marginBottom: 10 }}>Project Scope/Description：響應式動態個人網站和寄信功能。</p>
                                            </div>
                                        </div>
                                        <div tabIndex="-1" className="css-12t0pqb" style={{ width: `100%`, display: `inline-block` }}>
                                            <div className="css-1hnpd1e">
                                                <img alt="work01" src={sideProject4} width={900} className="chakra-image css-1l6wnt8" />
                                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.fxhash.xyz/generative/10539">
                                                    <p className="chakra-text css-131hjci">線上租車系統</p>
                                                </a>
                                                <p className="hideSideProject">Technologies：C#, ASP.Net MVC, MSSQL, Java Script , jQuery</p>
                                                <p className="hideSideProject" style={{ marginBottom: 10 }}>Project Scope/Description：會員管理，訂單管理，線上租車系統。</p>
                                            </div>
                                        </div>
                                        <div tabIndex="-1" className="css-12t0pqb" style={{ width: `100%`, display: `inline-block` }}>
                                            <div className="css-1hnpd1e">
                                                <img alt="work01" src={sideProject3} width={900} className="chakra-image css-1l6wnt8" />
                                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.fxhash.xyz/generative/10539">
                                                    <p className="chakra-text css-131hjci">精品購物網站</p>
                                                </a>
                                                <p className="hideSideProject">Technologies：HTML5 , CSS3 , Java Script , jQuery , Bootstrap</p>
                                                <p className="hideSideProject" style={{ marginBottom: 10 }}>Project Scope/Description：響應式精品購物網站介面</p>
                                            </div>
                                        </div>
                                        <div tabIndex="-1" className="css-12t0pqb" style={{ width: `100%`, display: `inline-block` }}>
                                            <div className="css-1hnpd1e">
                                                <img alt="work01" src={sideProject2} width={900} className="chakra-image css-1l6wnt8" />
                                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.fxhash.xyz/generative/10539">
                                                    <p className="chakra-text css-131hjci">美妝購物網站</p>
                                                </a>
                                                <p className="hideSideProject">Technologies：HTML5 , CSS3 , Java Script , jQuery , Bootstrap</p>
                                                <p className="hideSideProject" style={{ marginBottom: 10 }}>Project Scope/Description：響應式美妝購物網站介面</p>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <img src={Doublehand} className="chakra-image css-1eqhctw" />
                        </div>
                    </div>
                    <div justify="center" className="css-8atqhb">
                        <div name="Contact">
                            <div className="css-1yku1s2">
                                <div className="css-ejdpnu">
                                    <div className="css-1985z01">
                                        <div className="css-23l46w">
                                            <p className="chakra-text css-1lejymi">Contact</p>
                                            <p className="chakra-text css-0">→</p>
                                        </div>
                                        <p className="chakra-text css-7w6khc">The Z Institute provides professional blockchain consultants and customized development. We have profound development experience in EVM-compatible blockchains such as Ethereum, Binance Smart Chain, EOS, and Solana. Includes NFTs, games, token contracts, etc. We accept anonymous developement and 100% crypto currency payment. We also cooperate with lawyers to deal with crypto currency's legal issue. </p>
                                        <div className="chakra-stack css-mnsd50">
                                            <p className="chakra-text css-0">Email:ok96305@gmail.com</p>
                                            <div className="chakra-stack css-y7lu36">
                                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://discord.gg/WtCFxxJSu4" style={{ marginBottom: 0 }}>
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z">
                                                        </path>
                                                    </svg>
                                                </a>
                                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.facebook.com/the.z.institute">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                                    </svg>
                                                </a>
                                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://mobile.twitter.com/the_z_institute">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                                                        </path>
                                                    </svg>
                                                </a>
                                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.youtube.com/channel/UC42E-54LCmsclJJ2-LZ7RdA">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                                                    </svg>
                                                </a>
                                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.instagram.com/the_z_institute/">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="css-ez5eip">
                                        <form>
                                            <div className="chakra-stack css-uc6l60">
                                                <div className="chakra-stack css-1y8x67">
                                                    <div role="group" className="chakra-form-control css-1kxonj9">
                                                        <label htmlFor="name" id="field-31-label" className="chakra-form__label css-2gx1h6">Name</label>
                                                        <input name="name" placeholder="Name" id="field-31" className="chakra-input css-1c6j008" />
                                                    </div>
                                                </div>
                                                <div role="group" className="chakra-form-control css-1kxonj9">
                                                    <label htmlFor="mail" id="field-33-label" className="chakra-form__label css-2gx1h6">Email address</label>
                                                    <input name="mail" placeholder="Your Mail" id="field-33" className="chakra-input css-1c6j008" />
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
                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://discord.gg/WtCFxxJSu4">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z">
                                        </path>
                                    </svg>
                                </a>
                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.facebook.com/the.z.institute">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z">
                                        </path>
                                    </svg>
                                </a>
                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://mobile.twitter.com/the_z_institute">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                                        </path>
                                    </svg>
                                </a>
                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.youtube.com/channel/UC42E-54LCmsclJJ2-LZ7RdA"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z">
                                    </path>
                                </svg>
                                </a>
                                <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="https://www.instagram.com/the_z_institute/">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" focusable="false" className="chakra-icon css-1hd1wp4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
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