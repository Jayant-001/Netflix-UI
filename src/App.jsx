import { useState } from "react";

function App() {
    const [show, setShow] = useState(-1);

    const faq = [
        {
            question: "What is Netflix?",
            answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
        },
        {
            question: "How much does Netflix cost?",
            answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
        },
        {
            question: "Where can I watch?",
            answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
        },
        {
            question: "How do I cancel?",
            answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
        },
        {
            question: "What can I watch on Netflix?",
            answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
        },
        {
            question: "Is Netflix good for kids?",
            answer: "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
        },
    ];

    return (
        <>
            <div className="showcase">
                <div className="showcase-top">
                    <div className="navbar">
                        <img src="./netflix.png" alt="" className="logo" />
                        <div className="logo-right">
                            <button className="english">
                                <img
                                    src="./images/globe.png"
                                    alt=""
                                    className="globe"
                                />
                                <span>English</span>
                                <img
                                    src="./images/down-arrow.png"
                                    alt=""
                                    className="down-arr"
                                />
                            </button>
                            <button className="sign-in">Sign In</button>
                        </div>
                    </div>
                    <div className="title-container">
                        <div className="title-up">
                            <h1 className="ultimate">
                                Unlimited movies, TV shows and more
                            </h1>
                            <h2 className="watch">
                                Watch anywhere. Cancel anytime.
                            </h2>
                            <p className="ready">
                                Ready to watch? Enter your email to create or
                                restart your membership.
                            </p>
                        </div>
                        <div className="title-down">
                            <input
                                type="email"
                                name="myemail"
                                id="eml"
                                placeholder="Email address"
                            />
                            <button className="started">
                                <span>Get Started</span>
                                <img
                                    src="./images/next.png"
                                    alt=""
                                    className="next-arr"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="second-container">
                <div className="items">
                    <img
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png"
                        alt="item-one"
                    />
                    <h2>Enjoy on your TV</h2>
                    <p>
                        Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple
                        TV, Blu-ray players and more.
                    </p>
                </div>
                <div className="items">
                    <img
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/watchEverywhere/en.png"
                        alt="item-two"
                    />
                    <h2>Watch everywhere</h2>
                    <p>
                        Stream unlimited movies and TV shows on your phone,
                        tablet, laptop, and TV.
                    </p>
                </div>
                <div className="items">
                    <img
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/kids/en-GB.png"
                        alt="item-three"
                    />
                    <h2>Create profiles for kids</h2>
                    <p>
                        Send children on adventures with their favourite
                        characters in a space made just for them—free with your
                        membership.
                    </p>
                </div>
                <div className="items">
                    <img
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/en.png
            "
                        alt="item-four"
                    />
                    <h2>Download your shows to watch offline</h2>
                    <p>
                        Save your favourites easily and always have something to
                        watch.
                    </p>
                </div>
            </div>
            <div className="third-container">
                <h2 className="question">Frequently Asked Questions</h2>
                {faq.map((item, index) => (
                    <div key={index}>
                        <button
                            onClick={() =>
                                setShow(() => {
                                    if (show === index) return -1;
                                    else return index;
                                })
                            }
                            className="collapsable"
                        >
                            {item.question}
                        </button>
                        <div
                            className={`${
                                show === index ? "show" : "hide"
                            } content`}
                        >
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}

                <p className="dwn">
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </p>
                <div className="title-down last-in">
                    <input
                        type="email"
                        name="myemail"
                        id="eml"
                        placeholder="Email address"
                    />
                    <button className="started">
                        <span>Get Started</span>
                        <img
                            src="./images/next.png"
                            alt=""
                            className="next-arr"
                        />
                    </button>
                </div>
                <p className="call">Questions? Call 000-800-919-1694</p>
                <div className="footer">
                    <p>Account</p>
                    <p>Media Centre</p>
                    <p>Investor Relations</p>
                    <p>Jobs</p>
                    <p>Ways to Watch</p>
                    <p>Terms of Use</p>
                    <p>Privacy</p>
                    <p>Corporate Information</p>
                    <p>Contact Us</p>
                    <p>Speed Test</p>
                    <p>Legal Notices</p>
                    <p>Only on Netflix</p>
                </div>
                <p className="netflix">Netflix India</p>
            </div>
        </>
    );
}

export default App;
