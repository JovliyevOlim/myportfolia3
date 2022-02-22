import './header.css'
import imgMenu from '../../../img/menu.png'
import imgCalc from '../../../img/calculator.png'
import imgNot from '../../../img/notification.png'
import {useState,useEffect} from "react";
import {connect} from "react-redux";
import {active} from "../../../reducer/functionreducer";
import Calculator from "./Calculator/Calculator";
import users from "../../../reducer/users";

function Header({active,sidebarfunc,users}) {

    useEffect(()=>{
        setCalactive(false)
    },[])

    const [calactive,setCalactive] = useState(false)

    function calchange(){
        setCalactive(!calactive)
    }
    function sidebar() {
        active(false)
        sidebarfunc()
    }
    const usersimg = users.users.photo.fileOriginalName

    return(
       
        <div className={'container-fluid position-relative'}>
            <div className={'headerBox '}>
                <div className="dashbortButton">
                    <img onClick={sidebar} src={imgMenu}  className={'im1'} alt=""/>
                </div>
                <div className="two ">
                    <div className={'img2img3'}>
                        <img src={imgCalc} onClick={calchange} className={'im2'} alt=""/>
                        <div className="notificBox">
                            <img src={imgNot}  className={'im3'} alt=""/>
                            <div className="notificatNum">
                                <p>2</p>
                            </div>
                        </div>
                        {
                            calactive ? <Calculator/> :''
                        }
                    </div>
                    {
                        console.log(users.users.photo.fileOriginalName)
                    }
                    <div className="imgUserBox">
                        <div className="imgUser">
                            <img src={usersimg} alt=""/>
                        </div>
                        <select className={'profil'} name="" id="">
                            <option value='none'> </option>
                            <option value="#">Profile</option>
                            <option value="#">About Me</option>
                            <option value="#">My Cabinet</option>
                        </select>
                    </div>    
                </div>


            </div>
        </div>
    )
}
export default connect((users),{active}) (Header)
