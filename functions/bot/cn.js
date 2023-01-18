const { MongoClient, ServerApiVersion } = require('mongodb');

async function f(bot, mdb) {
  const client = new MongoClient(mdb, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  try {
    client.connect(async err => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      // collection.insertOne({"name: ": "sdid"}).then((res1) => console.log(res1))

      // collection.deleteOne({"name: ": "sdid"}).then((res1) => console.log(res1))

      await collection.findOne({ "name: ": "sdid" }).then((res1) => {
        bot.telegram.sendMessage('@shabdt', JSON.stringify(res1));
        console.log(res1)
      }
      )
      collection.findOne({ "name: ": "sdid" }).then((res1) => {
        console.log(res1)
        bot.telegram.sendMessage('@shabdt', JSON.stringify(res1));
      }
      )
    })
  } finally {

    await client.close();
    console.log('connection Closed')
    return
  }
}
module.exports = f