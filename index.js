const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const cC = require("./controller/customerController")
app.use(bodyParser.json())
app.set("json spaces", 2);

app.get("/api/customers", cC.read);
app.post("/api/customers/:name", cC.create)

app.get("/api/customer", function(req, res){
let foundCustomer = customerNames.filter((customer) => {
    return customer.id == req.query.id
})
res.status(200).json(foundCustomer)
})


//   app.put("/api/customers/:oldName/:newName", (req, res) => {
//     let { oldName, newName } = req.params;
//     let index = customerNames.findIndex(customer => {
//         customer.name == oldName;
//     })
//     if (index !== -1) {
//         customerNames[index].name = newName;     
//     }
//     res.status(200).json(customerNames)  
//   })

app.put("/api/customers/:oldName/:newName", (req, res) => {
let { oldName, newName } = req.params;
let index = customerNames.findIndex(customer => customer.name == oldName)
if (index !== -1) {
    customerNames[index].name = newName;     
}
res.status(200).json(customerNames)  
})

const port = 3000
app.listen(3000, () => console.log(`Server listening on port ${port}`));