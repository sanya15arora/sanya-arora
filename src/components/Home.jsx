import React, {useState} from 'react';
import {AppText} from "../constants/index.js";
import {heroImage} from "../assets";
import Typewriter from 'typewriter-effect';
import {GOOGLE_FILE_ID} from "../constants/index.js";

const Home = () => {

    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        try {
            setIsDownloading(true);
            const downloadUrl = `https://drive.google.com/uc?export=download&id=${GOOGLE_FILE_ID}`;

            const link = document.createElement("a");
            link.href = downloadUrl;
            link.download = "Sanya_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setTimeout(() => setIsDownloading(false), 1500);
        } catch (error) {
            console.error("Download failed:", error);
            setIsDownloading(false);
        }
    };


    return (
        <div className="mt-7 px-4 md:px-8 flex flex-col items-center justify-center md:flex-row" id={'home'}>
            <div>
                <h1 className={'text-[42px] font-bold'}>{AppText.hello}</h1>
                <h1 className={'text-[42px] font-bold'}>{AppText.Iam}
                    <span className={'text-[#ffd23f] inline-block'}><Typewriter
                        options={{
                            strings: [AppText.SanyaArora, AppText.FrontedDeveloper],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </span>
                </h1>
                <h2 className={'text-[22px] text-gray-400 mt-3 '}>{AppText.IntroDesc} </h2>
                <button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className={`bg-[#ffd23f] p-2 px-3 rounded-md mt-4 transition-all ease-in-out 
        hover:scale-110 text-white flex items-center justify-center gap-2 
        ${isDownloading ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                    {isDownloading ? (
                        <>
                            <span
                                className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                            Downloading...
                        </>
                    ) : (
                        "Resume"
                    )}
                </button>
            </div>
            <img className={' w-[300px] md:w-[350px] lg:w-[450px] m-6 scale-x-[-1]'} src={heroImage} alt={"homeImage"}/>


        </div>
    );
};

export default Home;