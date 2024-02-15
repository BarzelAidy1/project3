import React from "react";
import AddMeeting from "./AddMeeting";

function MeetingList({meetings}) {  

    return (
      <>
      <div>
        <h2>רשימת ההזמנות שבוצעו</h2>
        <ul>
          {meetings.map((meeting,index)=>(
            <li key={index}>
              <strong>{meeting.name}</strong>-{meeting.email}-{meeting.phone}
              
              </li>
          ))}
        </ul>        
        </div>       
      </>
    );
  }
  
  export default MeetingList