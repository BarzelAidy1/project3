import BuisnesDataStore from "./BuisnesDataStore";
// all ajax request and thn if ok update store
export const getBuisneData = async () => {
    const response = await fetch("http://localhost:8787/businessData", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    console.log(response)
    if (response.status === 200) {
        const data = await response.json();
        BuisnesDataStore.setData(data)
    }
    if (response.status === 401) {
        Swal.fire({
            icon: "error",
            title: "...אופס",
            text: "שם המשתמש/הסיסמה אינו/ם נכונים, נסה שנית",

        });
    }
}

export const updateBuisneData = async (data) => {
    const response = await fetch("http://localhost:8787/businessData", {
        method: "POST",
        body:JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });

    console.log(response)
    if (response.status === 200) {
        const dataR = await response.json();
        BuisnesDataStore.setData(dataR)
    }
    if (response.status === 401) {
        Swal.fire({
            icon: "error",
            title: "...אופס",
            text: "שם המשתמש/הסיסמה אינו/ם נכונים, נסה שנית",

        });
    }
}