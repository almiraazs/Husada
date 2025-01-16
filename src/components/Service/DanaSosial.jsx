import React, { useState } from "react";

const DanaSosial = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <button 
                className="w-full text-left px-4 py-3 bg-blue-100 hover:bg-blue-200 font-medium"
                onClick={() => setIsOpen(!isOpen)}
                >
                    Dana Sosial
            </button>
            {isOpen && (
                <div className="bg-white text-gray-700 px-4 py-3">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas repellendus quam veritatis magni! Error nesciunt cupiditate velit ipsam eligendi doloremque dolore reiciendis quis. Corrupti fugiat nostrum voluptatum. Repellat, beatae nisi.
                    </p>
                    <ul className="list-disc list-inside mt-2">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ex, voluptatem at sapiente amet, illum ratione fugit minus, reiciendis eum consequuntur! Modi autem, culpa sequi architecto corporis vero officia. Doloribus?</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis facere velit inventore. Natus atque, id, nisi rem corporis sequi veritatis sapiente adipisci praesentium tempore distinctio provident expedita odit vitae beatae?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequuntur asperiores fuga ipsa vitae blanditiis dolorem molestias, quidem praesentium voluptatem commodi dignissimos nam harum eligendi esse dolorum quis officia repellendus.</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DanaSosial;