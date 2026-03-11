interface InputProps {
    typeInput: string,
    id: string
}

const Input = ({ typeInput, id }: InputProps) => {
    return (
        typeInput == "text"
            ? <input
                id={id}
                className="w-full h-8.25 py-2.5 pl-2 mb-9.25 border-b border-grey"
                type="text"
                placeholder="Как тебя зовут?"
            />
            : typeInput == "email"
                ? <input
                    id={id}
                    className="w-full h-8.25 py-2.5 pl-2 mb-8.75 border-b border-grey"
                    type="email"
                    placeholder="Твой е-mail"
                />
                : typeInput == "file"
                    ? <input
                        id={id}
                        className="hidden"
                        type="file"
                        placeholder="Твой е-mail"
                    />
                    : <input
                        id={id}
                        className="w-3.5 h-3.5"
                        type="checkbox"
                        placeholder="Твой е-mail"
                    />
    );
};

export default Input;