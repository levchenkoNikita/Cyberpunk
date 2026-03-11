const Changes = () => {
    return (
        <section>
            <div className='container py-18.75'>
                <h2 className="text-black md:w-[85%] lg:w-[80%]">
                    Найт-Сити изменит  тебя навсегда!
                </h2>
                <div className="text-grey text-description md:w-[85%] lg:w-[80%]">
                    <p>
                        <span className='text-special font-bold'>Cyberpunk 2077</span> — приключенческая ролевая игра,
                        действие которой происходит в мегаполисе Найт-Сити,
                        где власть, роскошь и модификации тела ценятся выше всего.
                        Ты играешь за V, наёмника в поисках устройства, позволяющего
                        обрести бессмертие. Ты сможешь менять киберимпланты, навыки и
                        стиль игры своего персонажа, исследуя открытый мир, где твои
                        поступки влияют на ход сюжета и всё, что тебя окружает.
                    </p>
                </div>
                <div 
                    className="
                        grid grid-cols-1 grid-rows-3
                        md:grid-cols-2 md:grid-rows-[2fr_5fr]
                        lg:grid-cols-[3fr_5fr] lg:grid-rows-2
                        gap-y-8 md:gap-x-8 place-items-center
                    "
                >
                    <img
                        className="
                            min-w-screen w-[75%] h-auto
                            row-start-1 col-start-1
                            sm:min-w-0 md:w-full md:h-full
                            
                        "
                        src="/changes/bg-1.png"
                        alt="image"
                        width={320}
                        height={196}
                        loading="lazy"
                    />
                    <img
                        className="
                            min-w-screen w-[75%] h-auto 
                            row-start-2 col-start-1
                            md:row-start-1 md:col-start-2
                            lg:row-start-2 lg:col-start-1
                            sm:min-w-0 md:w-full md:h-full
                            
                        "
                        src="/changes/bg-2.png"
                        alt="image"
                        width={320}
                        height={196}
                        loading="lazy"
                    />
                    <img
                        className="
                            min-w-screen w-[75%] md:w-full h-auto sm:min-w-0
                            row-start-3 col-start-1 
                            md:row-start-2 md:col-start-1 md:col-end-3
                            lg:row-start-1 lg:row-end-3 lg:col-start-2
                        "
                        src="/changes/bg-3.png"
                        alt="image"
                        width={320}
                        height={424}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default Changes;