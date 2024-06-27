import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [

        {
            "id": 1,
            "name": "Basic gym",
            "features": [
                "Standard gym features",
                "Email support"
            ],
            "price": 49.99,
        },
        {
            "id": 2,
            "name": "Advanced gym",
            "features": [
                "Advanced gym features",
                "Priority email support",
                "Phone support (9am-5pm)"
            ],
            "price": 79.99,
        },
        {
            "id": 3,
            "name": "Premium gym",
            "features": [
                "Premium gym features",
                "24/7 priority support",
                "Dedicated account manager",
                "Customizable templates"
            ],
            "price": 129.99,
        }

    ]




    return (
        <div className="m-12">
            <h2 className="text-5xl text-center
            my-5">Best prices in the town</h2>
            <div className="grid lg:grid-cols-3 justify-center gap-5 ">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;