import React, {
  useEffect,
  useRef,
  InputHTMLAttributes,
  PropsWithChildren,
} from 'react';
import { useField } from '@unform/core';
import { FaCheck } from 'react-icons/fa';

import { Container, Label, Input, Icon } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

function CheckboxInput({ name, ...rest }: PropsWithChildren<Props>) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.checked;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: ref => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Input
        defaultChecked={defaultValue}
        ref={inputRef}
        type="checkbox"
        {...rest}
      />
      <Label />
      <Icon>
        <FaCheck color="#FFFFFF" size="12" />
      </Icon>
    </Container>
  );
}

export default CheckboxInput;
