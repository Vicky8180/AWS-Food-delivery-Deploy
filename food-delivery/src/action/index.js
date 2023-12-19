export const AddtoCart=(adding)=>{
    return{
        type:"ADD",
        payload:adding
    }
}
export const RemovetoCart=(removal)=>{
    return{
        type:"REMOVE",
        payload:removal
    }
}
export  const Search2=(input)=>{
    return {
        type:"SEARCH",
        payload:input,
    }
}
export  const Search3=(input)=>{
    return {
        type:"SEARCH3",
        payload:input,
    }
}