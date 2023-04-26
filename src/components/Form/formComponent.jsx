import React from "react"
import { InputDiv, InputAddon } from "../../styles/Form";
import { useFormContext } from "react-hook-form";
import { findInputError } from "../../utils/findInputError"; 
import { isFormInvalid } from "../../utils/isFormValid";
import { ExclamationCircleFill } from "react-bootstrap-icons";



export const InputGroup = ({ name, label, type, id, placeholder, addon }) => {
    return (
      <InputDiv>
          <label htmlFor={id}>
            {label}
          </label>
          <InputAddon>
          <span className="addon">{addon}</span>
          <input
          id={id}
          type={type}
          placeholder={placeholder}
        />
          </InputAddon>
        
      </InputDiv>

    )
  }

  export const Input = ({name, label, type, id, placeholder, validation, className }) => {
    const { register, formState: { errors }, } = useFormContext()

  const inputErrors = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputErrors)

    return (
      <InputDiv>
          <label htmlFor={id}>
            {label}
          </label>
          <input className={className}
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(name, validation)}
        />
         {isInvalid && (
            <p
              key={inputErrors.error.message}
            ><span><ExclamationCircleFill /> </span>{inputErrors.error.message}</p>
          )}
        
      </InputDiv>

    )
  }

