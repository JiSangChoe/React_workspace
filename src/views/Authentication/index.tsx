import React, { ChangeEvent, useState } from 'react'
import './style.css';

import SignInBackground from 'assets/image/sign-in-background.png';
import SignUpBackground from 'assets/image/sign-up-background.png';
import InputBox from 'components/Inputbox';

// 타입을 만든거임
type AuthPage = 'sign-in' | 'sign-up';

interface Props {
    onLinkClickHandler: () => void 
}

function SignIn ({onLinkClickHandler}: Props) {

    // 사용은 부모에서 변경은 자식에서 함
    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setId(event.target.value);
    };

    const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const onSignInButtonClickHandler = () => {
        alert(`아이디 :  ${id}/ 비밀번호 : ${password}` );
        setId('');
        setPassword('');
    };

    return (
        <div className='authentication-contents'>
            <div className='authentication-input-container'>
                <InputBox label="아이디" type="text" value={id} placeholder="아이디를 입력해주세요." onChangeHandler={onIdChangeHandler} />
                <InputBox label="비밀번호" type="password" value={password} placeholder= "비밀번호를 입력해주세요." onChangeHandler={onPasswordChangeHandler}/>
            </div>
            <div className='authentication-button-container'>
                <div className='primary-button full-width' onClick={onSignInButtonClickHandler}>로그인</div>
                <div className='text-link' onClick={onLinkClickHandler}>회원가입</div>
            </div>
            <div className='short-divider'></div>
            <div className='authentication-sns-container'></div>
        </div>
    );
}

function SignUp ({onLinkClickHandler}: Props) {

    const onSignUpButtonClickHandler = () => {

    }

    return (
        <div className='authentication-contents'>
            <div className='authentication-sns-container'></div>
            <div className='short-divider'></div>
            <div className='authentication-input-container'></div>
            <div className='authentication-button-container'>
                <div className='primary-button full-width' onClick={onSignUpButtonClickHandler}>회원가입</div>
                <div className='text-link' onClick={onLinkClickHandler}>로그인</div>
            </div>
        </div>
    );
    
}

export default function Authentication() {

    const [page, setPage] = useState<AuthPage>('sign-in');

    const onLinkClickHandler = () => {
        if (page === 'sign-in') setPage('sign-up');
        else setPage('sign-in');
    }

    const AuthenticationContents = page === 'sign-in' ? 
    <SignIn onLinkClickHandler={onLinkClickHandler}/> : <SignUp onLinkClickHandler={onLinkClickHandler} />;

    const imageBosStyle = {
        backgroundImage: `url(${page === "sign-in" ? SignInBackground : SignUpBackground})`,
    };

    return (
        <div id="authentication-wrapper">
            <div className="authentication-image-box" style={imageBosStyle}></div>
            <div className="authentication-box">
                <div className="authentication-container">
                    <div className="authentication-title h1">
                        {"임대 주택 가격서비스"}
                    </div>
                    { AuthenticationContents }
                </div>
            </div>
        </div>
    );
}
