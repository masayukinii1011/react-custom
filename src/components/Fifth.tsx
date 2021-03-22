import React, { useState, useCallback } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);
  const countUp = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  // 初期状態
  const initial = count === 0;
  //  3の倍数かどうかを判定
  const isMultipleOfThree = count % 3 === 0;
  //  3がつく数字かどうかを判定
  const isNumberWithThree = Boolean(count.toString().match(/3/));
  //  0を除き、3の倍数か3のつく数字であればtrueを返す
  const isAho = !initial && (isMultipleOfThree || isNumberWithThree);
  return [count, countUp, isAho] as const;
};

const Fifth: React.FC = () => {
  const [count, countUp, isAho] = useCount();

  return (
    <div>
      <p>{count}</p>
      <div className="btn" onClick={countUp}>
        Count up!
      </div>
      <>{isAho ? <div>Aho</div> : <div>Normal</div>}</>
    </div>
  );
};

export default Fifth;
