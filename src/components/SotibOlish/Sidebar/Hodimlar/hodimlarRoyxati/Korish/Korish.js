import './korish.css'
import {Link,Route,Switch} from "react-router-dom";
import UseInfo from "./useInfo/UseInfo";
import DocNote from "./DocNote/DocNote";
import Activate from "./Activate/Activate";

function Korish(props) {
    const {name,login,email} = props.match.params;
    console.log(props.match.params);
    return(
        <div className={'row justify-content-center'} style={{marginTop:'5%'}}>
            <h4 className={'text-center'}>Ko`rish</h4>

            <div className="col-md-11 style d-flex border">

                <div className="col-md-4 ">
                    <div className="card idCard" style={{width:'100%',marginTop:'30px',marginLeft:'-25px'}}>
                        <div className="card-header">
                            <div className="imgUser2">

                            </div>
                            <h5>{name}</h5>
                            <p>{login}</p>
                        </div>
                        <div className="card-body">
                            <div className="bCard">
                                <h6>Login</h6>
                                <p>{login}</p>
                            </div>
                            <div className="bCard">
                                <h6>Email</h6>
                                <p>{email}</p>
                            </div>
                            <div className="bCard">
                                <h6>Faolmi ?</h6>
                                <p>Faol</p>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className={'btn btn-primary'} style={{width:'100%'}}>Taxrirlash</button>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="col-8">
                    <table className={'table'}>
                        <tr className={'text-center'}>
                            <Link to={'/headerthird/hodimlarruyxati/view/usInfo'}><th><button className={'btn btn-outline-primary'}>User Info</button></th></Link>
                            <Link to={'/headerthird/hodimlarruyxati/view/docNote'}><th><button className={'btn btn-outline-primary'}>Document & Note</button></th></Link>
                            <Link to={'/headerthird/hodimlarruyxati/view/activities'}><th><button className={'btn btn-outline-primary'}>Activities</button></th></Link>
                            <select name="" id="" style={{width:'100px'}}>
                                <option value="#" >Boshliq</option>
                            </select>
                        </tr>
                    </table>

                    <Switch>
                        <Route path={'/headerthird/hodimlarruyxati/view/usInfo'} component={UseInfo}/>
                        <Route path={'/headerthird/hodimlarruyxati/view/docNote'} component={DocNote}/>
                        <Route path={'/headerthird/hodimlarruyxati/view/activities'} component={Activate}/>
                    </Switch>

                </div>
            </div>

        </div>
    )
}
export default Korish