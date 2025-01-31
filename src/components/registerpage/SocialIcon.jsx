import React from 'react';
import Image from "../../assets/search.png"; // Import the logo image

const SocialIcons = () => {
    return (
        <div className="flex justify-center mt-4 items-center">
            <a 
                href="https://gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
                <span className="font-medium">Continue with Google</span>
                
                {/* Google logo */}
                <img 
                    src={Image} 
                    alt="Google Logo" 
                    className="w-5 h-5" 
                />
            </a>
        </div>
    );
};

export default SocialIcons;