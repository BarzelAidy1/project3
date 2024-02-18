import { action, makeObservable, observable } from "mobx"

class BuisnesDataStore {
    
    data={}
    
    constructor() {
        makeObservable(this, {
            data: observable,
            setData:action
        })
    }


    setData(data) {
        this.data = data
    }
}

export default new BuisnesDataStore()

