module.exports = {
    getHouses: function(request, response)
    {
        //make two db requests, if the houses db is created pull the info,
        //if it isnt, make the table and then pull the info
        request.app.get('db').get_houses().then((houses) =>
        {
            response.status(200).send(houses);
        })
        
    },
    createHouse: function(request, response)
    {
        // const {name, address, city, state, zip, image_url, monthly_mor, monthly_rent} = request.body;
        let house = [];
        for(let key in request.body)
        {
            house.push(request.body[key]);
        }
        console.log(request.body);
        request.app.get('db').create_house(house).then(() =>
        {
            response.status(200).json('you created a house');
        })
        .catch((error) =>
        {
            console.log(error);
            response.status(500).json('couldnt create house');
        })
        
    },
    updateHouse: function(request, response)
    {
        response.status(200).json('you updated a house');
    },
    deleteHouse: function(request, response)
    {
        const {id} = request.params;
        request.app.get('db').delete_house(id).then(() =>
        {
            response.status(200).json('you deleted a house');
        }).catch((error) =>
        {
            console.log(error);
            response.status(500).json('couldnt delete house');
        })
        
    },
};