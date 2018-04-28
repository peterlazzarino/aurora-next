import axios from "axios";
import memoize from "memoizee";

const apiurl = "http://localhost:8080/api/";
const imagePath = "http://localhost:8080/";
const token = "ab508d11c127422684de8f8ca0a089";

export const _getCollection = (collection) => {
    return axios.get(`${apiurl}collections/get/${collection}?token=${token}`);
}

const _getImage = async (image, width) => {
    const result = await axios.get(`${apiurl}collections/get/images/?token=${token}&filter[name]=${image}`);
    const imagePath = result.data.entries[0].image.path;
    return await getFinalImagePath(imagePath, width);
}

const _getFinalImagePath = async (path, width) => {
    const result = await axios.get(`${apiurl}cockpit/image?token=${token}&src=${path}&w=${width}&o=true`);
    return `${imagePath}${result.data}`;
}

export const getImage = memoize(_getImage);

export const getCollection = memoize(_getCollection);

export const getFinalImagePath = memoize(_getFinalImagePath);