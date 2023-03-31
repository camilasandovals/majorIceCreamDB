import { client, productsCollection } from "./mongoConnect.js";

const addProducts = async () => {
  const products = [
    {
    firstname: "one scoop",
    price: 4.99,
    stock: 20,
  },
    {firstname: "double scoop",
    price: 8.99,
    stock: 50
    },
    {firstname: "waffle cone",
    price: 1.99,
    stock: 30
    },
    {firstname: "sundae",
    price: 5.99,
    stock: 10
    },
    {firstname: "banana split",
    price: 6.99,
    stock: 55
    } ]

  try {
    await client.connect()
    const added = await productsCollection.insertMany(products);
    console.log(added);
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }

};

addProducts()