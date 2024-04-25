import { FacebookLogo, GithubLogo } from "@phosphor-icons/react";
import YearAndSeason from "@/utils/YearAndSeason/YearAndSeason";

const [year] = YearAndSeason()

const Footer = () => {
    return (
        <footer className="mt-auto w-full px-5 py-1 flex flex-col items-center justify-center dark:bg-transparent bg-transparent">
            <div className="flex items-center justify-center">
                <a href="https://github.com/EmhaHasyim" className="hover:dark:text-dark-text-secondary hover:text-light-text-secondary">
                    <GithubLogo size={32} weight="bold"/>
                </a>
                <a href="https://www.facebook.com/emhaikhu.jipenk" className="hover:dark:text-dark-text-secondary hover:text-light-text-secondary">
                    <FacebookLogo size={32} weight="bold"/>
                </a>
            </div>
            <p>&copy; {year} AnimeList. All rights reserved</p>
        </footer>
    );
};

export default Footer;
