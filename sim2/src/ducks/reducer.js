
const initState = {
    houses: ['1','2','3'],
    name: "",
    address: "",
    city: "",
    state: "",
    zip: 0,
    imageurl: "",
    monthlyMor: 0,
    desiredRent: 0
};

const GET = 'GET';
const DEL = 'DEL';
const ADD = 'ADD';
function reducer(state = initState, action)
{
    // type statemensts
    switch(action.type)
    {
        case GET:
            return {...state, houses: action.payload}
        case DEL:
            const deletedCopy = state.houses.filter((curVal) =>
            {   
                return curVal.id !== action.payload;
            })
            return {...state, houses: deletedCopy};
        case ADD:
            const addedCopy = state.houses.slice();
            addedCopy.push(action.payload);
            return{...state, houses: addedCopy};
        default:
            return state;
    }
}

export function setHouses(obj)
{
    obj.type = GET;
    return obj;
}
export function deleteHouse(id)
{
    return ({
        type: DEL,
        payload: id
    });
}
export function add(obj)
{
    return({
        type: ADD,
        payload: obj
    })
}

export default reducer;