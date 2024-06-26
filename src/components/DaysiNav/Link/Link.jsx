/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const Link = ({ route }) => {
    return (

        <li className="lg:flex mr-5">
            <a href={route.path}>{route.name}</a>
        </li>

    );
}


export default Link;