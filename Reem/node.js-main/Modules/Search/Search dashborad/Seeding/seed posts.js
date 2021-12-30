const fs = require('fs');
const post = require('../Model/model');
const Connection = require('Configurations\configuration.js');

Connection().then();


// Read The JSON files
const posts = JSON.parse(fs.readFileSync(`${__dirname}/_seedData/products.json`, 'utf-8'));

// Import Sample Data In DB
const importData = async () => {
    try {
        await Product.create(products);
        console.log(`Data successfully imported`);
        process.exit();
    } catch (err) {
        console.log(err);
    }
}
