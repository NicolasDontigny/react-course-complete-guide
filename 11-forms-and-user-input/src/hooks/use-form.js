import { useCallback, useState } from 'react';

const useForm = (formObj) => {
  const [form, setForm] = useState(formObj);

  const onInputChange = useCallback((event) => {}, []);

  const renderFormInputs = () =>
    Object.values(form).map((inputObj) => {
      const { value, label, errorMessage, valid, renderInput } = inputObj;
      return renderInput(onInputChange, value, valid, errorMessage, label);
    });

  return { renderFormInputs };
};

export default useForm;
