import React, { ChangeEvent, useState } from 'react'

// 상태(status)
// - 각가의 컴포넌트가 가지는 데이터
// - 컴포넌트의 렌더링 결과에 영향을 미침
// - 컴포넌트는 독립적인 상태를 가질 수 있음
// - 상태가 변경되면 컴포넌트가 리렌더링 됨

export default function StateComponent() {

    // status 선언 :
    // - useState 함수로 함수를 선언할 수 있음
    // - const [상태변수, 상태변경함수] = useState<상태변수타입>(초기값); => 배열을 디스트럭처한거임
    // 상태변경함수의 이름은 상관없지만 보통 'set상태변수' 라고 지음

    // let count = 0;
    const [count, setCount] = useState<number>(0);
    // let total: number = 0;
    const [total, setTotal] = useState<number>(0);
    // let favorites: string[] = [];
    const [favorites, setFavorites] = useState<string[]>(['사과']);
    const [favorite, setFavorite] = useState<string>('');

    const onCountAddHandler = () => {
        // setCount(count +1);

        // 상태변수는 반드시 상태변경함수로 변경해야 리렌더링됨
        // count++;
        
        // 상태변경 함수를 통해서 변경한다고 바로 적용되지 않음
        // 리렌더링된 후 상태변경 함수가 적용됨
        // setCount(count +1); // 여기서 +1이 되는것이 아닌 }; 여기서 +1이 되는 거임
        // setCount(count +1);
        // setCount(count +1); // 마지막 것에만 덮어씌어진다. ==> 최종적인 결과만

        // 이건 누적됨
        // 상태변경 함수에 콜백 함수를 전달하면 해당 콜백 함수는 상태 변경 작업을 누적해서 함 => 이거 어려음 setCount (count+1);이거를 위에 적냐 아래에 적냐에 따라 결과값이 달라짐 나중에 혼자 공부할 때 꼭 보셈 ㅇㅇ
        // setCount (count => count +1);
        // setCount (count => count +1);
        // setCount (count => count +1);

        // 변경된 상태를 사용하고 싶을 때 해결방법, 임시 변수를 사용하여 간접 사용
        // 직접적인 작업이 아닌 간접적인 작업을 통해 값을 넣어줌 별거 아닌거 같지만 고통받는단다.
        const tmp = count + 1;
        setCount(tmp);
        setTotal(total + tmp);
    };

    // Input 요소의 값을 가져오고자 할땐 onChange 이벤트의 .target.value로 가져옴
    const onInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // 가져온 .target.value 값을 상태에 지정
        setFavorite(event.target.value);
    }

    const onAddListHandler = () => {
        // 상태가 배열 혹은 객체이면 각각에 대해 요소를 추가, 변경이 일어나도 상태가 변경된 것으로 인식하지 않음 (실제 주소 변경 X)
        // 상태가 변경된 것으로 인식하게 하고 싶으면 새로운 배열 혹은 객체를 생성하여 상태를 변경해야 함 (일반적으로 복사해서 변경)

        // favorites.push(favorite);
        // 새로운 배열을 만듬 렌더링을 위해서 원래 있던 배열은 선언하면 주소는 변경되지 않으므로 지금 이 작업에서는 한박자 늦게 배열에 요소가 추가된다 그래서 새로운 배열을 만들어서 요소를 추가하는 아래 코드를 만듬 -> 이거 고통 개받는단다.
        // const newFavorites = favorites.map(item => item);
        // setFavorites(newFavorites);

        // 위의 코드와 동일한 코드임 변경해서 쓴다고 한다면 위에껄 그냥 복사만 한다면 밑에 코드가 맞음
        setFavorites([...favorites, favorite]);
        // 추가 버튼을 누르고 입력칸밑에 빈문자열로 만듬
        setFavorite('');
    };

    return (
        <>
            <button onClick={onCountAddHandler}>+</button>
            <h1>{count}</h1>
            <h1>{total}</h1>

            <hr />
            
            {/* Input이 만약 상태를 변경한다면 value로 그 상태를 지정해야 불일치가 발생하지 않음 */}
            <input onChange={onInputHandler} value={favorite} />
            <button onClick={onAddListHandler}>추가</button>
            <h4>{favorite}</h4>
            <ul>
                {favorites.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </>
    )
}
