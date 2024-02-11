import Swal from "sweetalert2";
import loginStore from "./loginStore";

export const setLogin = async (data) => {
    console.log(data)
    const response = await fetch("http://localhost:8787/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });

    console.log(response)
    if (response.status === 200) {
        loginStore.SetIsLogin(true)
    }
    if (response.status === 401) {
        Swal.fire({
            icon: "error:(",
            title: "...אופס",
            text: "שם המשתמש/הסיסמה אינו/ם נכונים, נסה שנית",

        });
    }
}


