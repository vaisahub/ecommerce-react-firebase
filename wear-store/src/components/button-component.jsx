import './button-component.scss';

const CustomButton = ({ isGoogleSignIn,children, ...otherProps }) => {
    return (<button className={`${isGoogleSignIn? 'google-color':''} custom-button`} {...otherProps}> {children} </button>)
}
export default CustomButton;