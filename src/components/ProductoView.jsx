
const ProductoView = ({producto}) => {
    return (
        <>
            <h1>{producto.id}</h1>
            <h2>{producto.nombre}</h2>
            <h3>{producto.descripcion}</h3>
            <h4>{producto.precio}</h4>
        </>
    );
};

export default ProductoView;