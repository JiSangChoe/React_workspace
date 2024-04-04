import React from 'react'
import InputBox from './InputBox'
import './style.css';
import './common.css';

export default function SignInContainer() {
  return (
    <>
      <InputBox label='이메일' type='text' placeholder='이메일 주소를 입력해주세요.' buttonTitle='인증번호 전송'/>
      <InputBox label='인증번호' type='text' placeholder='인증번호 4자리를 입력해주세요.' buttonTitle='인증확인'/>
    </>
  );
}
