import {StandardProps} from "@/utillities/global_types";
import React from "react";


export interface SectionProps extends StandardProps{
    padding: boolean,
    children:React.ReactElement
}
