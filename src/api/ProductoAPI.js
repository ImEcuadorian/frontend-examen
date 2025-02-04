import axios from "axios";

export const getProductos = async () => {
    const data = await axios.get("http://localhost:4000/api/producto");
    console.log(data);
    return data;
}

export const addProducto = async (producto) => {
    const data = await axios.post("http://localhost:4000/api/producto", producto);
    console.log(data);
    return data;
}

