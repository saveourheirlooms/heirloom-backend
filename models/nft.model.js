const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nftSchema = new Schema({
    name: {type: String, required: true},
    desc: {type: String, required: true},
    hash: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    metadata: {type: String, required: true},
    contract: {type: String, required: true},
    owner: {type: String, required: true},
    tokenId: {type: Number, required: true},
},
    {
        timestamps: true,
    }
);

const Nft = mongoose.model('Nft', nftSchema);

module.exports = Nft;
