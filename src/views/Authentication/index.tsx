import React, { ChangeEvent, useState } from 'react'
import './style.css';

import SignInBackground from 'assets/image/sign-in-background.png';
import SignUpBackground from 'assets/image/sign-up-background.png';
import InputBox from 'components/Inputbox';

// 타입을 만든거임
type AuthPage = 'sign-in' | 'sign-up';

interface SnsContainerProps {
    title: string;
}

function SnsContainer({title}: SnsContainerProps) {

    // 버튼을 클릭했을때 반응 -> 똑같은 구현부를 가지고 있어서 하나로 묶음 (kakao, naver) -> Sns
    const onSnsButtonClickHandler = (type: 'kakao' | 'naver') => {
        alert(type);
    };

    return (
        <div className='authentication-sns-container'>
            <div className='sns-container-title label'>{title}</div>
            <div className='sns-button-container'>             {/*익명함수로 매개변수없이 호출 */}
                <div className='sns-button kakao-button' onClick={() => onSnsButtonClickHandler('kakao')}></div>
                <div className='sns-button naver-button' onClick={() => onSnsButtonClickHandler('naver')}></div>
            </div>
        </div>
    );

};

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
            <SnsContainer title="SNS 로그인"/>
        </div>
    );
}

function SignUp ({onLinkClickHandler}: Props) {
    // InputBoxProps의 onChangeHandler 상태 만들어줌
    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordCheck, setPasswordCheck] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [authNumber, setAuthNumber] = useState<string>('');

    const [idButtonStatus, setIdButtonStatus] = useState<boolean>(false);
    const [emailButtonStatus, setEmailButtonStatus] = useState<boolean>(false);
    const [authNumberButtonStatus, setAuthNumberButtonStatus] = useState<boolean>(false);

    // 중복확인 버튼을 작동하기 위해 만든 코드인데 하
    const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setId(value);
        setIdButtonStatus(value !== '');
    };

    const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setPassword(value);
        
    };

    const onPasswordCheckChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setPasswordCheck(value);
        
    };

    const onEmailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setEmail(value);
        setEmailButtonStatus(value !== '');
    };

    const onAuthNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setAuthNumber(value);
        setAuthNumberButtonStatus(value !== '');
    };

    // 중복확인을 눌렀을 때 호출되는 함수
    const onIdButtonClickHandler = () => {
        // 중복확인 버튼 막기(텍스트창에 아무것도 없을때)
        if(!idButtonStatus) return;
        alert(id);
    };
    const onEmailButtonClickHandler = () => {
        // 중복확인 버튼 막기(텍스트창에 아무것도 없을때)
        if(!emailButtonStatus) return;
        alert(email);
    };
    const onAuthNumberButtonClickHandler = () => {
        // 중복확인 버튼 막기(텍스트창에 아무것도 없을때)
        if(!authNumberButtonStatus) return;
        alert(authNumber);
    };
    
    const onSignUpButtonClickHandler = () => {

    }

    return (
        <div className='authentication-contents'>
            <SnsContainer title="SNS 회원가입"/>
            <div className='short-divider'></div>
            <div className='authentication-input-container'>

                <InputBox label='아이디' type='text' value={id} placeholder='아이디를 입력해주세요.' onChangeHandler={onIdChangeHandler} buttonTitle='중복확인' buttonStatus={idButtonStatus} onButtonClickHandler={onIdButtonClickHandler} />

                <InputBox label='비밀번호' type='password' value={password} placeholder='비밀번호를 입력해주세요.' onChangeHandler={onPasswordChangeHandler} />

                <InputBox label='비밀번호 확인' type='password' value={passwordCheck} placeholder='비밀번호를 입력해주세요.' onChangeHandler={onPasswordCheckChangeHandler} />

                <InputBox label='이메일' type='text' value={email} placeholder='이메일 주소를 입력해주세요.' onChangeHandler={onEmailChangeHandler} buttonTitle='이메일 인증' buttonStatus={emailButtonStatus} onButtonClickHandler={onEmailButtonClickHandler} />

                <InputBox label='인증번호' type='text' value={authNumber} placeholder='인증번호 4자리를 입력해주세요.' onChangeHandler={onAuthNumberChangeHandler} buttonTitle='인증확인' buttonStatus={authNumberButtonStatus} onButtonClickHandler={onAuthNumberButtonClickHandler} />

            </div>
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
    <SignIn onLinkClickHandler={onLinkClickHandler}/> : 
    <SignUp onLinkClickHandler={onLinkClickHandler} />;

    const imageBoxStyle = { backgroundImage: `url(${page === 'sign-in' ? SignInBackground : SignUpBackground})` };

    return (
        <div id="authentication-wrapper">
            <div className="authentication-image-box" style={imageBoxStyle}></div>
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
