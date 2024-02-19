import { action, makeObservable, observable } from "mobx";

class MeetingStore {
    //data
    meetings = [];

    //export type
    constructor() {
        makeObservable(this, {
            meetings: observable,
            setMeetings: action,
            addMeeting: action
        })
    }
    //action update data
    setMeetings(data) {
        this.meetings = data
    }

    addMeeting(data) {
        this.meetings = [...this.meetings, data]
    }

}
export default new MeetingStore()