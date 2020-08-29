import React from 'react';
import RoomsFilter2 from './RoomsFilter2';
import RoomsList2 from './RoomsList2';
import {withRoomConsumer2} from '../context2';
import Loading from './Loading';

function RoomContainer2({context}){
const {loading,summerRooms, rooms} = context;
if(loading){
                return <Loading/>;
            }
    
            return (
                <>
                
                <RoomsFilter2 rooms={rooms}/>
                <RoomsList2 rooms={summerRooms}/>
            </>
            );
}


export default withRoomConsumer2(RoomContainer2)
 