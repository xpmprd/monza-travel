import React from 'react';
import {useContext} from 'react';
import {RoomContext1} from '../context1';
import Title from '../components/Title';

const getUnique = (items,value)=>{
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomsFilter1({rooms}) {
    const context = useContext(RoomContext1);
    const {
        handleChange1,
        type,
        region,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        Bar,
        Restaurant,
        Pool,
        wifi,
    } = context;


    let types = getUnique(rooms,'type');
    


    types = ['all',...types];

    types = types.map((item,index)=>{
        return (<option value={item} key={index}>{item}</option>
        )
    });





    let regions = getUnique(rooms,'region');
    


    regions = ['all',...regions];

    regions = regions.map((item,index)=>{
        return (<option value={item} key={index}>{item}</option>
        )
    });

    




    let people = getUnique(rooms,'capacity');
    people = people.map((item,index)=>{
    return <option key={index} value={item}>{item}</option>
    })

    return (
        <section className="filter-container">
            
            <form className="filter-form">
                {/*select type */}
                <div className="form-group">
                    <label htmlFor="type">destination</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange1}>
                        {types}
                    </select>
                </div>
                {/*end of select type */}


                 {/*select type */}
                 <div className="form-group">
                    <label htmlFor="region">region</label>
                    <select name="region" id="region" value={region} className="form-control" onChange={handleChange1}>
                        {regions}
                    </select>
                </div>
                {/*end of select type */}

                {/*guests*/}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange1}>
                        {people}
                    </select>
                </div>
                {/*end of guests */}
                {/* price */}
                <div className="form-group">
                    <label htmlFor="price">
                        price ${price}
                    </label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange1} className="form-control"/>
                </div>
                {/* end of price*/}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="Bar" id="Bar" checked={Bar} onChange={handleChange1}/>
                        <label htmlFor="Bar">Bar</label>
                    </div>

                

                    <div className="single-extra">
                        <input type="checkbox" name="wifi" id="wifi" checked={wifi} onChange={handleChange1}/>
                        <label htmlFor="wifi">wi-fi</label>
                    </div>

                    <div className="single-extra">
                        <input type="checkbox" name="Restaurant" id="Restaurant" checked={Restaurant} onChange={handleChange1}/>
                        <label htmlFor="Restaurant">Restaurant</label>
                    </div>


                    <div className="single-extra">
                        <input type="checkbox" name="Pool" id="Pool" checked={Pool} onChange={handleChange1}/>
                        <label htmlFor="Pool">Pool</label>
                    </div>
                    
                </div>
                {/* end of extras */}
                <div className="form-group">
                    
                    </div>
            </form>
        </section>
    )
}