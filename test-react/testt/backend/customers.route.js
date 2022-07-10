const router = require('express').Router();
let customers = require('./customers.model');


router.route('/').get((req,res)=>{
    customers.find().then(customers=>res.json(customers)).catch(
        err=>res.status(400).json('Erroorr '+ err)
    );
});

router.route('/add').post((req,res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const address = req.body.address;
    const phoneNumber = req.body.phoneNumber;

    const newCustomer = new customers({
        id,
        name,
        address,
        phoneNumber
    });

    newCustomer.save().then(()=>res.json('customer added!')).catch(
        err=>res.status(400).json('Errrorr: '+ err)
    );
})

router.route('/:id').get((req,res)=>{
    customers.findById(req.params.id).then(cust=>res.json(cust)).catch(
        err=>res.status(400).json('Error '+err)
    )
})

router.route('/:id').delete((req,res)=>{
    customers.findByIdAndDelete(req.params.id).then(
        ()=>res.json('Customer deleted')
    ).catch(err=>res.status(400).json('Error: '+ err))
})

router.route('/update/:id').post((req,res)=>{
    customers.findById(req.params.id).then(cust =>{
        cust.id = req.body.id;
        cust.name = req.body.name;
        cust.address = req.body.address;
        cust.phoneNumber = req.body.phoneNumber;

        cust.save().then(()=>res.json('customer updated')
        ).catch(err=>res.status(400).json('ERor '+err))
    }).catch(err=>res.status(400).json('Error: is : '+err))
})

module.exports = router;