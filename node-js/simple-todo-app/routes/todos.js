var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    //res.send("Hi macha!");
    var db = req.db;
    var collection = db.get('todos');
    collection.find({}, {}, (err, docs) => {
        res.send(docs);
    })
});

router.get('/owner/:id', (req, res) => {
    let db = req.db;
    let owner = req.params.id;

    let collection = db.get('todos');
    collection.find({"owner": owner}, {}, (err, docs) => {
        if(err) res.send(`Error finding records`);
        if(!docs) res.send(`No records found by owner ${owner}`)
        res.send(docs);
    })
})

router.post('/', (req, res) => {
    var db = req.db;
    let desc = req.body.desc;
    let owner = req.body.owner;

    var collection = db.get('todos');
    collection.insert({
        "desc": desc,
        "owner": owner
    }, (err, doc) => {
        if (err) res.send("Problem inserting into DB");
        else res.send(`Successfully inserted todo ${desc} and assigned to ${owner}`);
    });
});

router.put('/:id', (req, res) => {
    var db = req.db;
    let id = req.params.id;
    let desc = req.body.desc;
    console.log(id + ' ' + desc);
    let collection = db.get('todos');
    collection.update({"_id": id},{
        $set: {
            "desc": desc
        }
    }, {}, (err) => {
        if(err) res.send('Problem updating record');
        res.send(`Updated successfully. Changed ${desc} for ${id}`);
    })

})

router.delete('/', (req, res) =>{
    var db = req.db;
    let criteria = req.body.criteria;
    console.log(criteria);
    let collection = db.get('todos');
    collection.findOneAndDelete(criteria, {}, (err, doc) => {
        if(err) res.send("Problem deleting from DB");
        else res.send(`Successfully deleted todo`);
    });
});

module.exports = router;