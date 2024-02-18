import Swal from "sweetalert2";
import meetingStore from "./meetingStore";

export const GetList = async () => {
    const response = await fetch("http://localhost:8787/appointments");
    const data = await response.json();
    console.log(data);
    meetingStore.setMeetings(data)
}

export const addMeeting = async (meeting) => {
    const response = await fetch("http://localhost:8787/appointment", {
        method: "POST",
        body: JSON.stringify(meeting),
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log(response.statusText);
    if (response.status === 200) {

        console.log("true")
        Swal.fire({
            title: "נקבעה פגישה",
            text: "פרטיך נקלטו בהצלחה",
            icon: "success"
        });
        meetingStore.addMeeting(meeting)
        return true
    }
    Swal.fire({
        title: 'תאריך זה תפוס',
        text: '  נא קבעו תאריך אחר לא ניתן לקבוע את הפגישה',
        icon: "error"
    });
    return false
}