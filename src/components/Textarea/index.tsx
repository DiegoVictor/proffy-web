import React, {
  PropsWithChildren,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import { useField } from '@unform/core';

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

function Textarea({ name, label, ...props }: PropsWithChildren<TextareaProps>) {
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
    <div className="textarea-block">
      <label htmlFor={name}>
        {label}
        <textarea
          id={name}
          name={name}
          ref={inputRef}
          defaultValue={defaultValue}
          {...props}
        />
      </label>
      {error && <span>{error}</span>}
    </div>
  );
}

export default Textarea;
