import React from 'react';
import { useForm } from 'react-hook-form';
import S from './style';

const Login = () => {

    const {register,handleSubmit,getValues,formState:{errors,isSubmitted,isSubmitting}} = useForm({mode: "onChange"})

    const login = handleSubmit((data)=>{
        console.log(data);
    })

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;

    return (
        <div>
            <form onSubmit={login}>
                <label>
                    <p>이메일</p>
                    <input 
                        type="text"
                        placeholder='이메일을 입력하세요.'
                        {...register("memberEmail",{
                            required: true,
                            pattern: emailRegex
                        })}
                    />
                    {errors && errors?.memberEmail?.type === "required" && <S.ErrorMessage>이메일은 필수 입력입니다.</S.ErrorMessage>}
                    {errors && errors?.memberEmail?.type === "pattern" && <S.ErrorMessage>이메일 형식이 아닙니다.</S.ErrorMessage>}
                </label>

                <label>
                    <p>비밀번호</p>
                    <input 
                        type="password"
                        placeholder='비밀번호를 입력하세요.'
                        {...register("memberPassword",{
                            required: true,
                            pattern: passwordRegex
                        })}
                    />
                    {errors && errors?.memberPassword?.type === "required" && <S.ErrorMessage>비밀번호는 필수 입력입니다.</S.ErrorMessage>}
                    {errors && errors?.memberPassword?.type === "pattern" && <S.ErrorMessage>비밀번호 형식이 아닙니다.</S.ErrorMessage>}
                </label>
                <button disabled={isSubmitting}>회원가입</button>
            </form>
        </div>
    );
};

export default Login;