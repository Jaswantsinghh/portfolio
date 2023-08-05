export default function Home() {
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
                        <span className="home-left-code-github-url">{"\"https://github.com/jaswantsinghh\""}</span>
                    </div>
                </div>
            </div>
            <div className="home-right">

            </div>
        </div>
    )
}