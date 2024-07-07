import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";



const DefaultData = async() => {
    try {
        
        // await Product.deleteMany({});  // delete all the existing data -> not a good practise instead of we can add unique in product id so that products ant be duplicated.
       await Product.insertMany(products);
        console.log('Default data inserted successfully');

    } catch (error) {
        console.log('Error while inserting default data', error.message);
    }
   
}

export default DefaultData;