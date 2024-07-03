import { PollComponent } from "./components"


export default {
    install:(app)=>{
        app.component("PollComponent",PollComponent)
    }
}