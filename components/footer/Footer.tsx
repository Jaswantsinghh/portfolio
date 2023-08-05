"use client"
import { GithubIcon, TwitterIcon, FacebookIcon  } from "@/lib/icons";
import { onClickUrl } from "@/utils/openLink";

export default function Footer() {

    const onOpenLink = (url: string) => {
        return onClickUrl(url);
    }

    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-container-social">
                    <div className="footer-container-social-text">
                        <p>find me in:</p>
                    </div>
                    <div className="footer-container-social-icon" onClick={onOpenLink('https://twitter.com/CodeComposer009')}>
                        <TwitterIcon />
                    </div>
                    <div className="footer-container-social-icon" onClick={onOpenLink('https://www.facebook.com/jaswantsinghjsn')}>
                        <FacebookIcon />
                    </div>
                </div>
                <div className="footer-container-github" onClick={onOpenLink('https://www.github.com/jaswantsinghh')}>
                    <p className="footer-container-github-handle">@jaswantsinghh</p>
                    <div className="footer-container-github-icon">
                        <GithubIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}