import type { FC, ReactNode } from "react";

import styles from "./Container.module.css";

interface IContainerProps {
  children: ReactNode;
}

const Container: FC<IContainerProps> = ({children})=>{
    return (
        <div>{children}</div>
    )
};

export default Container;