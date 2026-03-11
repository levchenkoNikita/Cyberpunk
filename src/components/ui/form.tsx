import Input from "./input";
import Button from "./button";

interface FormProps {
    className: string
}

const Form = ({ className }: FormProps) => {
    return (
        <form method="get" className={`${className}`}>
            <Input typeInput="text" id="textInput" />
            <Input typeInput="email" id="emailInput" />
            <div className="w-full mb-8.75">
                <Input typeInput="file" id="fileInput" />
                <label
                    htmlFor="fileInput"
                    className="
                        w-full h-30
                        flex items-center justify-center
                        border border-dashed border-grey
                    "
                >
                    <span className="">
                        Прикрепить скриншот
                    </span>
                </label>
            </div>
            <Button typeButton="yellow">
                Отправить
            </Button>
            <div className="flex items-center my-3.5 gap-x-2.5">
                <Input typeInput="checkbox" id="checkboxInput" />
                <label
                    htmlFor="checkboxInput"
                    className="flex items-center justify-start"
                >
                    <span className="text-[12px] font-light tracking-normal leading-3.5">
                        Согласен на обработку персональных данных
                    </span>
                </label>
            </div>
        </form>
    );
};

export default Form;