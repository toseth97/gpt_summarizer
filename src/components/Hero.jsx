import Logo from "../assets/logo-2237a116.svg";
const Hero = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <nav className="lg:w-9/12 w-11/12 flex justify-between items-center py-4">
                <a href="/" className="block">
                    <img src={Logo} alt="summarizer_logo" />
                </a>
                <button className="rounded-2xl bg-gray-900 text-white py-1 px-8 border border-black hover:bg-white hover:text-gray-900">
                    <a href="">Portfolio</a>
                </button>
            </nav>
            <div className="text-center lg:w-9/12 w-11/12 my-6 flex flex-col items-center justify-center ">
                <h1 className="font-bold lg:text-6xl text-5xl text-gray-900">
                    Summarize Articles with <br />{" "}
                    <span className="orange_gradient">OpenAI GPT</span>
                </h1>
                <p className="pt-4 opacity-80 font-light lg:w-6/12 w-11/12 ">
                    Simplify your reading with Summize, an open-source article
                    summarizer that transforms lengthy articles into clear and
                    concise summaries
                </p>
            </div>
        </div>
    );
};

export default Hero;
