import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import {withRoomConsumer} from '../context';
import Loading from './Loading';

function RoomContainer({context}){
const {loading,summerRooms, rooms} = context;
if(loading){
                return <Loading/>;
            }
    
            return (
                <>
                
                <RoomsFilter rooms={rooms}/>
                <RoomsList rooms={summerRooms}/>
            </>
            );
}


export default withRoomConsumer(RoomContainer)
