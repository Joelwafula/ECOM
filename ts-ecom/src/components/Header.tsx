import Nav from "./Nav"
import useCart from "../hooks/useCart"

type PropTypes ={
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}
const Header = ({viewCart,setViewCart}:PropTypes) => {

    const {totalItems,totalPrice} = useCart()

    const content =(
        <header className="header">
            <div className="header__title-bar">
                <h1>I watch</h1>
                <div className="header__price-box">
                    <p>Total items:{totalItems}</p>
                    <p>Total price: {totalPrice}</p>
                </div>
            </div>
            <Nav viewCart={viewCart} setViewCart={setViewCart}/>
        </header>
    )
  return content
}

export default Header
