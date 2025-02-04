import {useEffect, useState} from "react";
import {addProducto, getProductos} from "./api/ProductoAPI.js";
import ProductoView from "./components/ProductoView.jsx";

const initialStateForm = {
    nombre: "",
    descripcion: "",
    precio: "",
}

function App() {

    const [producto, setProducto] = useState([]);
    const [form, setForm] = useState(initialStateForm)

    useEffect(() => {
        getProductos().then(data => {
            setProducto(data);
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        addProducto(producto).then(data => {
            console.log(data);
            setForm(initialStateForm);
        });

    }


    return (
        <>
            {
                producto.length > 0 &&
                producto.map((producto) => (
                    <>
                        <ProductoView id={producto.id} producto={producto}/>
                    </>
                ))
            }
            <div>
                <h2>Formulario</h2>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="nombre">Nombre</label>
                            <input
                                className="form-control"
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={form.nombre}
                                onChange={(e) => setForm({...form, nombre: e.target.value})}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="descripcion">Descripcion</label>
                            <input
                                className="form-control"
                                type="text"
                                id="descripcion"
                                name="descripcion"
                                value={form.descripcion}
                                onChange={(e) => setForm({...form, descripcion: e.target.value})}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="precio">Precio</label>
                            <input
                                className="form-control"
                                type="text"
                                id="precio"
                                name="precio"
                                value={form.precio}
                                onChange={(e) => setForm({...form, precio: e.target.value})}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="submit"
                                value="Guardar"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default App
