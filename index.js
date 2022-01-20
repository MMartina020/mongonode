const mongodb = require('mongodb');
const MongoClient=mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect( url , (err, client) => {
    if(err){
        console.log(err);
        throw err;
    }

    console.log(`MongoDB csatlakoztatva: ${url}`);
    //Innentől dolgozhatunk:
    const dbName=client.db("allatok");
    const collection = dbName.collection('hazi'); 

    //Egy objektum hozzáadása:
    collection.insertOne(
        {kutya:"Malika", kor:14}
    )

    collection.insertMany( 
        [
            {macska:"Lukrécia", kedvenc: ["gombolyag", "dorombol", "tej"]},
            {kutya: "Ödön", kor: 18, kedvenc: []}
        ]
    )
})