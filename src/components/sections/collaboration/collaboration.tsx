import Button from "@/components/ui/button";

const Collaboration = () => {
    return (
        <section className="bg-primary-yellow pt-35 pb-17.5">
            <div 
                className="
                    container flex flex-col gap-y-10
                    md:flex-row md:items-center md:justify-between md:gap-x-8
                "
            >
                <div
                    className="
                        flex flex-col items-center gap-y-6.25
                        md:w-[50%]
                    "
                >
                    <img src="/collaboration/monitor.png" alt="Монитор Hp" className="md:w-full md:h-auto" />
                    <div
                        className="
                            flex items-center justify-center gap-x-3.5 w-full
                            md:flex-col md:gap-y-6.25
                            lg:flex-row lg:gap-x-6.25
                        "
                    >
                        <img src="/collaboration/logo-hp.svg" alt="логотип hp" className="w-11 h-11 md:max-w-20 md:w-full md:h-auto" />
                        <div className="w-22.5 h-5 md:max-w-22.5 md:w-full md:h-auto">
                            <svg className="w-full h-auto" width="50" height="12" viewBox="0 0 50 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M49.4229 0.412598L0.0895149 10.6534" stroke="black" stroke-width="0.548148" />
                                <path d="M49.3647 10.8086L0.148007 0.257931" stroke="black" stroke-width="0.548148" />
                            </svg>
                        </div>
                        <img src="/src/assets/logo.svg" alt="лого киберпанка" className="w-43.75 h-11 md:max-w-80 md:w-full md:h-auto " />
                    </div>
                </div>
                <div className="md:w-[50%]">
                    <h2 className="">
                        Полное погружение вместе с HP
                    </h2>
                    <div className="text-description-alt mb-6.25">
                        <p>
                            Погрузись в современные экшен-игры
                            с реалистичным изображением
                            с помощью монитора с диагональю 23,8 дюйма,
                            созданном для отображения максимально
                            насыщенных цветов. Успевай реагировать
                            на любые события с временем отклика 1
                            мс и частотой в 144 Гц!
                        </p>
                    </div>
                    <div className="mb-10">
                        <ul className="flex flex-col items-start gap-y-4.5">
                            <li className="">
                                <span 
                                    className="
                                        flex items-center justify-start gap-x-4.5
                                        before:content-['']
                                        before:block
                                        before:w-6
                                        before:h-6
                                        before:[background:url('/collaboration/icon-paint.svg')_center/100%_no-repeat]
                                    "
                                >
                                    Яркие насыщенные цвета
                                </span>
                            </li>
                            <li className="">
                                <span 
                                    className="
                                        flex items-center justify-start gap-x-4.5
                                        before:content-['']
                                        before:block
                                        before:w-6
                                        before:h-6
                                        before:[background:url('/collaboration/icon-stars.svg')_center/100%_no-repeat]
                                    "
                                >
                                    Кристальная четкость изображения
                                </span>
                            </li>
                            <li className="">
                                <span 
                                    className="
                                        flex items-center justify-start gap-x-4.5
                                        before:content-['']
                                        before:block
                                        before:w-6
                                        before:h-6
                                        before:[background:url('/collaboration/icon-files.svg')_center/100%_no-repeat]
                                    "
                                >
                                    Быстрые движения и плавный геймплей
                                </span>
                            </li>
                        </ul>
                    </div>
                    <Button typeButton="black">
                        Подробнее
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Collaboration;