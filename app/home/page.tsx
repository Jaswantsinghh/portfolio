"use client"
import greenPng from "@/lib/backgrounds/Green.png";
import bluePng from "@/lib/backgrounds/Blue.png";
import Image from "next/image";
import { onClickUrl } from "@/utils/openLink";
import { CrossIcon } from "@/lib/icons";

export default function Home() {

    const onLinkClick = (url: string) => {
        return onClickUrl(url);
    }

    return (
        <div className="home">
            <div className="home-left">
                <div className="home-left-title">
                    <p className="home-left-title-intro">Hi all. I am</p>
                    <h1 className="home-left-title-name">Jaswant Singh</h1>
                    <p className="home-left-title-position">{">"} Full Stack Developer</p>
                </div>
                <div className="home-left-code">
                    <p className="home-left-code-text">{"//"} complete the game to continue</p>
                    <p className="home-left-code-text">{"//"} you can also see it on my Github page</p>
                    <div className="home-left-code-github">
                        <span className="home-left-code-github-const">const </span>
                        <span className="home-left-code-github-variable">githubLink </span>
                        <span className="home-left-code-github-equal">= </span>
                        <span className="home-left-code-github-url" onClick={onLinkClick("https://github.com/jaswantsinghh")}>{"\"https://github.com/jaswantsinghh\""}</span>
                    </div>
                </div>
            </div>
            <div className="home-right">
                <div className="home-right-background">
                    <div className="home-right-background-green">
                        <Image src={greenPng} alt="green blur" />
                    </div>
                    <div className="home-right-background-blue">
                        <Image src={bluePng} alt="blue blur" />
                    </div>
                </div>
                <div className="home-right-game">
                    <div className="home-right-game-container">
                        <div className="home-right-game-container-circle top-left">
                            <CrossIcon className="top-left-cross" />
                        </div>
                        <div className="home-right-game-container-circle top-right">
                            <CrossIcon className="top-right-cross" />
                        </div>
                        <div className="home-right-game-container-circle bottom-left">
                            <CrossIcon className="bottom-left-cross" />
                        </div>
                        <div className="home-right-game-container-circle bottom-right">
                            <CrossIcon className="bottom-right-cross" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}