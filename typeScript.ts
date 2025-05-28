//1- Make Product interface class
interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

//2- Make logProduct function
function logProduct(product: Product): void {
  console.log(
    `Product ID: ${product.id},  product name: ${product.name}, product price: ${product.price}, in stock: ${product.inStock}`
  );
}

//3- Make type productOrError
type productOrError = Product | string;

//4- Make ApiResult interface
interface ApiResult<T> {
  data: T;
  success: boolean;
  message: string;
}

//5- Make wraping value function
function wrapValue<T>(value: T): T[] {
  return [value];
}

//6- Make getProduct function (BONUS)
function printProductInfo(value: ApiResult<Product>): void {
  if (value.success) {
    logProduct(value.data);
  } else {
    console.error(`Error: ${value.message}`);
  }
}

//7- Make test function for productOrError
function printProductInfo1(value: ApiResult<Product>): productOrError {
  if (value.success) {
    return value.data;
  } else {
    return `Error: ${value.message}`;
  }
}

// Example usage
const product: Product = {
  id: 1,
  name: "Laptop",
  price: 20000,
  inStock: true,
};

const Api1: ApiResult<Product> = {
  data: product,
  success: true,
  message: "Product fetched successfully",
};

const Api2: ApiResult<Product> = {
  data: product,
  success: false,
  message: "Product not found",
};

printProductInfo(Api1);
printProductInfo(Api2);

//example usage of productOrError
const result1 = printProductInfo1(Api1);
const result2 = printProductInfo1(Api2);

if (typeof result1 === "string") {
  console.error(result1);
} else {
  logProduct(result1);
}

if (typeof result2 === "string") {
  console.error(result2);
} else {
  logProduct(result2);
}

