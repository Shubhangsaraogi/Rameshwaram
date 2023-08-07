import { Link } from 'react-router-dom'
import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';
import 'animate.css';
import mapImage from '../styles/img/map.png';
import blueHome from "../styles/img/blueBigHome.jfif";
import people from "../styles/img/workingOnLap.jfif";
import modernHome from "../styles/img/modernHome.jfif";
import woodHome from "../styles/img/woodenHouseGreenGarden.jfif";
import '../styles/styles.css';
const Home = () => {
    const [show, doShow] = useState({
        item: '',itemfl:'',itemfr:'',itemfc:'',itemsec:'',itemtl:'',itemtr:'',itemLocation:''
    });
    const ref = useRef(null);
    const featuredLeft = useRef(null);
    const featuredCenter = useRef(null);
    const featuredRight = useRef(null);
    const section = useRef(null);
    const teamLeft = useRef(null);
    const teamRight = useRef(null);
    const location = useRef(null);

    useEffect(() => {
        const topPos = element => element.getBoundingClientRect().top;
        const div1Pos = topPos(ref.current);
        const featuredLeftPos = topPos(featuredLeft.current);
        const featuredRightPos = topPos(featuredRight.current);
        const featuredCenterPos = topPos(featuredCenter.current);
        const sectionPos = topPos(section.current);
        const teamLeftPos = topPos(teamLeft.current);
        const teamRightPos = topPos(teamRight.current);
        const locationPos = topPos(location.current);

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;
            console.log('scroolpos:' + scrollPos);
            console.log('div1pos 1st sec:' + div1Pos);
            console.log('fL 1st sec:' + featuredLeftPos);
            div1Pos < scrollPos?doShow(state => ({ ...state, item: 'animate__zoomInDown' })):doShow(state => ({ ...state, item: '' }));
            featuredLeftPos < scrollPos?doShow(state => ({ ...state, itemfl: 'animate__backInLeft' })):doShow(state => ({ ...state, itemfl: '' }));
            featuredRightPos < scrollPos?doShow(state => ({ ...state, itemfr: 'animate__backInRight' })):doShow(state => ({ ...state, itemfr: '' }));
            featuredCenterPos < scrollPos?doShow(state => ({ ...state, itemfc: 'animate__backInUp' })):doShow(state => ({ ...state, itemfc: '' }));
            sectionPos < scrollPos?doShow(state => ({ ...state, itemsec: 'animate__jackInTheBox' })):doShow(state => ({ ...state, itemsec: '' }));
            teamLeftPos < scrollPos?doShow(state => ({ ...state, itemtl: 'animate__backInLeft' })):doShow(state => ({ ...state, itemtl: '' }));
            teamRightPos < scrollPos?doShow(state => ({ ...state, itemtr: 'animate__backInRight' })):doShow(state => ({ ...state, itemtr: '' }));
            locationPos < scrollPos?doShow(state => ({ ...state, itemLocation: 'animate__rollIn' })):doShow(state => ({ ...state, itemLocation: '' }));
            
          
           
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    console.log("3" + show.item);
    return (
        <>

            <div id="__next" data-reactroot="">
                <div id="main-body" className="min-h-full w-full flex flex-col smooth-scroll" style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 400 }}>
                    <div className="main-page bg-img">

                        <header id="website-header" className="!z-[2000]" >
                            <div className="header-grid-bg grid items-center lg:gap-6 xl:gap-10 mx-auto pt-4 pb-4 px-6 lg:px-12" >
                                <div className="col-span-2 lg:col-span-1 truncate">
                                    <Link className="max-w-full overflow-hidden grid" target="_self" to="">
                                        <h1 className={`animate__animated animate__bounceInRight   logo heading-small lg:heading-medium overflow-hidden whitespace-nowrap overflow-ellipsis`} >
                                            Rameshwaram</h1>
                                    </Link></div>
                                <div className="hidden lg:flex item-center justify-end gap-10 lg:col-span-2">
                                    <ul className="lg:flex items-center gap-x-4 gap-y-2 flex-wrap justify-end hidden" />
                                    <div className="hidden lg:flex items-center flex-shrink-0"><Link className="animate__animated  animate__bounceInRight button primary xl !text-2xl !py-1.5" target="_blank" style={{ background: 'white', borderRadius: '8px', color: 'black' }} to="">Call
                                        Us</Link></div>
                                </div>
                                <div className="ml-auto lg:hidden"><button className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none" style={{ color: '#000000' }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24" className="block h-5 w-5" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg></button></div>
                            </div>
                        </header>

                        <section id="banner-0" data-combine-with-header="true" data-text-color="#FFFFFF" className="flex-shrink-0 flex relative z-10 items-center" >
                            <div className="w-full h-full absolute top-0 left-0 z-0" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} />
                            <div className="relative container mx-auto px-6 z-10 pt-12 lg:pt-32 xl:pt-40 pb-12 lg:pb-32 xl:pb-40">
                                <div className=" animate__animated animate__bounceInLeft max-w-3xl text-left ml-0 mr-auto">
                                    <h2 className="heading-xlarge mb-6 break-word text-left" style={{ color: '#FFFFFF', fontFamily: '"Ubuntu", sans-serif', fontWeight: 700 }}>Discover
                                        dream homes in Indore</h2>
                                    <p className="body-large" style={{ color: '#FFFFFF', fontFamily: '"Open Sans", sans-serif', fontWeight: 400 }}>Find
                                        your perfect abode with Rameshwaram's top-notch real estate services</p><Link className="button primary xl mt-6 lg:mt-8 w-full md:w-max" target="_blank" style={{ background: 'white', borderRadius: '8px', color: 'black' }} to=" ">Explore
                                            Now</Link>
                                </div>
                            </div>
                        </section>

                    </div>

                    <section id="quote-1" className="flex flex-none flex-shrink-0 relative z-10 items-center" style={{ backgroundColor: '#ffffff', minHeight: '240px' }}>
                        <div className="container mx-auto testimonials-carousel relative z-10 pt-12 lg:pt-14 xl:pt-20 pb-12 lg:pb-14 xl:pb-20">
                            <div ref={ref} className={`${show.item} animate__animated flex h-full my-auto`}>
                                <div className={` max-w-5xl flex flex-col gap-4 justify-center text-center mx-auto items-center`}>
                                    <h3 className={` heading-medium`} style={{ color: '#111827', fontFamily: '"Ubuntu", sans-serif', fontWeight: 700 }}>
                                        I had a great experience working with Rameshwaram for my real estate needs in Indore. The team was professional, knowledgeable, and provided excellent customer service. Thank you for helping me find my dream home!
                                    </h3>
                                    <p className="body-large" style={{ color: '#111827' }}>- Aria</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="list-2" className="featured flex flex-none flex-shrink-0 relative z-10 items-center">
                        <div className="w-full h-full absolute top-0 left-0 z-0" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} />
                        <div className="container mx-auto relative z-10 pt-12 lg:pt-14 xl:pt-20 pb-12 lg:pb-14 xl:pb-20">
                            <h2 className="heading-large mb-6 text-center" style={{ color: '#FFFFFF', fontFamily: '"Ubuntu", sans-serif', fontWeight: 700 }}>Featured</h2>
                            <div className="flex flex-col sm:flex-row flex-wrap gap-10 justify-center"><span className="hidden justify-center justify-end justify-start" />
                                <div ref={featuredLeft} className={`${show.itemfl} animate__animated  block-list-item w-full`}>
                                    <div className="wow   animate__backInUp flex-shrink-0 relative mb-6 aspect-w-3 aspect-h-2">
                                        <span
                                            style={{
                                                boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0
                                            }}>

                                            <img
                                                alt="Residential Property Services"
                                                src={blueHome}
                                                decoding="async" data-nimg="fill"

                                                className="rounded-sm md:rounded-md lg:rounded-lg"
                                                loading="lazy" />
                                        </span>
                                    </div>
                                    <div className="text-center">
                                        <p className="heading-medium mb-4" style={{ color: '#FFFFFF', fontFamily: '"Ubuntu", sans-serif', fontWeight: 700 }}>
                                            Residential Property Services</p>
                                        <div className="rich-text-block" style={{ color: '#FFFFFF' }}>Find your dream home with our
                                            professional assistance. Explore Link wide range of residential properties for sale.
                                        </div><Link className="button primary lg mt-4" target="_self" style={{ background: '#000000', borderRadius: '8px', color: '#FFFFFF', border: '2px solid #000000' }} to=" ">More
                                            info</Link>
                                    </div>
                                </div>
                                <div ref={featuredCenter} className={`${show.itemfc} animate__animated     block-list-item w-full`}>
                                    <div className="flex-shrink-0 relative mb-6 aspect-w-3 aspect-h-2"><span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>

                                        <img
                                            alt="Commercial Property Services"
                                            src={modernHome}
                                            decoding="async" data-nimg="fill"

                                            className="rounded-sm md:rounded-md lg:rounded-lg"
                                            loading="lazy" />
                                    </span></div>
                                    <div className="text-center">
                                        <p className="heading-medium mb-4" style={{ color: '#FFFFFF', fontFamily: '"Ubuntu", sans-serif', fontWeight: 700 }}>
                                            Commercial Property Services</p>
                                        <div className="rich-text-block" style={{ color: '#FFFFFF' }}>Grow your business with the perfect
                                            commercial space. Discover Link variety of commercial properties for lease or purchase.
                                        </div><Link className="button primary lg mt-4" target="_self" style={{ background: '#000000', borderRadius: '8px', color: '#FFFFFF', border: '2px solid #000000' }} to=" ">More
                                            info</Link>
                                    </div>
                                </div>
                                <div ref={featuredRight} className={`${show.itemfr} animate__animated  block-list-item w-full`}>
                                    <div className="flex-shrink-0 relative mb-6 aspect-w-3 aspect-h-2"><span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>
                                        <img
                                            alt="Property Investment Services"
                                            src={woodHome}
                                            decoding="async" data-nimg="fill"

                                            className="rounded-sm md:rounded-md lg:rounded-lg"
                                            loading="lazy" />
                                    </span></div>
                                    <div className="text-center">
                                        <p className="heading-medium mb-4" style={{ color: '#FFFFFF', fontFamily: '"Ubuntu", sans-serif', fontWeight: 700 }}>
                                            Property Investment Services</p>
                                        <div className="rich-text-block" style={{ color: '#FFFFFF' }}>Maximize your returns with strategic
                                            property investments. Take advantage of our expert advice and investment
                                            opportunities.</div><Link className="button primary lg mt-4" target="_self" style={{ background: '#000000', borderRadius: '8px', color: '#FFFFFF', border: '2px solid #000000' }} to=" ">More
                                                info</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="list-3" className="flex flex-none flex-shrink-0 relative z-10 items-center" style={{ backgroundColor: '#FFFFFF', minHeight: '240px' }}>
                        <div className="container mx-auto relative z-10 pt-12 lg:pt-14 xl:pt-20 pb-12 lg:pb-14 xl:pb-20">
                            <div ref={section} className={`${show.itemsec} animate__animated flex flex-col sm:flex-row flex-wrap gap-10 justify-center`}><span className="hidden justify-center justify-end justify-start" />
                                <div className="block-list-item w-full">
                                    <div className="flex-shrink-0 relative mb-6 w-12 h-12 mx-auto">
                                        <div className="absolute w-full h-full" style={{ backgroundColor: '[object Object]', WebkitMaskImage: 'url(https:// static.thenounproject.com png 45223-200.png)', }}>
                                        </div>
                                    </div>
                                    <div className={` text-center`}>
                                        <p className="reveal   animate__backInUp heading-medium mb-4" style={{ color: '#111827', fontFamily: '"Ubuntu", sans-serif', fontWeight: 700 }}>
                                            Over 1000 properties listed</p>
                                        <div className="rich-text-block" style={{ color: '#111827' }} />
                                    </div>
                                </div>
                                <div className="block-list-item w-full">
                                    <div className="flex-shrink-0 relative mb-6 w-12 h-12 mx-auto">
                                        <div className="absolute w-full h-full" style={{ backgroundColor: '[object Object]', WebkitMaskImage: 'url(https:// static.thenounproject.com png 45223-200.png)', }}>
                                        </div>
                                    </div>
                                    <div className={` text-center`}>
                                        <p className="heading-medium mb-4" style={{ color: '#111827', fontFamily: '"Ubuntu", sans-serif', fontWeight: 700 }}>
                                            Expert knowledge of local market</p>
                                        <div className="rich-text-block" style={{ color: '#111827' }} />
                                    </div>
                                </div>
                                <div className="block-list-item w-full">
                                    <div className="flex-shrink-0 relative mb-6 w-12 h-12 mx-auto">
                                        <div className="absolute w-full h-full" style={{ backgroundColor: '[object Object]', WebkitMaskImage: 'url(https:// static.thenounproject.com png 45223-200.png)', }}>
                                        </div>
                                    </div>
                                    <div className={` text-center`}>
                                        <p className="heading-medium mb-4" style={{ color: '#111827', fontFamily: '"Ubuntu", sans-serif', fontWeight: 700 }}>
                                            Personalized service for every client</p>
                                        <div className="rich-text-block" style={{ color: '#111827' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <section id="hero-4" className="team flex flex-none flex-shrink-0 relative z-10 items-center">
                <div className="w-full h-full absolute top-0 left-0 z-0" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} />
                <div className="container mx-auto relative z-10 pt-12 lg:pt-14 xl:pt-20 pb-12 lg:pb-14 xl:pb-20">
                    <div className="flex flex-col lg:flex-row w-full gap-10 lg:gap-20 items-center">
                        <div ref={teamLeft} className={`${show.itemtl} animate__animated flex-1 flex flex-col items-center lg:items-start`}>
                            <div className={` rich-text-block`} style={{ color: '#FFFFFF' }}>
                                <h2>Meet the team</h2>
                                <p />
                                <p>At Rameshwaram, our team is comprised of experienced real estate professionals who
                                    are dedicated to helping our clients achieve their goals. From our agents to our
                                    support staff, every member of our team is committed to providing exceptional
                                    service and ensuring that our clients have the best possible experience when working
                                    with us. We work tirelessly to stay up-to-date on the latest trends and technologies
                                    in the industry, and we are always looking for new and innovative ways to help our
                                    clients succeed. Get to know our team today!</p>
                                <p />
                            </div>
                        </div>
                        <div ref={teamRight} className={`${show.itemtr} animate__animated flex-1 flex w-full justify-center lg:justify-start`}>
                            <div className={` flex-shrink-0 relative w-full mx-auto aspect-w-16 aspect-h-9`}><span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>
                                <img
                                    alt="We provide high quality services"
                                    src={people}
                                    decoding="async" data-nimg="fill"
                                    style={{
                                        position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block',
                                        width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover', objectPosition: 'center center'
                                    }}
                                    className="rounded-2xl md:rounded-3xl lg:rounded-4xl"
                                    loading="lazy" /></span></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="location-5" className="location-img relative flex z-10 !min-h-80vh md:!min-h-50vh" style={{
                backgroundImage: `url(${mapImage})`,
                backgroundPosition: 'center center', backgroundSize: 'cover 240px', minHeight: '240px'
            }}>
                <div className="relative z-10 container mx-auto py-12 lg:py-14 xl:py-20"
                >
                    <div ref={location} className={`${show.itemLocation} animate__animated flex flex-row w-full`}>
                        <div className="w-full md:w-1/2 xl:w-2/5 flex flex-col gap-6 p-6 lg:p-10 shadow rounded-sm md:rounded-md lg:rounded-lg" style={{ backgroundImage: 'linear-gradient(45deg, #8b2e2e, #7aa0ff)' }}>
                            <div>
                                <p className="heading-medium mb-4" style={{ color: '#FFFFFF', fontFamily: '"Ubuntu", sans-serif', fontWeight: 700 }}>
                                    Location</p>
                                <pre className="body-normal" style={{ color: '#FFFFFF', fontFamily: '"Open Sans", sans-serif', fontWeight: 400 }}>Indore, Madhya Pradesh, India</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact-6" className="flex flex-none flex-shrink-0 relative z-10 items-center" style={{ backgroundImage: 'linear-gradient(45deg, #8b2e2e, #7aa0ff)', minHeight: '240px' }}>
                <div className="container mx-auto relative z-10 pt-12 lg:pt-14 xl:pt-20 pb-12 lg:pb-14 xl:pb-20">
                    <div className="flex flex-col w-full gap-10 lg:gap-20 lg:flex-row">
                        <div className="w-full lg:w-1/2 lg:mt-10">
                            <div className="rich-text-block" style={{ color: '#FFFFFF' }}>
                                <h3>Contact Us Now</h3>
                                <p>Fill out the form below to get in touch with us. We are here to answer any questions
                                    you may have and help you with your real estate needs.</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <form className="block" noValidate>
                                <div className="flex flex-col lg:flex-row gap-4 mb-4">
                                    <div className="flex-1"><label className="mb-1 body-small" style={{ color: '#FFFFFF' }}>Name</label><input type="text" className="input border-none !shadow-none" style={{ borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.07)', color: '#FFFFFF' }} />
                                    </div>
                                    <div className="flex-1"><label className="mb-1 body-small" style={{ color: '#FFFFFF' }}>E-mail</label><input type="text" className="input border-none !shadow-none " style={{ borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.07)', color: '#FFFFFF' }} />
                                    </div>
                                </div>
                                <div className="mb-4"><label className="mb-1 body-small" style={{ color: '#FFFFFF' }}>Message</label><textarea className="input border-none !shadow-none" rows={5} style={{ borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.07)', color: '#FFFFFF' }} defaultValue={""} />
                                </div>
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                    <div className="text-xs max-w-sm text-gray-500" style={{ color: '#FFFFFF' }}>This site is
                                        protected by reCAPTCHA and the Google<Link target="_blank" className="font-bold" style={{ color: '#FFFFFF' }} to="/https://policies.google.com/privacy"> Privacy
                                            Policy</Link> and<Link target="_blank" className="font-bold" style={{ color: '#FFFFFF' }} to="https://policies.google.com/terms"> Terms of Service</Link> apply.</div>
                                    <button type="submit" className="button primary lg w-36 mt-2 md:mt-0" style={{ background: '#000000', borderRadius: '8px', color: '#FFFFFF', border: '2px solid #000000' }}>Send</button>
                                </div>
                                <div className="hidden" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div className="Toastify" />
            <footer id="website-footer" className="flex-1 relative z-10" style={{ backgroundImage: 'linear-gradient(315deg, #ff0005, #4885b6)', color: '#FFFFFF' }}>
                <div className="relative z-10 container mx-auto pt-12 lg:pt-14 xl:pt-20 pb-12 lg:pb-14 xl:pb-20">
                    <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-12">
                        <div className="flex flex-col gap-6 items-start lg:max-w-[30vw]">
                            <div className="max-w-full overflow-hidden grid">
                                <h3 className="reveal heading-medium overflow-hidden whitespace-nowrap overflow-ellipsis xl:heading-small" style={{ color: '#FFFFFF', fontFamily: '"Ubuntu", sans-serif', fontWeight: 700 }}>
                                    Rameshwaram</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
            <div style={{ position: 'fixed', top: '1px', left: '1px', width: '1px', height: 0, padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0, display: 'none' }}>
            </div>
        </>
    )
}

export default Home;
