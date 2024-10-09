
type PropTypes ={
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}
const Header = ({viewCart,setViewCart}:PropTypes) => {

    const content =(
        <header className="header">
            <div className="header__title-bar">
                <h1>I watch</h1>
                <div className="header__price-box">
                    <p>Total items:</p>
                    <p>Total price:</p>
                </div>

            </div>
        </header>
    )
  return (
    <div>
      
    </div>
  )
}

export default Header
