
const Header = ({title, image, children}) => {
  return (
    <Header className="header">
        <div className="header__container">
            <div className="header__container-bg">
                <img src={image} alt="Header Background Image" />
            </div>
        </div>
        <div className="header__content">
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    </Header>
  )
}

export default Header