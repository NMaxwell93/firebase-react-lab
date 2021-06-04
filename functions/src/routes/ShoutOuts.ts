import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { getClient } from "../db";
import { ObjectId } from "mongodb";
import ShoutOuts from "../model/shoutOuts";

// creates an Express application - allows us to create and and use APIs
const app = express();

// Enable CORS so that this can be used from web-apps on other domains.
app.use(cors());

// Allow JSON request bodies for PUT and POST
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const client = await getClient();
    const results = await client
      .db()
      .collection<ShoutOuts>("shoutOuts")
      .find()
      .toArray();
    res.json(results); // send JSON results
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const client = await getClient();
    const shoutOut = await client.db().collection<ShoutOuts>('shoutOuts').findOne({ _id : new ObjectId(id) });
    if (shoutOut) {
      res.json(shoutOut);
    } else {
      res.status(404).json({message: "Not Found"});
    }
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({message: "Internal Server Error"});
  }
});

app.post("/", async (req, res) => {
  const shoutOut = req.body as ShoutOuts;
  try {
    const client = await getClient();
    const result = await client
      .db()
      .collection<ShoutOuts>("shoutOuts")
      .insertOne(shoutOut);
      shoutOut._id = result.insertedId;
    res.status(201).json(shoutOut);
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.put("/:id", async (req, res) => {
  const id = req.params.id;
  const shoutOut = req.body as ShoutOuts;
  delete shoutOut._id;
  try {
    const client = await getClient();
    const result = await client.db().collection<ShoutOuts>('shoutOuts').replaceOne({ _id: new ObjectId(id) }, shoutOut);
    if (result.modifiedCount === 0) {
      res.status(404).json({message: "Not Found"});
    } else {
      shoutOut._id = new ObjectId(id);
      res.json(shoutOut);
    }
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({message: "Internal Server Error"});
  }
});

app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const client = await getClient();
    const result = await client
      .db()
      .collection<ShoutOuts>("shoutOuts")
      .deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      res.status(404).json({ message: "Not Found" });
    } else {
      res.status(204).end();
    }
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default functions.https.onRequest(app);
