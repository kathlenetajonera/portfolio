const InputField = ({ placeholder, name, value, onChange }) => {
    return (
        <input 
            type="text" 
            className="form__field" 
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
        />
    );
}
 
export default InputField;