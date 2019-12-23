import React, {useCallback}from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Counter from '../components/Counter';
import {increment, decrement} from '../modules/counter'

const CounterContainer = () => {
  const dispatch = useDispatch()
  // 이 Hook 을 통하여 우리는 리덕스 스토어의 상태에 접근 할 수 있습니다.
  const counter = useSelector(state => state.counter, []);

  const onIncrease = useCallback(
    () => dispatch({ type: "counter/INCREMENT" }),
    [dispatch]
  )
  const onDecrease = useCallback(
    () => dispatch({ type: "counter/DECREMENT" }),
    [dispatch]
  )

  return (
  <Counter number={counter} onIncrease={onIncrease} onDecrease={onDecrease}/>
  );
};

export default CounterContainer;