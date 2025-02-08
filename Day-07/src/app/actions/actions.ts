import { Product } from "../../../types/products";


export const addToCart=(product : Product)=>{
    const cart : Product[]=JSON.parse(localStorage.getItem('cart') || '[]')

const existingProductIndex=cart.findIndex(item => item._id === product._id)
if(existingProductIndex > -1 && cart[existingProductIndex]){
    cart[existingProductIndex].inventory = (cart[existingProductIndex].inventory ?? 0) + 1;
}
else {
    // Add new product with initial stock level
    cart.push({ ...product, inventory: 1 });
}

// Save updated cart back to localStorage
localStorage.setItem("cart", JSON.stringify(cart));
};


export const removeFromCart = (productId : string) => {
    let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item._id !== productId)
    localStorage.setItem('cart', JSON.stringify(cart))
}


export const updateCartQuantity = (productId :string, quantity : number) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const productIndex = cart.findIndex(item => item._id === productId)

    if(productIndex > -1) {
        cart[productIndex].inventory = quantity;
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export const getCartItems = (): Product[] => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };
  