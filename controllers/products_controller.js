module.exports = {

    create: (req,res,next) => {
        const db = req.app.get('db');
        const {name,description,price,image_url} = req.body;
        db.create_product([name,description,price,image_url]).then(products => {
            res.status(200).json(products)
        }) .catch(err => console.log(err));
    },


    getOne: (req,res,next) => {
        const db = req.app.get('db');
        const {product_id} = req.params;
        db.read_product([product_id]).then(products => {
            res.status(200).json(products)
        }).catch( err => {
            res.status(500).json({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
        });
    },

    getAll: (req,res,next) => {
        const db = req.app.get('db');
        db.read_products().then(products => {
            res.status(200).json(products)
        }).catch( err => {
            res.status(500).json({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err) 
        });
    } ,

    update: (req,res,next) => {
        const db = req.app.get('db');
        const {product_id} = req.params;
        const {desc} = req.query
        console.log(req.query);

        db.update_product([product_id, desc]).then(products => {
            res.status(200).json(products)
        }).catch( err => {
            res.status(500).json({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
    } ,

    delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        console.log("hello");
    
        dbInstance.delete_product([ params.id ])
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      }
    };