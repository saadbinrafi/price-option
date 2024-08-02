import Feature from "../../../Feature/Feature";


// eslint-disable-next-line react/prop-types
const PriceOption = ({option}) => {
    // eslint-disable-next-line react/prop-types
    const  {name, price, features} = option;
    return (
        <div className="bg-blue-300 p-8 rounded-lg text-black flex flex-col  mx-5 lg:mx-12">
            <h2 className="pl-6">
                <span className="text-5xl font-bold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>

          
            <div className="pl-6 py-3 flex-grow">
                <h4 className="text-2xl">{name}</h4>
                {
                    // eslint-disable-next-line react/prop-types
                    features.map((feature, index) =><Feature
                        key={index} feature={feature}></Feature>)
                }
            </div>
            <button className="mt-12 bg-green-600 text-white w-full py-2 font-bold rounded-lg hover:bg-blue-700 hover:translate-x-1 hover:duration-500 ">Buy Now</button>
        </div>
    );
};

export default PriceOption;