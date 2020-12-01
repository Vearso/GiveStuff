import {configureStore} from "@reduxjs/toolkit";
import whoWeHelpReducer from "./components/Home/WhoWeHelp/whoWeHelpSlice";
import listReducer from "./components/Home/WhoWeHelp/List/listSlice";
import userReducer from "./userSlice";
import formReducer from "./components/GiveStuff/Form/formSlice";
import stepReducer from "./components/GiveStuff/Form/Step/stepSlice";
export default configureStore({
    reducer: {
        whoWeHelp: whoWeHelpReducer,
        list: listReducer,
        account: userReducer,
        form: formReducer,
        step: stepReducer,
    }
})
