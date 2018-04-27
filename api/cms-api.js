import axios from "axios";
import memoize from "memoizee";

const apiurl = "http://localhost:8080/api/";
const imagePath = "http://localhost:8080/";
const token = "a48aa199ce8bf8ca39d05437fb38e9";

export const _getCollection = (collection) => {
    return axios.get(`${apiurl}collections/get/${collection}?token=${token}`);
}

const _getImage = async (image) => {
    const result = await axios.get(`${apiurl}collections/get/images/?token=${token}&filter[name]=${image}`);
    const imagePath = result.data.entries[0].image.path;
    return await getFinalImagePath(imagePath);
}

const _getFinalImagePath = async (path) => {
    const result = await axios.get(`${apiurl}cockpit/image?token=${token}&src=${path}&w=120&h=120&o=true`);
    return `${imagePath}${result.data}`;
}

export const getImage = memoize(_getImage);

export const getCollection = memoize(_getCollection);

export const getFinalImagePath = memoize(_getFinalImagePath);