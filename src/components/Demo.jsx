import { useState } from "react";
import axios from "axios";

const Demo = () => {
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [res, setRes] = useState("");

    const key = import.meta.env.VITE_Key;
    const host = import.meta.env.VITE_Host;

    const options = {
        method: "POST",
        url: "https://gpt-summarization.p.rapidapi.com/summarize",
        headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": key,
            "X-RapidAPI-Host": host,
        },
        data: {
            text: input,
        },
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setRes(response.data.summary);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error(error.message);
        }
    };

    return (
        <div className="lg:w-9/12 w-11/12 flex flex-col items-center justify-center">
            <form className="lg:w-7/12 w-11/12" onSubmit={handleSubmit}>
                <div className="w-full relative">
                    <i className="bx bx-link-alt link_icon"></i>
                    <input
                        type="text"
                        name="query"
                        autoFocus
                        required
                        value={input}
                        placeholder="Enter  a long piece of writing or url link..."
                        className="w-full  text-normal font-extralight py-1 px-10 outline-none input"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit" className="enter_icon text-xl">
                        <i className="bx bxs-arrow-to-bottom"></i>
                    </button>
                </div>
            </form>
            <div className="flex flex-col lg:w-9/12 w-11/2 items-center justify-center">
                {isLoading ? (
                    <div className="load mt-8"></div>
                ) : (
                    res && (
                        <div className="lg:w-11/12 w-11/12 font-extralight my-8">
                            <p className="text-xl p-2">
                                Article
                                <span className="font-bold text-blue-700 mx-2 ">
                                    Summary
                                </span>
                            </p>
                            <div className="bg-gray-900 text-white p-4 rounded-2xl pt-16">
                                {res}
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Demo;
