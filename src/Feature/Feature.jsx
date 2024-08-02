import { AiFillCheckCircle } from "react-icons/ai";
const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center" ><AiFillCheckCircle className="text-green-800 mr-2"></AiFillCheckCircle>{feature}</p>
        </div>
    );
};

export default Feature;