console.log("Inicio de app");

const args = process.argv.slice(2);

// Funciones

async function obtenerProductos(url) {
    try {
        const response = await fetch(`https://fakestoreapi.com/${url}`);

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return await response.json();

    } catch (error) {
        console.log("Error al obtener productos:", error);
    }
}

async function eliminarProducto(producto) {
    try {
        const response = await fetch(`https://fakestoreapi.com/${producto}`, {
            method: "DELETE"
        });
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return await response.json();

    } catch (error) {
        console.log("Error al eliminar producto:", error);
    }
}

async function crearProducto(producto) {
    try {
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return await response.json();

    } catch (error) {
        console.log("Error al crear producto:", error);
    }
}


// Switch de casos

switch (args[0]) {

    case "GET":
        if (
            args[1] === "products" ||
            args[1]?.startsWith("products/")
        ) {
            const productos = await obtenerProductos(args[1]);
            console.log(productos);
        } else {
            console.log("Se ingresó un comando incorrecto");
        }
        break;


    case "POST":
        if (
            args[1] === "products" && args[2] && args[3] && args[4]
        ) {
            const precio = Number(args[3]);

            if (Number.isNaN(precio)) {
                console.log("El precio debe ser un número");
                break;
            }

            const producto = await crearProducto({
                title: args[2],
                price: precio,
                category: args[4]
            });

            console.log("Producto creado:", producto);
        } else {
            console.log("Se ingresó un comando incompleto o incorrecto");
        }
        break;


    case "DELETE":
        if (
            args[1] &&
            args[1].startsWith("products/") &&
            args[1].length > 9
        ) {
            const response = await eliminarProducto(args[1]);
            console.log("Producto eliminado:", response);
        } else {
            console.log("Se ingresó un comando incompleto o incorrecto");
        }
        break;


    default:
        console.log("Se ingresó un comando incorrecto");
}