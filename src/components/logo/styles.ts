import {createStyles} from "@mantine/core";

export const useStyles = createStyles((theme,  {darkmode}: {darkmode?:boolean}) => ({
    logo:{
        display:"block",
        width:100,
        cursor:"pointer",
        'svg':{
            path:{
                fill: darkmode && theme.colorScheme === "dark" ?  theme.white : theme.black
            }
        }
    }
}));
