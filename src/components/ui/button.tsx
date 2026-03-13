import type { ReactNode } from "react";

interface ButtonProps {
    children: string,
    typeButton: string,
    props?: ReactNode
}

const Button = ({ children, typeButton }: ButtonProps) => {
    return (
        <button 
            className={`
                button font-bold py-5 cursor-pointer
                ${
                    typeButton == "black" 
                    ? "button--black text-[20px] md:text-[24px] leading-5" 
                    : "button--yellow text-[16px] md:text-[18px] leading-5.25"
                } 
            `}
        >
            <span>
                {children}
            </span>
        </button>
    );
};

export default Button;