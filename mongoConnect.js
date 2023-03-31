import { MongoClient } from "mongodb";
import { MONGOURI } from "./credentials.js";


// Create instance of Mongo
export const client = new MongoClient(MONGOURI); //Use the URI path

// Connect to db - or create if there is none
const database = client.db("majorIceCream");

// Connect to collection - or create if nonw
export const productsCollection = database.collection("products");
