import { action, makeObservable, observable } from "mobx"
import adama from '../assets/img/adama.png';
import bricha from '../assets/img/bricha.jpg';
import logo1 from '../assets/img/logo1.jpg';
import shlita from '../assets/img/shlita.jpg';
import vertigo from '../assets/img/vertigo.jpg';
class meetingData {
    //isLogin = localStorage.getItem("isLog");
    meetingList = observable([
    {
        id: '0',
        price: "2400",
        name: "ורטיגו",
        describtion: " תוכנית לימודית בנושא זהירות מזרים מתבססת על שיטת שלושת הלמדים: 'לצעוק', 'לברוח' ו'לספר'. התוכנית מעבירה בצורה חוייתית ואטרקטיבית את כללי הזהירות עפ,י הנחיית יועצים/ות מהשורה הראשונה, באישור גדולי ישראל ובפיקוח מפקחות ממשרד החינוך בנושא מוגנות",
        age:"יסודי-שכבה נמוכה",
        image: vertigo,
    },
    {
        id: '1',
        price: "2500",
        name: "אדמה ושמים",
        describtion: "תוכנית חוויתית בנושא שמיטה להקניית הלכות בסיסיות לילדים תוך חיבור אמיתי והבנת ערך מצוה קדושה זו.",
        age:"יסודי- שכבה בינונית",
        image: adama,
    },
    {
        id: '2',
        price: "1800",
        name: "הכל בשליטה",
        describtion: "תוכנית מסך, קהל ובמה חוייתית ויחודית בנושא אמונה ",
        age:"שכבת יסודי הגבוהה",
        image: shlita,
    },
    {
        id: '3',
        price: "900",
        name: "הנחיה",
        describtion: " הנחיית במה סוחפת ואטרקטיבית! הנאה מובטחת--- מומחיות מיוחדת בהפעלת תוכנית קליקרים",
        image: '',
    },
    {
        id: '4',
        price: "1800",
        name: "תוכנית שירה/ הרקדה",
        describtion: "הקרדה סוחפת ושירי נשמה משולבים בהרמוניה יחודית וכובשת. אפשרות להוספת כלים",
        image: '',

    },
    {
        id: '5',
        price: "4200",
        name: "חדר בריחה",
        describtion: "חדרי בריחה שנונים ויצירתיים במרחב הקולי, בדיגיטל ובפרונטלי- חויה עוצמתית וסוחפת בנושאים שונים",
        image: bricha,
    }
    ]);

    
    constructor() {
        makeObservable(this, {
            meetingList: observable,
            addMeeting: action,
        })
    }

//functions
    addMeeting(meeting) {
        
    }
}

export default new meetingData()