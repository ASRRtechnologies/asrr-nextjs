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
