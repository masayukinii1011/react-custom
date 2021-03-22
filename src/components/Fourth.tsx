import React, { useEffect } from "react";

type Props = {
  id?: any;
  content?: any;
  children?: any;
};

const useTippy = (id: any, content: any) => {
  useEffect(() => {
    //tippy(`#${id}`, { content });
  }, [id, content]);
  return id;
};

const Fourth: React.FC<Props> = ({ id, content, children }) => {
  const ids = useTippy(id, content);
  return <button id={ids}>{children}</button>;
};
export default Fourth;
