import { memo, useEffect } from 'react';
import classnames from 'classnames';
import style from './style.module.scss';

const Child = memo((props) => {
  console.log(props);
  useEffect(() => {
    console.log('子组件使用memo避免多次渲染');
  }, []);

  const className = classnames({
    [style['child-class']]: true,
  });

  return (
    <div className={className}>
      <h2>这是子组件</h2>
      <h2>
        {props.test},{props.test2}
      </h2>
      <button onClick={props.test3}>点击调用传进来的方法</button>
      <div>
        <h2>这是插槽的位置：{props.children}</h2>
      </div>
    </div>
  );
});

export default Child;
