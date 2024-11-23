
const getStoredWishList = () => {
        const storedWishListStr = localStorage.getItem('wish-list');
        if(storedWishListStr){
                const storedWishList =JSON.parse(storedWishListStr);
                return storedWishList;
        }
        else{
            return [];
        }
}


const addToStoredWishtList = (id) => {
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id)){
        console.log(id,'already exist.');
        
    }
    else{
        storedWishList.push(id);
        const storedWishListStr =JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
    }
}


const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('cart-list');
    if(storedListStr){
            const storedList =JSON.parse(storedListStr);
            return storedList;
    }
    else{
        return [];
    }
}


const addToStoredCartList = (id) => {
const storedList = getStoredCartList();
if(storedList.includes(id)){
    console.log(id,'already exist.');
    
}
else{
    storedList.push(id);
    const storedListStr =JSON.stringify(storedList);
    localStorage.setItem('cart-list', storedListStr);
}
}

const removeFromStoredCartList = (id) => {
    const storedList = getStoredCartList().filter(itemId => itemId !== id);
    localStorage.setItem('cart-list', JSON.stringify(storedList));
};
const removeFromStoredWishList = (id) => {
    
    const storedList = getStoredWishList().filter(itemId => itemId !== id);
    localStorage.setItem('wish-list', JSON.stringify(storedList));
};

const removeCartList = () => {
    localStorage.removeItem('cart-list');
};

 

export {addToStoredCartList,addToStoredWishtList,getStoredCartList,getStoredWishList,removeFromStoredCartList,removeCartList,removeFromStoredWishList}