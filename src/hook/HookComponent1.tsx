import React from 'react'

// Hook 함수 :
// - react에서 컴포넌트의 상태와 생명주기에 따른 기능을 수행할 수 있도록 특별한 함수
// - use 시작하는 함수
// - hook 함수의 종류
// - useState : 컴포넌트의 상태 관리를 가능하게 해주는 함수, 상태 생성, 업데이트, 값에 접근
// - useEffect : 컴포넌트가 렌더링될 때마다 특정 작업을 수행할 수 있도록 하는 함수, mount, update, unmount 단계에서 수행되는 함수
// - useRef :  DOM 요소에 직접 접근하기 위한 함수, 렌더링 사이에 값을 기억
// - useContext : 컴포넌트 트리 상에서 전역적으로 상태를 공유하고자 할 때 사용하는 함수 (상태를 만드는 작업)
// - useReducer : 상태 로직을 관리하는 함수, 상태 업데이트 로직을 컴포넌트 외부로 옮길 수 있게하여 코드관리를 조금 더 수월하게 해줌


export default function HookComponent1() {
    return (
    <div>HookComponent1</div>
    )
}
