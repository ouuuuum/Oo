const express = require("express");
const app = express();
const PORT = 8080;
app.listen(PORT, () => {
 console.log(`Running Express server on port ${PORT}`);
});
app.get("/groceries", (req, res) => {
    res.send([
        {
            item: "Amani",
            quantity: 20,
            },
            {
                item: "Kahlouch",
                quantity: 200,
                },
    {
    item: "milk",
    quantity: 2,
    },
    {
    item: "bread",
    quantity: 2,
    },
    ]);
   });

   