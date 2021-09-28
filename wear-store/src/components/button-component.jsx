import './button-component.scss';

const CustomButton = ({ isGoogleSignIn, children,  onClick ,...otherProps }) => {
    return (<button onClick={() => { onClick() }} className={`${isGoogleSignIn ? 'google-color' : ''} custom-button`} {...otherProps}> {children} </button>)
}
export default CustomButton;