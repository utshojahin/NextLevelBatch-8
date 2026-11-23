import type { IncomingMessage, ServerResponse } from "http";
import { createProduct, productService } from "../service/product.service";
import type { IProducts } from "../types/products";
import { bodyParser } from "../utils/bodyParser";

const productController =async (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  const urlParam = url?.split("/");

  const id =
    urlParam && urlParam[1] === "products" ? Number(urlParam[2]) : null;

  // get all products
  if (url === "/products" && method == "GET") {
    const products = productService();
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Products Retrived Successfully",
        data: products,
      }),
    );
  } else if (method === "GET" && id !== null) {
    const products = productService();
    const product = products.find((p:IProducts)=>p.id===id)
    
    
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product Retrived Successfully",
        data: product,
      }),
    );
  } else if(method === "POST"){

    const body = await bodyParser(req);
    const newProduct={
      id: Date.now(),
      ...body

    };

    const products =productService();
    products.push(newProduct);
    createProduct(products);

    res.writeHead(201, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Products Created Successfully",
        data: products,
      }),
    );

  }else if (method === "PUT" && id !== null) {
    const body = await bodyParser(req);
    const products = productService(); // [{},{}]

    const index = products.findIndex((p: IProducts) => p.id === id);
    // console.log(index);
    if (index < 0) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Product Not Found!",
        }),
      );
    }
    // product => [{},{}]
    // product[1] => {}

    // console.log(products[index]);

    products[index] = { id: products[index].id, ...body };

    createProduct(products);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product updated successfully!",
        data: products[index],
      }),
    );
  }else if (method === "DELETE" && id !== null) {
    const products = productService(); // [{},{}]
    const index = products.findIndex((p: IProducts) => p.id === id);
    // console.log(index);
    if (index < 0) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Product Not Found!",
        }),
      );
    }

    // const arr = ["a", "b", "c"];
    // console.log(arr.splice(2,1));
    // arr.splice(2, 1);
    // console.log(arr);

    products.splice(index, 1);

    createProduct(products);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product deleted successfully!",
      }),
    );
  }
  
};

export default productController;
