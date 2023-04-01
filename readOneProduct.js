import { client, productsCollection } from "./mongoConnect.js"

const readOne = async() => {

    try{
        await client.connect()
        const item = await productsCollection.findOne({firstname: "sundae"})
        console.log(item)
    } catch(error){
        console.log(error)
    } finally {
        await client.close()
    }

}

readOne()