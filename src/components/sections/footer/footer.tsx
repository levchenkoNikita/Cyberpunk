import Logo from "@components/ui/logo.tsx";
import CDProjectRed from "@assets/cd-project-red.svg?react";

const Footer = () => {
    return (
        <section className="text-black bg-white py-10">
            <div className="container">
                <ul className="flex flex-col items-center gap-y-12.5 lg:flex-row lg:items-center lg:justify-between lg:gap-x-8">
                    <li className="flex flex-col gap-y-6.25 lg:flex-row lg:items-center lg:justify-between lg:gap-x-8">
                        <Logo />
                        <a href="#" className="flex items-center justify-center hover:opacity-[0.8]">
                            <CDProjectRed />
                        </a>
                    </li>
                    <li className="">
                        <nav>
                            <ul className="flex flex-col gap-y-6.25 lg:flex-row lg:items-center lg:justify-between lg:gap-x-8">
                                <li>
                                    <a href="#" className="flex items-center justify-center">
                                        Лицензия
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center">
                                        Политика конфиденциальности
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Footer;