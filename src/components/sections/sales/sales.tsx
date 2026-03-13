const Sales = () => {
  return (
    <section className="bg-black relative">
        <div 
            className="
                absolute z-5 top-0 left-0 w-[50%] h-full
                md:[background:url('/sales/bg.jpg')_center/cover_no-repeat]
            "
        >

        </div>
        <div
            className="
                container relative z-10 text-white
                flex flex-col gap-y-10 md:flex-row
            "
        >
            <div 
                className="
                    w-screen h-49.5 self-center
                    [background:url('/sales/bg.jpg')_center/100%_no-repeat]
                    md:bg-none md:w-[50%] md:h-auto
                "
            >

            </div>
            <div 
                className="
                    flex flex-col pb-17.5 md:py-17.5 bg-black 
                    md:pl-8
                "
            >
                <h2 className="max-w-156">
                    Купить игру Cyberpunk 2077
                </h2>
                <div className="mb-10">
                    <h3 className="font-bold text-special text-[20px] md:text-[24px] mb-5">
                        В комплект входит:
                    </h3>
                    <ul className="flex flex-col items-start gap-y-3.75">
                        <li className="">
                            <span 
                                className="
                                    text-description-alt flex items-center gap-x-4.5
                                    before:content-['']
                                    before:block
                                    before:w-6
                                    before:h-6
                                    before:md:w-8
                                    before:md:h-8
                                    before:shrink-0
                                    before:[background:url('/sales/icon-disk.svg')_center/100%_no-repeat]
                                "
                            >
                                Футляр с игровыми дисками
                            </span>
                        </li>
                        <li className="">
                            <span 
                                className="
                                    text-description-alt flex items-center gap-x-4.5
                                    before:content-['']
                                    before:block
                                    before:w-6
                                    before:h-6
                                    before:md:w-8
                                    before:md:h-8
                                    before:shrink-0
                                    before:[background:url('/sales/icon-document.svg')_center/100%_no-repeat]
                                "
                            >
                                Футляр с кодом для загрузки игры и дисками (pc)
                            </span>
                        </li>
                        <li className="">
                            <span 
                                className="
                                    text-description-alt flex items-center gap-x-4.5
                                    before:content-['']
                                    before:block
                                    before:w-6
                                    before:h-6
                                    before:md:w-8
                                    before:md:h-8
                                    before:shrink-0
                                    before:[background:url('/sales/icon-image.svg')_center/100%_no-repeat]
                                "
                            >
                                Справочник с информацией об игровом мире
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="max-w-80 w-full">
                    <h3 className="font-bold text-special text-[20px] md:text-[24px] mb-6.25">
                        Выберите платформу:
                    </h3>
                    <ul className="grid grid-cols-2 gap-x-14 gap-y-10">
                        <li className="">
                            <img src="/sales/image-pc.svg" alt="PC" width={62} height={35} loading="lazy"/>
                        </li>
                        <li className="flex items-center justify-center">
                            <img src="/sales/image-xbox.svg" alt="X-box" width={178} height={35} loading="lazy"/>
                        </li>
                        <li className="">
                            <img src="/sales/image-stadia.svg" alt="Stadia" width={58} height={50} loading="lazy"/>
                        </li>
                        <li className="flex items-center justify-center">
                            <img src="/sales/image-ps.svg" alt="PS4" width={168} height={35} loading="lazy"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Sales;