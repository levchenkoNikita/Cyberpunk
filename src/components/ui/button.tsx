import type { ReactNode } from "react";

interface ButtonProps {
    children: string,
    props?: ReactNode
}

const Button = ({ children }: ButtonProps) => {
    return (
        <button className="button button--black text-[20px] md:text-[24px] py-2.5 md:py-4.5">
            <span>
                {children}
            </span>
        </button>
    );
};

export default Button;