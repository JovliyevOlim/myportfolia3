import {configureStore} from "@reduxjs/toolkit";
import {api} from './middleware';
import users from "./reducer/users";
import functionreducer from "./reducer/functionreducer";
import XodimReducer from "./components/SotibOlish/Sidebar/Hodimlar/reducer/XodimReducer";
import LavozimReducer from "./components/SotibOlish/Sidebar/Hodimlar/reducer/LavozimReducer";
import XodimSavdoReducer from "./components/SotibOlish/Sidebar/Hodimlar/reducer/XodimSavdoReducer";
import TaminotReducer from "./components/SotibOlish/Sidebar/Hamkorlar/reducer/TaminotReducer";
import MijozGuruxReducer from "./components/SotibOlish/Sidebar/Hamkorlar/reducer/MijozGuruxReducer";
import SotuvNarxiReducer from "./components/SotibOlish/Sidebar/Maxsulotlar/reducer/SotuvNarxiReducer";
import BolimReducer from "./components/SotibOlish/Sidebar/Maxsulotlar/reducer/BolimReducer";
import FirmaReducer from "./components/SotibOlish/Sidebar/Maxsulotlar/reducer/FirmaReducer";
import XaridReducer from "./components/SotibOlish/Sidebar/Haridlar/reducer/XaridReducer";
import SavdoOynaReducer from "./components/SotibOlish/Sidebar/Savdo/reducer/SavdoOynaReducer";
import OtkazmaReducer from "./components/SotibOlish/Sidebar/Baza/reducer/OtkazmaReducer";
import XarajatlarReducer from "./components/SotibOlish/Sidebar/Xarajatlar/reducer/XarajatlarReducer";
import XarajatTurlariReducer from "./components/SotibOlish/Sidebar/Xarajatlar/reducer/XarajatTurlariReducer";
import FoydaZararReducer from "./components/SotibOlish/Sidebar/Xisobotlar/reducer/FoydaZararReducer";
import XaridlarXisobotiReducer from "./components/SotibOlish/Sidebar/Xisobotlar/reducer/XaridlarXisobotiReducer";
import MijozHisobotiReducer from './components/SotibOlish/Sidebar/Xisobotlar/reducer/MijozHisobotiReducer'
import XarajatXisobotReducer from './components/SotibOlish/Sidebar/Xisobotlar/reducer/XarajatXisobotReducer'
import SavdodagiTulovReducer from './components/SotibOlish/Sidebar/Xisobotlar/reducer/SavdodagiTulovReducer'
import MaxsulotxisobotReducer from './components/SotibOlish/Sidebar/Xisobotlar/reducer/MaxsulotxisobotReducer'
import KopsotilgantovarlarReducer from './components/SotibOlish/Sidebar/Xisobotlar/reducer/KopsotilgantovarlarReducer'
import OtkazmalarxisobotiReducer from './components/SotibOlish/Sidebar/Xisobotlar/reducer/OtkazmalarxisobotiReducer'
import QoldiqlarxisobotiReducer from './components/SotibOlish/Sidebar/Xisobotlar/reducer/QoldiqlarxisobotiReducer'
import SoliqlarxisobotiReducer from './components/SotibOlish/Sidebar/Xisobotlar/reducer/SoliqlarxisobotiReducer'
import MaxsulotlarRoyxariReducer from "./components/SotibOlish/Sidebar/Maxsulotlar/reducer/MaxsulotlarRoyxariReducer";
import branchreducer from "./reducer/branchreducer";
import kgreducer from "./reducer/kgreducer";
export default configureStore({
    reducer:{
        users,functionreducer,XodimReducer,LavozimReducer,XodimSavdoReducer,TaminotReducer,
        MijozGuruxReducer,SotuvNarxiReducer,BolimReducer,FirmaReducer,XaridReducer,SavdoOynaReducer,
        OtkazmaReducer,XarajatlarReducer,XarajatTurlariReducer,FoydaZararReducer,XaridlarXisobotiReducer,
        MijozHisobotiReducer,XarajatXisobotReducer,SavdodagiTulovReducer,MaxsulotxisobotReducer,KopsotilgantovarlarReducer,
        OtkazmalarxisobotiReducer,QoldiqlarxisobotiReducer,SoliqlarxisobotiReducer,MaxsulotlarRoyxariReducer,branchreducer,kgreducer
    },
        middleware:[api]
})
