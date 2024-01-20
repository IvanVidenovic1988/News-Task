import { ChangeEventHandler } from "react";

type Props = {
    label: string,
    type: string,
    placeholder: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    error: string
}

const Input = ({ label, type, placeholder, value, onChange, error }: Props) => {
    return (
        <div className="pb-6">
            <label className="font-bold text-gray-500">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className={`input ${error ? 'border-red-700' : ''}`}
            />
            {error && <p className='text-red-700'>{error}</p>}
        </div>
    );
};

export default Input;