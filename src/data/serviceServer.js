import axios from "axios";

export const getService = async () => {
    try {
        const data = await axios.get('http://localhost:8787/services');
        console.log(data.data)
        //set all service global
    }
    catch (e) {
        console.log(e)
    }
}

export const AddService = async (addData) => {
    try {
        const data = await axios.post('http://localhost:8787/service',addData);
        console.log(data.data)
        //add to store globale
    }
    catch (e) {
        console.log(e)
    }
}