interface FormProps {
    typeForm: string
}

const Form = ({ typeForm }: FormProps) => {
  return (
    typeForm == "text" 
    ? <input 
            className="w-full h-8.25 py-2.5 border-b border-grey"
            type="text" 
            placeholder="Как тебя зовут?"
        /> 
    : <input 
            className="w-full h-8.25 py-2.5 border-b border-grey"
            type="email" 
            placeholder="Твой е-mail"
        />
  );
};

export default Form;