//2- Make logProduct function
function logProduct(product) {
    console.log("Product ID: ".concat(product.id, ",  product name: ").concat(product.name, ", product price: ").concat(product.price, ", in stock: ").concat(product.inStock));
}
//5- Make wraping value function
function wrapValue(value) {
    return [value];
}
//6- Make getProduct function (BONUS)
function printProductInfo(value) {
    if (value.success) {
        logProduct(value.data);
    }
    else {
        console.error("Error: ".concat(value.message));
    }
}
//7- Make test function for productOrError
function printProductInfo1(value) {
    if (value.success) {
        return value.data;
    }
    else {
        return "Error: ".concat(value.message);
    }
}
// Example usage
var product = {
    id: 1,
    name: "Laptop",
    price: 20000,
    inStock: true,
};
var Api1 = {
    data: product,
    success: true,
    message: "Product fetched successfully",
};
var Api2 = {
    data: product,
    success: false,
    message: "Product not found",
};
printProductInfo(Api1);
printProductInfo(Api2);
//example usage of productOrError
var result1 = printProductInfo1(Api1);
var result2 = printProductInfo1(Api2);
if (typeof result1 === "string") {
    console.error(result1);
}
else {
    logProduct(result1);
}
if (typeof result2 === "string") {
    console.error(result2);
}
else {
    logProduct(result2);
}
