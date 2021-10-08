import { useCallback, useEffect, useMemo, useState } from 'react';
import Child from '../components/Child';

const Page2 = () => {
  const [state, setState] = useState('这是state');
  const [count] = useState(100);
  useEffect(() => {
    console.log('第一次渲染');
  }, []);
  useEffect(() => {
    console.log('多次渲染');
  }, [state]);

  const changeState = () => {
    if (state === '这是state') {
      setState('改变state');
    } else {
      setState('这是state');
    }
  };

  const testFun = useCallback(() => {
    console.log('这是方法作为参数，使用了useCallback避免子组件多次渲染');
  }, []);

  const computeState = useMemo(() => {
    console.log('不使用useMemo会多次执行，使用memo只会依赖count的变化才执行');
    return `这是计算属性${count}`;
  }, [count]);

  return (
    <div>
      <h1>react基础，react高级，memo</h1>
      <Child test="这是test props" test2="这是test2 props" test3={testFun}>
        插槽内容
      </Child>
      <h1>{state}</h1>
      <button onClick={changeState}>点击按钮改变state</button>
      <h1>{computeState}</h1>
    </div>
  );
};

export default Page2;
