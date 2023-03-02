import React, {
  InputHTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
} from 'react';
import { useField } from '@unform/core';

import { InpuBlock, InputField, Icon } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  icon?: JSX.Element;
}

function Input({ name, label, icon, ...props }: PropsWithChildren<InputProps>) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <InpuBlock>
      <label htmlFor={name}>
        {label}
        <InputField
          id={name}
          name={name}
          type="text"
          ref={inputRef}
          defaultValue={defaultValue}
          {...props}
        />
        {icon && <Icon>{icon}</Icon>}
      </label>
      {error && <span>{error}</span>}
    </InpuBlock>
  );
}

export default Input;
