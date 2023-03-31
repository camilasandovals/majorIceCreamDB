import { client, productsCollection } from "./mongoConnect.js";

const getAll = async () => {
    try {
      await client.connect()
      const all = await productsCollection.find().toArray();
      console.log(all);
    } catch (error) {
      console.log(error)
    } finally {
      await client.close()
    }

};

getAll();