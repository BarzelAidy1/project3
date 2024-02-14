import AddMeeting from "../components/meeting/AddMeeting";
import meetingData from "./meetingData";
export const MeetingList = async () => {
    const response = await fetch("http://localhost:8787/appointments");
    const data = await response.json();
    console.log(data);
    const sortedData = [...data].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
    this.meettingList =  sortedData;
  }
  
  addMeeting = async (meeting) => {
    const response = await fetch("http://localhost:8787/appointment", {
        method: "POST",
        body: JSON.stringify(meeting),
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log(response.statusText);
    if (response.status === 200) {
        this.meettingList = ([...this.meetingList, meeting])

        console.log("true")
        console.log("true")
        console.log("meeting",this.meetingList.length)
        Swal.fire({
            title: "נקבעה פגישה",
            text: "פרטיך נקלטו בהצלחה",
            icon: "success"
          });
          return true
    }
    Swal.fire({
        title: 'תאריך זה תפוס',
        text: '  נא קבעו תאריך אחר לא ניתן לקבוע את הפגישה',
        icon: "error"
    });
      return false
}