const router = require('express').Router();
let Nft = require('../models/nft.model');

router.route('/').get((req,res) => {
    Nft.find()
    .then(nfts => res.json(nfts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    Nft.find({hash: req.params.id})
    .then(nfts => res.json(nfts))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const name = req.body.name;
    const desc = req.body.desc;
    const hash = req.body.hash;
    const image = req.body.image;
    const price = Number(req.body.price);
    const category = req.body.category;
    const metadata = req.body.metadata;
    const contract = req.body.contract;

    const newNft = new Nft({
        name,
        desc,
        hash,
        image,
        price,
        category,
        metadata,
        contract,
    });

    newNft.save()
    .then(() => res.json('Nft added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;