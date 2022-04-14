import Theme from './Theme';
const Header = () => {
    return ( 
        <header className='header-container'>
        <div className='header-menu'></div>
        <div className='header-title'>
            <h1><a href="/">mush</a></h1>
            <h2>a world of music to be found.</h2>
        </div>
        <Theme current="simple" />
    </header>
     );
}
 
export default Header;