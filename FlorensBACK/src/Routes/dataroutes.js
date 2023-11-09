const express = require('express');
const db = require('../Config/Config-Firebase');


/******** Configuración de rutas *******/
const router = express.Router();

router.get("/Necesidades", async (req, res) =>{
    const colRef = db.collection("Necesidades_14");
    const snapshot =await colRef.get();
    const list = snapshot.docs.map((doc) => doc.data());
    res.send(list);
})
module.exports = router;