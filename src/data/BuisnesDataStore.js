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
        this.setData = data
    }
}

export default new BuisnesDataStore()

