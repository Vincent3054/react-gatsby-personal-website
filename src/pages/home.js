import React from 'react'
import { Link } from 'gatsby'
import "../components/home.css"
import Layout from '../components/layout'
import { Text } from '@chakra-ui/react'

//SVG、IMG、MP4、WEBM
import logo from '../images/logo.e90c34b1523b8ee307afe17ae9c2446a.svg';
import education1 from '../images/education1.png';
import education2 from '../images/circle_web2ToWeb3.7005e51f02c9567152f67fad8c71cf87.svg';
import education3 from '../images/corner.ea0282e4b9fede9ef0c75c727e391b9f.svg';
import web3 from '../images/nft.209c8c759d77da40806b.gif';
import video from '../images/waferZ.bf7759f9bc7b42306d79.mp4';
import video_jpg from '../images/waferZ.003eba1ae736e79d5e50.jpg';
import roboat from '../images/roboat.png';
import codeMp4 from '../images/service.e7f614dd016d6eec8cb3.mp4';
import codeimg from '../images/zinstitute.fcde5b683f257af192b7.gif';
import eth from '../images/ethereum.9337f8b2d0b3d9253d60987fefb14608.svg';
import ethtext from '../images/ethtest.png';
import downWebm from '../images/education.ddd6aff58f188f9d70d7.webm';
import downRightGif from '../images/arrow.657de3bced7b4f5808d0.gif';
import downRightStyle from '../images/arrowGroup.a854994e6e9f3fb9f9c05ecfcf3b2ea5.svg';

const NewPage = () => (
    <div className='chakra-ui-light'>
        <div id='root'>        
            <div className="css-2hw6dr" style={{ opacity: 0 }}>
                <img src={logo} className="chakra-image css-dov9nq" style={{ opacity: 1, width: 200 }} />
            </div>
            <div className='css-1p8qfhk'>
                <div className="css-iybxr5" style={{ opacity: 1, transform: undefined }}>
                    <div className="css-wm488v" style={{ backdropFilter: `blur(14px)` }}>
                        <a className="chakra-link css-2n2ro8">
                            <img src={logo} className="chakra-image css-tcg55f" style={{ marginBottom: 0 }} />
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
                            <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-183pgf2">
                                <path fill="currentColor" d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="css-zo65ya" style={{ backdropFilter: `blur(14px)` }}>
                <p className="chakra-text css-1lejymi">Join us</p>
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
                                                <img src={roboat} className="chakra-image css-15tfjzk" />
                                            </div>
                                        </div>
                                        <div className="css-1s9109j">
                                            <p className="chakra-text css-ak2fvk" style={{ transform: `translateX(-149.937deg) translateZ(0px) `, animation:`translateX 30s linear infinite`}}>Hack the future. Enlighten the future</p>
                                        </div>
                                    </div>
                                    <div className="css-1mxnfqb">
                                        <div className="css-1x6zq7v">
                                            <img src={eth} className="chakra-image css-1x97c6v " />
                                        </div>
                                        <p className="chakra-text css-12u5jte">coming soon →</p>
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
                                                    <img src={education2} className="chakra-image css-8atqhb" style={{ transform: `rotate(157.359deg) translateZ(0px) `,animation: `rotate 10s linear infinite` }} />
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
                                        <p className="chakra-text css-1ruhbjz" style={{ transform: `translateX(0deg) translateZ(0px)` ,animation: `translateXmix 2s ease infinite` }}>coming soon →</p>
                                    </div>
                                </div>
                                <div className="css-b95f0i">
                                    <div className="css-13pmxen">
                                        <div className="css-b95f0i">
                                            <div className="css-es8c1t">
                                                <video src={video} loop autoPlay preload="auto" type="video" className="css-xj4wuc" style={{ position: `absolute`, Zindex: 5, objectFit: `cover` }}></video>
                                                <img src={video_jpg} className="chakra-image css-dlsxfg"/>
                                            </div>
                                            <div className="css-q93ar1">
                                                <div className="css-1r6zn15">
                                                    <img src={roboat} className="chakra-image css-yikrym" style={{marginTop:20, transformStyle: 'preserve-3d', transform: `rotateY(164.736deg) translateZ(0px)`,animation: `rotateY 3s ease-out infinite`}} />
                                                </div>
                                                <div className="css-93mbcm">
                                                    <div spacing="5" className="css-1f847os" style={{ transform: `translateX(-765.665px) translateZ(0px)`, animation:`translateX 30s linear infinite`}}>
                                                        <p className="chakra-text css-16w502t" ><Text fontSize='24px' color='white'>Hack the future. Enlighten the future</Text></p>
                                                        <p className="chakra-text css-16w502t" ><Text fontSize='24px' color='white'>Hack the future. Enlighten the future</Text></p>
                                                        <p className="chakra-text css-16w502t" ><Text fontSize='24px' color='white'>Hack the future. Enlighten the future</Text></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="css-1d0hevl">
                                            <div className="css-b95f0i">
                                                <div className="css-11mzmwc">
                                                    <video src={codeMp4} loop="loop" autoplay="autoplay" preload="auto" type="video" className="css-3q72at"></video>
                                                </div>
                                                <div className="css-1pca8xd">
                                                    <img src={codeimg} className="chakra-image css-6gs9hh" />
                                                </div>
                                            </div>
                                            <div className="css-1cvzsx5">
                                                <div className="css-jiugte">
                                                    <img src={eth} className="chakra-image css-8atqhb" style={{ transform: `rotateY('352.368deg') translateZ(0px)`,animation: `rotateY 5s ease-in infinite` }} />
                                                </div>
                                                <img src={ethtext} className="chakra-image css-17kn5dq" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="css-vcje4k">
                                        <div className="css-1x20tsh">
                                            <div className="css-1s832on">
                                                <p className="chakra-text css-3o4yf2" style={{ transformStyle: 'preserve-3d', transform: `rotateX(342.828deg) translateZ(0px)`,animation: `rotateX 3s ease-in infinite` }}>Blockchain</p>
                                                <div className="css-ov4cx">
                                                    <div className="css-1q80jlu">
                                                        <video src={downWebm} loop autoPlay preload="auto" type="video" className="css-1ol22ox" style={{ position: `absolute`, Zindex: 5, objectFit: `cover`, }}></video>
                                                    </div>
                                                    <div className="chakra-stack css-589axb">
                                                        <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="#" style={{marginRight:10}}>
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" focusable="false" className="chakra-icon css-13otjrl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                                                            </svg>
                                                        </a>
                                                        <a target="_blank" rel="noopener" className="chakra-link css-2n2ro8" href="#">
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" focusable="false" className="chakra-icon css-13otjrl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="css-58f8ah">
                                                <img src={downRightGif} className="chakra-image css-6gs9hh" />
                                            </div>
                                        </div>
                                        <div className="css-jflkg2">
                                            <img src={downRightStyle} className="chakra-image css-8atqhb" style={{marginBottom:6}} />
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
                                            <img src={downRightStyle} className="chakra-image css-128e4yw" style={{marginBottom:0,marginTop:6}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default NewPage