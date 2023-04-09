// Building Router
const router = require('express').Router();

// Scan Router
router.post("/", async (request, response) => {
    try {
        
        
        return response.json({
            result: something
        }); 
    } catch (error) {
        return response
            .status(500)
            .json(error);
    }
});

module.exports = router;