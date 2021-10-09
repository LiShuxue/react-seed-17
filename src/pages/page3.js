import { useSelector, useDispatch } from 'react-redux';
import { testSyncAction, testAsyncAction } from '../store/actions';
import { testGetMethod, testPostMethod } from '../ajax/api';

const Page3 = () => {
  const stateA = useSelector((state) => state.stateA);
  const stateB = useSelector((state) => state.stateB);

  const dispatch = useDispatch();

  const changeA = () => {
    if (stateA === '改变A') {
      dispatch(testSyncAction('这是A state'));
    } else {
      dispatch(testSyncAction('改变A'));
    }
  };

  const changeB = () => {
    dispatch(testAsyncAction());
  };

  const testGet = () => {
    testGetMethod();
  };

  const testPost = () => {
    testPostMethod({ test: 'post' });
  };

  return (
    <div>
      <h1>redux</h1>
      <h2>{stateA}</h2>
      <button onClick={changeA}>改变A</button>
      <h2>{stateB}</h2>
      <button onClick={changeB}>改变B</button>
      <br />
      <br />
      <button onClick={testGet}>测试get方法</button>

      <button onClick={testPost}>测试post方法</button>
    </div>
  );
};

export default Page3;
