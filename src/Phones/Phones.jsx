import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, } from 'recharts';
import { Audio } from 'react-loader-spinner'


const Phones = () => {
    const [phones, setPhones] = useState ([]);

    const [loading, setLoading] = useState(true)



    useEffect (() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone').then(res => res.json()).then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone').then(data => {

            const phonedata = data.data.data;
            const phonesWithFakeData = phonedata.map(phone =>{
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split("-")[1])
                }
                return obj;
            })
            setPhones(phonesWithFakeData);
            // console.log(phonesWithFakeData);
            setLoading(false);


        })


    },[])


    return(
        <div className="p-5 md:mx-5 lg:mx-12 my-5">

            
            {loading && <div className="my-5">
            
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="three-dots-loading"
                    wrapperStyle
                    wrapperClass
                />
                </div>
            }
            


            <h2 className="text-5xl text-center py-5">Phones: {phones.length}</h2>

            <BarChart width={600} height={400} data=  {phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        
            
           

        </div>
    );
};

export default Phones;
