import axios from "axios";
import serviceData from "./serviceData";

export const getService = async () => {
    try {
        const data = await axios.get('http://localhost:8787/services');
        console.log(data.data)
        //set all service global

        serviceData.setServices(data.data)
    }
    catch (e) {
        console.log(e)
    }
}

export const AddServiceServer = async (addData) => {
    try {
        const data = await axios.post('http://localhost:8787/service', addData);
        console.log(data.data)
        //add to store globale
        serviceData.addService(data.data)
    }
    catch (e) {
        console.log(e)
    }
}