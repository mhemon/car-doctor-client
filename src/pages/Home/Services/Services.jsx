import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);
    const [searchQuery, setSearchQuery] = useState('')
    const [asc, setAsc] = useState(true)
    const searchRef = useRef(null)

    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${searchQuery}&sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [asc, searchQuery])

    const handleSearch = () => {
        setSearchQuery(searchRef.current.value);
    }

    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" onChange={handleSearch} ref={searchRef} placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square" onClick={handleSearch}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <button onClick={() => setAsc(!asc)} className="btn btn-primary">
                    {asc ? 'Price: Hight to Low' : 'Price: Low to Hight'}
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;