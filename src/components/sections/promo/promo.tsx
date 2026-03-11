import Form from "@/components/ui/form";

const Promo = () => {
    return (
        <section className="bg-black text-white pb-17.5">
            <div 
                className="
                    container grid grid-cols-1 grid-rows-[repeat(5, auto)]
                    md:grid-cols-2 md:grid-rows-[repeat(4,auto)]
                    lg:grid-cols-[164px_3fr_6fr_2fr] lg:grid-rows-[repeat(4,auto)]
                "
            >
                <img 
                    src="/promo/icon.svg" 
                    alt="Акция" 
                    className="
                        relative -bottom-2.5
                        md:col-start-1 md:row-start-1
                        md:w-33 md:h-33 md:bottom-0 md:my-3.75
                        lg:col-start-1
                    "
                    width={62} 
                    height={62} 
                    loading="lazy" 
                />
                <div 
                    className="
                        flex items-center gap-x-8 mb-6.25
                        md:col-start-2 md:row-start-2 md:row-end-5 
                        md:w-[95%] md:flex-col md:self-end
                        lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:col-end-5
                        lg:flex-row lg:w-full lg:self-start
                    "
                >
                    <img 
                        className="h-auto sm:w-[40%] md:w-full lg:w-[calc(50%-(2rem/2))]"
                        src="/promo/xbox.png" 
                        alt="X-box" 
                        width={132} 
                        height={130} 
                        loading="lazy" 
                    />
                    <img 
                        className="h-auto sm:w-[40%] md:w-full lg:w-[calc(50%-(2rem/2))]"
                        src="/promo/ps.png" 
                        alt="PlayStation" 
                        width={132} 
                        height={130} 
                        loading="lazy" 
                    />
                </div>
                <h2 
                    className="
                        md:col-start-1 md:row-start-2
                        lg:col-start-2 lg:col-end-4 lg:row-start-1
                        lg:relative lg:-bottom-16
                    "
                >
                    Играй и выигрывай!
                </h2>
                <div 
                    className="
                        text-description
                        md:col-start-1 md:row-start-3
                        lg:col-end-4 lg:row-start-2
                    "
                >
                    <p>
                        Играй в <span className="text-special">Cyberpunk 2077</span> и получи возможность
                        выиграть консоль <span className="text-special">Xbox Series X</span> или <span className="text-special">Sony PlayStation 5!</span>{' '}
                        Заполни форму ниже и приложи скриншот о покупке игры.
                        Итоги розыгрыша будут подведены 1 февраля. Удачи! {';)'}
                    </p>
                </div>
                <Form 
                    className="
                        md:col-start-1 md:row-start-4
                        lg:col-end-3 lg:row-start-3
                    "
                />
            </div>
        </section>
    );
};

export default Promo;