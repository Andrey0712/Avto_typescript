import React, { useState } from "react";
import {InputGroup} from "../../common/InputGroup";
import { IRegister,RegisterError } from "./types";
import { Form, FormikHelpers, FormikProvider, useFormik } from 'formik';
import {useActions} from "../../../hooks/useActions"
import { RegisterSchema } from './validation';
import { useNavigate } from 'react-router';

const RegisterPage = () => {
    const [img, setImg] = useState<string>();
    const { RegisterUser } = useActions();
    const navigator = useNavigate();
    const initialValues: IRegister = {
      name: "",
      email: "",
      photo: [],
      password: "",
      
    };
  
    const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setFieldValue("photo", (e.target as any).files[0]);
      const file = (e.target as any).files[0]
      setImg( URL.createObjectURL(file));
    }
      
    const onHandleSubmit = async (values: IRegister,
      { setFieldError }: FormikHelpers<IRegister>
    ) => {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) =>
        formData.append(key, value)
      );
      
        try {
          
          await RegisterUser(formData);
          await navigator("/");
          
        } catch (err) {
          
          const serverErrors = err as RegisterError;
          const {email, password} = serverErrors;
          if(password?.length !== 0)
            setFieldError("password", password[0]);
          if (email?.length !== 0)
            setFieldError("email", email[0]);
          
        }
      } 
  
    const formik = useFormik({
      initialValues: initialValues,
      validationSchema: RegisterSchema,
      onSubmit: onHandleSubmit,
    });
  
      const {
        errors,
        touched,
        handleChange,
        handleSubmit,
        setFieldValue
      } = formik;
    
    return (
      <div className="row">
        <div className="col-3">
          {img && (
            <div className="card mt-5">
              <div className="card-body text-center">
                <img src={img} alt="asdasd" />
              </div>
            </div>
          )}
        </div>
        <div className="col-6 mb-4">
          <h1 className="text-center mt-4">Реєстрація</h1>
          <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit}>
              <InputGroup
                field="name"
                label="Ім'я"
                error={errors.name}
                onChange={handleChange}
                touched={touched.name}
              />
  
              
  
              <InputGroup
                field="email"
                label="Email"
                error={errors.email}
                onChange={handleChange}
                touched={touched.email}
              />
  
              <InputGroup
                field="photo"
                label="Аватар"
                type="file"
                error={errors.photo}
                onChange={handleFileChange}
                touched={touched.photo}
              />
  
                
              <InputGroup
                field="password"
                label="Пароль"
                type="password"
                error={errors.password}
                onChange={handleChange}
                touched={touched.password}
              />
  
              
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-secondary"
                  
                >
                  Реєстрація
                </button>
              </div>
            </Form>
          </FormikProvider>
        </div>
        <div className="col-3"></div>
        
      </div>
    );
  };
  export default RegisterPage;