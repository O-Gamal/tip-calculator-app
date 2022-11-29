import { useState, useEffect } from 'react';

interface InputProps {
  type: string;
  label: string;
  className: string;
  name: string;
  id: string;
  placeholder: string;
  icon?: React.ReactElement;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  label,
  className,
  name,
  id,
  placeholder,
  icon,
  value,
  onChange,
}: InputProps) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    value < 1 ? setError(true) : setError(false);
  }, [value]);

  return (
    <div>
      <label htmlFor={id}>
        {label}
        {error && <span className='error-msg'>Can't be zero</span>}
      </label>
      <div className='input-container'>
        {icon}
        <input
          type={type}
          className={`${className} ${error && 'error'}`}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          //   onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
          //     +e.target.value < 1 ? setError(true) : setError(false);
          //   }}
        />
      </div>
    </div>
  );
};
export default Input;
