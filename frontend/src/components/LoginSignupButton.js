import { GOOGLE_LOGO } from "../utils/constants";

export const LoginButton = () => {
    const handleGoogleLogin = async () => {
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <button
                onClick={handleGoogleLogin}
                className="bg-blue-500 hover:bg-blue-700 text-white flex items-center font-bold py-1 rounded focus:outline-none focus:shadow-outline"
            >
              <img className="w-8 mx-1 rounded-md" src={GOOGLE_LOGO} alt="Google logo" />
              <span className="px-4">Sign in with Google</span>
            </button>
        </div>
    );
};

export const SignupButton = () => {
    const handleGoogleSignup = () => {
        // Handle Google SSO signup here
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <button
                onClick={handleGoogleSignup}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Sign up with Google
            </button>
        </div>
    );
};