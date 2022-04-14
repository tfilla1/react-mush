const Theme = ({current}) => {
    return ( 
        <div className='header-side-bar'>
            <button id='changeTheme'>{current}</button>
        </div>
     );
}
 
export default Theme;