import React from 'react';
import RoomsFilter1 from './RoomsFilter1';
import RoomsList1 from './RoomsList1';
import {withRoomConsumer1} from '../context1';
import Loading from './Loading';

function RoomContainer1({context}){
const {loading,summerRooms, rooms} = context;
if(loading){
                return <Loading/>;
            }
    
            return (
                <>
                
                <RoomsFilter1 rooms={rooms}/>
                <RoomsList1 rooms={summerRooms}/>
            </>
            );
}


export default withRoomConsumer1(RoomContainer1)
 