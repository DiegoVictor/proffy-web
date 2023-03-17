import React, {
  PropsWithChildren,
  SelectHTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  placeholder?: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

function Select({
  name,
  label,
  options,
  placeholder,
  ...props
}: PropsWithChildren<SelectProps>) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={name}>
        {label}
        <select
          id={name}
          name={name}
          defaultValue={defaultValue}
          ref={inputRef}
          {...props}
        >
          <option value="" disabled hidden>
            {placeholder ?? 'Selecione'}
          </option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      {error && <span>{error}</span>}
    </Container>
  );
}

export default Select;
