import { client, productsCollection } from "./mongoConnect.js";


const deleteFruit = async () => {
    try {
        await client.connect()
        const itemDeleted = await productsCollection.deleteOne({ name: "one scoop" });
        console.log(itemDeleted);
    } catch (error) {
        console.log(error)
    } finally {
        await client.close
    }
};

deleteFruit();