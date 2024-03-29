import './emptyCart.css'




const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    
    return (
        <div className="Component">
            <div className="Container">
                <img className="Image" src={imgurl} />
                <div className="Typography">Your cart is empty!</div>
                <span className="Typography">Add items to it now.</span>
            </div>
        </div>
    )
}

export default EmptyCart;