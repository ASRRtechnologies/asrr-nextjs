export const styles = {
    primaryColor: "#FF6861",
    secondaryColor:"#FFEAD0",
    tertiaryColor:"#113537",

    //Font colors
    primaryFont:"#113537",
    secondaryFont:"#2b4b4d",
    whiteFont:"#fff",

    //Dimensions
    maxWidth: "1000px",

    //Borders
    buttonBorderRadius: "5px",

    //Padding of Section

    imageBorderRadius:"10px"

}


enum BreakpointEnums {
    xsm = 'xsm',
    sm = 'sm',
    md = 'md',
    lg = 'lg',
    xl = 'xl',
}

const breakpoints: { [index in BreakpointEnums]: number } = {
    xsm: 330,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
};

/**
 * Returns media-query from mobile up
 * @param xsm, sm, md, lg, xl
 */
export const mq = Object.keys(breakpoints)
    .map((key) => [key, breakpoints[key]] as [string, number])
    .reduce((prev, [key, breakpoint]) => {
        prev[key] = `@media (min-width: ${breakpoint}px)`;
        return prev;
    }, {} as { [index: string]: string });

