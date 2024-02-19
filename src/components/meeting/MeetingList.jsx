import { observer } from "mobx-react";
import React, { useEffect } from "react";
import meetingStore from "../../data/meetingStore";
import { GetList } from "../../data/meetingDataServer";

const MeetingList = observer(() => {

  useEffect(() => {

    if (!meetingStore.meetings.length) {
      GetList();
    }
  }, [])

  const mettingColor = (dataTime) => {
    // const date = new Date();
    // date.setTime(0, 0, 0, 0);
    // dataTime= Date.parse(dataTime)
    // dataTime.setTime(0, 0, 0, 0)
    // console.log(dataTime,date)
    // if (dataTime === date) {
    //   return 'red';
    // }
    // else if ( Date(dataTime) < date.setDate(date.getDate() + 7))
    //   return 'green';

    return 'orange';

  }

  return (
    <>
      <div>
        <h2>רשימת ההזמנות שבוצעו</h2>
        <ul>
          {meetingStore.meetings.map((meeting, index) => (
            <li key={index}>
              {console.log(mettingColor(meeting.dateTime), meeting.dateTime)}
              <strong>{meeting.name}</strong>-{meeting.email}-{meeting.phone}

            </li>
          ))}
        </ul>
      </div>
    </>
  );
})

export default MeetingList