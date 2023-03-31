import { client, productsCollection } from "./mongoConnect.js";

const editProducts = async () => {
  try {
    await client.connect();
    const itemUpdated = await productsCollection.findOneAndUpdate(
      { name: "one scoop" },
      { $set: { name: "oneeeeee" } }
    );
    console.log(itemUpdated);
  } catch (error) {
    console.log(error);
  } finally {
    client.close;
  }
};

editProducts();
