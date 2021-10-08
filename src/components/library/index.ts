import React from "react";

//T is childrenType for specific children such as Button only etc
export interface StandardProps<T = void> {
    className?: string;
    style?: React.CSSProperties;
    children? : React.ReactElement<T>[] | React.ReactElement<T>;
};
