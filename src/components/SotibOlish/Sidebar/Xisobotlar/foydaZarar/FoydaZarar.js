import './foydaZarar.css'
import {connect} from "react-redux";
import {useEffect,useState} from "react";
import {deleteFoydaZarar, editFoydaZarar, getFoydaZarar, saveFoydaZarar} from "../reducer/FoydaZararReducer";

function FoydaZarar({getFoydaZarar,saveFoydaZarar,editFoydaZarar,deleteFoydaZarar,foydazarar}) {

       const [input,setInput] = useState(
           {
                  branchId:1,
                  firstDate:'',
                  secondDate:'',
                  name:'',
           }
       )

       function bazatanlash(e){
              input.branchId= e.target.value
              let a = {...input}
              setInput(a)
       }

       function aniqsananibelgilash(e){
              if(e.target.value == 1){
                     const bugun = parseInt(new Date().getFullYear())+"-"+ parseInt(new Date().getMonth()+1)+'-'+ parseInt(new Date().getDate())
                     const bugun2 = new Date().getFullYear()+"-"+ (new Date().getMonth()+1)+'-'+ (new Date().getDate() - 7)
                     console.log(typeof bugun)
                     const bugun3 = new Date().toLocaleDateString()
                     console.log(bugun3)
                     console.log(typeof bugun3)
                     console.log(bugun2)
                     input.firstDate=(bugun)
                     input.secondDate=parseInt(bugun2)
                     let a ={...input}
                     setInput(a)
                     console.log(input)
                     saveFoydaZarar(input)
              }

       }
       useEffect(()=>{
              getFoydaZarar()
       },[])



       return (
              <div className="col-md-12 mt-4 mb-4">
                     <div className="textHeaderF">
                     <h2>Foyda va Zarar</h2>
                     </div>
                     <div className="rowStyleF">
                            <div className="izlashF">
                                   <div className="row">
                                          <div className="col-md-6 col-sm-10">
                                                 <h6>Baza tanlash:</h6>
                                                 <select value={input.bazatanlash} onChange={bazatanlash} name="" id="" >
                                                        <option value="" >Barcha bazalar</option>
                                                 </select>
                                          </div>
                                          <div className="col-md-6 col-sm-10">
                                                 <h6>Aniq sanani belgilash:</h6>
                                                 <select name="" id="" value={input.aniqsananibelgilash} onChange={aniqsananibelgilash}>
                                                        <option value="" hidden> Aniq sana belgilash</option>
                                                        <option value="">Bugun</option>
                                                        <option value="1">Oxirgi 1 hafta</option>
                                                        <option value="">Oxirgi 1 oy</option>
                                                        <option value="">Istalgan sanani tanlash</option>
                                                 </select>
                                          </div>
                                   </div>
                            </div>
                            <div className="table-responsive mb-4">
                            <table className='table table-striped table-bordered mt-4'>
                                   <thead>
                                          <tr>
                                                 <th>Maxsulot sotib olish narxi(sum)</th>
                                                 <th>Maxsulot sotish narxi(sum)</th>
                                                 <th>Umumiy qoladigan foyda(sum) </th>
                                                 <th>Qilingan xarajat</th>
                                                 <th>Sof foyda(sum)</th>
                                          </tr>
                                   </thead>
                                   <tbody>
                                   {
                                          foydazarar.map(item=><tr key={item.id}>
                                                 <td>{item.name}</td>
                                          </tr>)
                                   }
                                    
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
export default connect(({FoydaZararReducer:{foydazarar}})=>({foydazarar}),{getFoydaZarar,saveFoydaZarar,editFoydaZarar,deleteFoydaZarar}) (FoydaZarar)
