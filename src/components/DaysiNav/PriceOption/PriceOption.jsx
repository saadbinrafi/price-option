

// eslint-disable-next-line react/prop-types
const PriceOption = ({option}) => {
    // eslint-disable-next-line react/prop-types
    const  {name, price, features} = option;
    return (
        <div className="bg-blue-300 p-8 rounded-lg">
            <h2>
                <span className="text-5xl">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>

            <h4 className="text-2xl">{name}</h4>
        </div>
    );
};

export default PriceOption;