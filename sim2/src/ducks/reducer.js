
const initState = {
    houses: ['hasnt mounted yet'],
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
const PART1 = 'PART1';
const PART2 = 'PART2';
const PART3 = 'PART3';
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
        case PART1:
            return {...state, ...action.payload};
        case PART2:
            return {...state, imageurl: action.payload}
        case PART3:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export function setHouses(obj)
{
    // console.log(obj);
    // initState.houses = obj.payload;
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

export function handlePart1Input(obj)
    {
        return({
            type: PART1,
            payload: obj
        });
    }
export function  handlePart2Input(imageurl)
{
    return({
        type: PART2,
        payload:imageurl
    })
}

export function  handlePart3Input(obj)
{
    return({
        type: PART3,
        payload: obj
    });
}

export default reducer;