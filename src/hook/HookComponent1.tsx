import React, { useEffect, useState } from 'react'

// Hook 함수 :
// - react에서 컴포넌트의 상태와 생명주기에 따른 기능을 수행할 수 있도록 특별한 함수
// - use 시작하는 함수
// - hook 함수의 종류
// - useState : 컴포넌트의 상태 관리를 가능하게 해주는 함수, 상태 생성, 업데이트, 값에 접근
// - useEffect : 컴포넌트가 렌더링될 때마다 특정 작업을 수행할 수 있도록 하는 함수, mount, update, unmount 단계에서 수행되는 함수
// - useRef :  DOM 요소에 직접 접근하기 위한 함수, 렌더링 사이에 값을 기억
// - useContext : 컴포넌트 트리 상에서 전역적으로 상태를 공유하고자 할 때 사용하는 함수 (상태를 만드는 작업)
// - useReducer : 상태 로직을 관리하는 함수, 상태 업데이트 로직을 컴포넌트 외부로 옮길 수 있게하여 코드관리를 조금 더 수월하게 해줌
// - useCallback : 메모리 내에서 함수를 재사용할 수 있도록 하는 함수, 렌더링 없이 특정 함수를 다시 호출할 수 있도록 해줌
// - useMemo : 메모리에 계산된 값(함수의 결과)을 저장하여 함수 재실행 없이 사용할 수 있도록 하는 함수


export default function HookComponent1() {

    const [count, setCount] = useState<number>(0);
    const [flag, setFlag] = useState<boolean>(false);
    
    const addCount = () => {
        setCount(count + 1);
    };

    const reverseFlag = () => {
        setFlag(!flag);
    };

    // useEffect :
    // - 컴포넌트의 생명주기에 따라 특정 함수를 수행하도록 하는 훅 함수
    // - useEffect(실행할 함수(콜백 함수), 스코프할 상태 배열);
    // - 개발자 모드에서는 마운트 - 언마운트가 한번 실행되면서 테스트 후 다시 정상 실행 -> 실제로는 한번만 실행됨

    // 컴포넌트 마운트 시에만 실행
    useEffect(() => {
        // console.log('useEffect');
    }, []);

    // 스코프할 상태 배열을 지정하지 않으면 모든 상태가 변경될 때마다 실행됨
    useEffect(() => {
        // 스코프할 상태 배열을 지정하지 않은 effect에서 상태를 변경하면 무한 실행됨
        // 이거 조심해야함 범죄자될 수도 있음
        // setFlag(!flag);

        // console.log('useEffect');
    });

    // 스코프할 상태 배열에 상캐를 지정하면 지정한 상태가 변경될 때마다 실행됨
    useEffect(() => {
        // 스코프할 상태 배열에 지정한 상태를 해당 effect에서 변경하면 무한 실행됨
        // setCount(count +1);
        
        // console.log('count가 변경됨');
        // console.log(count);
    }, [count]);

    // flag는 이밑에 함수만 스코프하고 있음
    useEffect(() => {
        // console.log('count 또는 flag가 변경됨');
        // console.log(count);
        // console.log(flag);
    }, [count, flag]);

    const SubComponent = () => {

        useEffect(() => {
            // console.log('mount 시 실행');
            // return () => {
            //     console.log('unmount 시 실행')
            // };
        }, []);
        
        return <h1>SubComponent</h1>
    };

    return (
        <div>
            {count}
            {flag && <SubComponent />}
            <button onClick={addCount}>+</button>
            <button onClick={reverseFlag}>!</button>
        </div>
    );
    
}
