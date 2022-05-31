import { v4 as uuidv4 } from 'uuid';
const reducer = (state, action) => {
    // console.log(state);
    switch (action.type) {
        case "REMOVE":
            // console.log(action.payload);
            // console.log(state);
            const remove = state.filter((i) => {
                if (i.id !== action.payload) {
                    return i
                }
            })
            return remove;
            break;
        
        case "ADD":
            const newItem = {
              id: uuidv4(),
              text: action.payload,
            };
            const add = [...state, newItem];
            return add
            break;
        case "UPDATE":
            // console.log(action.payload.text);
            const update = state.map((i) => {
                if (i.id == action.payload.id) {
                    i.text = action.payload.text
                    return i
                }else return i
            })
            console.log(update);
            return state
            break;
      default:
        throw new Error();
    }   
}

export default reducer
