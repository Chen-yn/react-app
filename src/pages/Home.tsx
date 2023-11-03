import { Link } from 'react-router-dom';
import useCounterStore from '@/store/counter';
import CountNum from '@/components/CountNum';
import { useState } from 'react';
import { Button } from 'antd';

export default () => {
  const increase = useCounterStore((state) => state.increase);
  const title = useState(import.meta.env.VITE_APP_TITLE);
  return (
    <>
      <h1>Home Page</h1>
      <p>{title}</p>
      <CountNum />
      <Button type="primary">Primary Button</Button>
      <button onClick={increase}>加一</button>
      <br />
      <Link to="/about">页面跳转</Link>
    </>
  );
};
