import React, { Component } from 'react';
// import items from './data1';
import createClient from './Contentful1';

const RoomContext1 = React.createContext();



class RoomProvider1 extends Component{
    state={
rooms: [],

summerRooms: [],
featuredRooms: [],
region:"all",
loading: true,
type:"all",
capacity:1,
price:0,
minPrice:0,
maxPrice:0,
minSize:0,
maxSize:0,
Bar:false,
Restaurant:false,
Pool:false,
wifi:false
    };

// getData

getData = async () => {
    try{
let response = await createClient.getEntries({
    content_type: "monzaTravel1"
});
let rooms = this.formatData(response.items);
    
let featuredRooms = rooms.filter(room => room.featured === true);

let maxPrice = Math.max(...rooms.map(item => item.price));
let maxSize = Math.max(...rooms.map(item => item.size));

this.setState({
    rooms,
    featuredRooms,
    summerRooms: rooms,
    loading: false,
    price:maxPrice,
    maxPrice,
    maxSize
})
    } catch (error){
        console.log(error);
    }
}
componentDidMount(){
  this.getData()

}



formatData(items){
    let tempItems = items.map(item =>{
let id = item.sys.id
let images = item.fields.images.map(image => image.fields.file.url);

let room = {...item.fields,images, id};
return room;
});
return tempItems
}

getRoom = (slug) =>{
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room =>room.slug === slug);
    return room;
}


    
    formatData(items){
        let tempItems = items.map(item =>{
    let id = item.sys.id
    let images = item.fields.images.map(image => image.fields.file.url);
    
    let room = {...item.fields,images, id};
    return room;
    });
    return tempItems
    }
    
    getRoom = slug =>{
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room)=>room.slug === slug);
        return room;
    };
    handleChange1 = event => {
        const target = event.target;

        const value = target.type === 'checkbox' ?target.checked:target.value;

        const name = event.target.name;

        this.setState({
            [name]:value
        },
        this.filterRooms
        );
        
    };
    filterRooms = ()=>{
       let{
           rooms,
           type,
           region,
           capacity,
           price,
           Bar,
           Restaurant,
           Pool,
           wifi
       } = this.state
    
// all the rooms

       let tempRooms = [...rooms];

// transform value
capacity = parseInt(capacity)
price = parseInt(price)

// filter by type


       if(type !== 'all'){
           tempRooms = tempRooms.filter(room => room.type === type);
       }


       
       if(region !== 'all'){
        tempRooms = tempRooms.filter(room => room.region === region);
    }


       // filter by capacity

if(capacity !==1){
    tempRooms = tempRooms.filter(room => room.capacity >= capacity);
}
// filter price

tempRooms = tempRooms.filter(room => room.price <= price);


// filter checked

if(Bar){
    tempRooms = tempRooms.filter(room => room.Bar === true)
}

if(Restaurant){
    tempRooms = tempRooms.filter(room => room.Restaurant === true)
}

if(Pool){
    tempRooms = tempRooms.filter(room => room.Pool === true)
}

if(wifi){
    tempRooms = tempRooms.filter(room => room.wifi === true)
}
// change state

       this.setState({
           summerRooms:tempRooms,
           
       })
    
    }


    render () {

        return (
        <RoomContext1.Provider value={{ ...this.state,
        getRoom:this.getRoom,
        handleChange1: this.handleChange1}}>
            {this.props.children}
        </RoomContext1.Provider>
        );
    }
}


const RoomConsumer1 = RoomContext1.Consumer;

export function withRoomConsumer1(Component){
    return function ConsumerWrapper1(props){
        return ( <RoomConsumer1>
            {value => <Component {...props} context={value}/>}
        </RoomConsumer1>
        );
    };
}
export {RoomProvider1,RoomConsumer1,RoomContext1};

