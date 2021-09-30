import { useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';

const Page1 = () => {
  // history对象
  const history = useHistory();
  // location对象
  const location = useLocation();
  // URL params对象
  const params = useParams();

  useEffect(() => {
    console.log(history);
    console.log(location);
    console.log(params);
  }, [history, location, params]);

  return (
    <div>
      <h1>route中history，location，params的一些用法</h1>
    </div>
  );
};

export default Page1;
