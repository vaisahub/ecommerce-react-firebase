import './button-component.scss';

const CustomButton = ({ children, ...otherProps }) => {
    console.log({ ...otherProps });
    return (<button className="custom-button" {...otherProps}> {children} </button>)

}
export default CustomButton;