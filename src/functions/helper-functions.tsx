import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

export const animationDelay = (delays, nth, index) => {
    //If element is 3rd(i % nth = 0) then set is to 3rd

    let adjustedIndex = index + 1;
    let element = adjustedIndex % nth === 0 ? nth : adjustedIndex % nth;
     return delays[element - 1];
};

export async function postCall(args: AxiosRequestConfig): Promise<AxiosResponse[]> {
    try {
        const data = await axios({
            method: "POST",
            ...args
        })
        return [data, null];
    } catch (error) {
        return [null, error];
    }
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

export function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
