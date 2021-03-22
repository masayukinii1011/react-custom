import React, { useState } from "react";

//カスタムHooks => Viewとロジックを切り離す

/* カスタムHooksのマナー
1.戻り値は無し、1個の値、2~3個のタプルのいずれか
  無しはuseEffect
  1個はuseRef
  2個のタプルはuseState、が代表的
  4個~なら分割を
2.使用者側で再評価の制御をしたい場合は依存配列を使う
*/
const useCount = () => {
  const [count, setCount] = useState(0);
  const countUp = () => setCount((c) => c + 1);
  return [count, countUp] as const;
};

const First: React.FC = () => {
  const [count, countUp] = useCount();
  return <div onClick={countUp}>{count}</div>;
};

export default First;
