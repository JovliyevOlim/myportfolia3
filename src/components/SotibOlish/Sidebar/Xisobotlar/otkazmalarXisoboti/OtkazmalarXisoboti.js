import React from 'react'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import './otkazmalarXisoboti.css'
import {connect} from 'react-redux'
import {getOtkazmalarxisoboti,saveOtkazmalarxisoboti,editOtkazmalarxisoboti,deleteOtkazmalarxisoboti} from '../reducer/OtkazmalarxisobotiReducer'
import {useEffect,useState} from 'react'

function OtkazmalarXisoboti({getOtkazmalarxisoboti,saveOtkazmalarxisoboti,editOtkazmalarxisoboti,deleteOtkazmalarxisoboti}) {

    const [input,setInput] = useState(
        {
            bazatanlash:'',
            aniqsananibelgilash:'',
            view:'',
            izlash:'',
        }
    )

    function bazatanlash(e){
        input.bazatanlash = e.target.value
        let a = {...input}
        setInput(a)
    }
    function aniqsananibelgilash(e){
        input.aniqsananibelgilash = e.target.value
        let a = {...input}
        setInput(a)
    }
    function view(e){
        input.view = e.target.value
        let a = {...input}
        setInput(a)
    }
    function izlash(e){
        input.izlash = e.target.value
        let a = {...input}
        setInput(a)
    }

    useEffect(()=>{
        getOtkazmalarxisoboti()
    })

    return (
        <div className="col-md-12 mt-4 ">
                     <div className="textHeader">
                            <h2>O'tkazmalar xisoboti</h2>
                     </div>
                     <div className="rowStyleOX m-0">
                            <div className="row">
                                   <div className="col-6 col-sm-12">
                                          <h6>Baza tanlash:</h6>
                                          <select name="" className='inptStyls' value={input.bazatanlash} onChange={bazatanlash} id="">
                                                 <option value="">Barchasi</option>
                                                 <option value=""></option>
                                          </select>
                                   </div>
                                   <div className="col-6 col-sm-12">
                                       <h6>Aniq sanani belgilash:</h6>
                                       <select name="" id="" className='inptStyls' value={input.aniqsananibelgilash} onChange={aniqsananibelgilash}>
                                           <option value="" hidden>Aniq sanani belgilash</option>
                                           <option value="">Bugun</option>
                                       </select>
                                   </div>
                            </div>
                     </div>
                     
                     <div className="rowStyleUTX">
                     <div className="qoshish">
                                   <h5>Malumotlar bazasi:</h5>
                            </div>
                                <div className="izlashUTX">
                                       <div className="izlashBox1">
                                          <p>Ko'rsatildi</p>
                                          <select name="" value={input.view} onChange={view} id="">
                                                 <option value="">25</option>
                                                 <option value="">1,000</option>
                                                 <option value="">All</option>
                                          </select>
                                          <button> <img src={CSV} alt="" /> Export CSV</button>
                                          <button><img src={Excel} alt="" /> Export Excel</button>
                                          <button><img src={Print} alt="" /> Print</button>
                                          <button><img src={Pdf} alt="" />Export PDF</button>
                                          <button> <img src={Data} alt="" />Malumotlarni kamaytirish </button>

                                       </div>
                                       <div className="izlashBox2">
                                          <input type="text" value={input.izlash} onChange={izlash} placeholder='Izlash...'/>
                                       </div>
                                </div>
                            <div className="table-responsive">
                                   <table className='table table-striped table-bordered mt-4 '>
                                          <thead>
                                                 <tr>
                                                        <th>Sana</th>
                                                        <th>Qisqa eslatma</th>
                                                        <th>Baza</th>
                                                        <th>Turi</th>
                                                        <th>Savdogar</th>
                                                 </tr>
                                          </thead>
                                          <tbody>
                                                 <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                 </tr>
                                          </tbody>
                                   </table>
                            </div>

                            <p>Ko'rsatildi 1 ta sahifa 1 va yana 1 ta sahifa bor</p>
                            <div className='sahifalar'>
                                   <button>Ortga</button>
                                   <button>1</button>
                                   <button>Oldinga</button>
                            </div>
                     </div>
              </div>
    )
}
export default connect(({OtkazmalarxisobotiReducer:{otkazmaxisobot}})=>({otkazmaxisobot}),{getOtkazmalarxisoboti,saveOtkazmalarxisoboti,editOtkazmalarxisoboti,deleteOtkazmalarxisoboti}) (OtkazmalarXisoboti)
