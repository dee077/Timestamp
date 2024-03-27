import { LOGO_URL } from '../utils/constants';
import { LoginButton, SignupButton } from './LoginSignupButton';

const Header = () => {
  return (
    <div className="flex justify-between shadow-lg mx-3">
      <div className="flex items-center mx-10">
        <img className=" w-32" 
             src={ LOGO_URL }
             alt="logo" 
        />
      </div>
      <div className="flex items-center">
        <ul className="flex px-4 mx-4 py-3 my-3 items-center">
          <li className="px-4 cursor-pointer">Home</li>
          <li className="px-4 cursor-pointer">About Us</li>
          <li className="px-4 cursor-pointer">Contact</li>
          <li className="px-4"><LoginButton/></li>
          {/* <li className="px-4"><SignupButton/></li> */}
        </ul>
      </div>
    </div>
  )
}

export default Header;
