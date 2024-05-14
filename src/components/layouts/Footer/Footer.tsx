import { FacebookLogo, GithubLogo } from "@phosphor-icons/react";
import YearAndSeason from "@/utils/YearAndSeason/YearAndSeason";

const [year] = YearAndSeason()

const Footer = () => {
    return (
        <footer className="mt-auto w-full px-5 py-1 flex flex-col items-center justify-center dark:bg-transparent bg-transparent">
            <p className="text-center">
            Thank God for giving me the health and strength to work on this project. I would also thanks to <a href="https://github.com/jikan-me/jikan" className="font-medium text-theme-light hover:text-theme-dark dark:text-theme-dark dark:hover:text-theme-light">JikanAPI</a> for the RESTfulAPI.
            </p>
            <div>
                <p>Follow Me</p>
            <div className="flex items-center justify-center">
                <a href="https://github.com/EmhaHasyim" className="hover:dark:text-dark-text-secondary hover:text-light-text-secondary">
                    <GithubLogo size={32} weight="bold"/>
                </a>
                <a href="https://www.facebook.com/emhaikhu.jipenk" className="hover:dark:text-dark-text-secondary hover:text-light-text-secondary">
                    <FacebookLogo size={32} weight="bold"/>
                </a>
            </div>
            </div>
            <p>&copy; {year} AnimeList. All rights reserved</p>
        </footer>
    );
};

export default Footer;
