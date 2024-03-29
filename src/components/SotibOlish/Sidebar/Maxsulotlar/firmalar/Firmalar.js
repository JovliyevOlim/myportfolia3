import React from 'react'
import {Link} from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import {useState, useEffect} from "react";
import {connect} from "react-redux";
import './firmalar.css'
import {Modal, ModalHeader, ModalFooter, ModalBody} from "reactstrap";
import FirmaReducer, {deleteFirma, editFirma, getFirma, saveFirma,} from "../reducer/FirmaReducer";
import users from "../../../../../reducer/users";

function Firmalar({getFirma, users, firmalar, saveFirma,editFirma, deleteFirma,FirmaReducer,}) {
    console.log(firmalar)
    const [input, setInput] = useState(
        {
            view: '',
            search: '',
            brandqoshish: '',
            qisqaeslatma: '',
            idF:''
        }
    )
    const [current,setCurrent] = useState(false)

    function view(e) {
        input.view = e.target.value
        let a = {...input}
        setInput(a)
    }

    function search(e) {
        input.search = e.target.value
        let a = {...input}
        setInput(a)
    }

    function brandqoshish(e) {
        input.brandqoshish = e.target.value
        let a = {...input}
        setInput(a)
    }

    function qisqaeslatma(e) {
        input.qisqaeslatma = e.target.value
        let a = {...input}
        setInput(a)
    }


    function editB(id) {
        toggle()
        FirmaReducer.firmalar.map(item => {
            if (item.id === id) {
                input.brandqoshish = item.name
                input.idF = id
                let a = {...input}
                setInput(a)
            }
        })
    }

    function saqla() {
        if (input.idF !== ''){
            editFirma({
                name: input.brandqoshish,
                businessId: users.businessId,
                id: input.idF
            })
            setCurrent(!current)
            getFirma(users.businessId)
        }else {
            saveFirma(
                {
                    name: input.brandqoshish,
                    businessId: users.businessId,
                }
            )
            setCurrent(!current)
            getFirma(users.businessId)
        }
        input.idF=''
        input.brandqoshish=''
        input.qisqaeslatma=''
        let a = {...input}
        setInput(a)
        setCurrent(!current)
        getFirma(users.businessId)
        toggle()
    }

    function deleteF(item) {
        deleteFirma(item.id)
        setCurrent(!current)
        getFirma(users.businessId)
    }



    const [active, setActive] = useState(false)

    function toggle() {
        setActive(!active)
    }
    useEffect(() => {
        getFirma(users.businessId)
    }, [current])

    return (
        <div className="col-md-12 mt-2 mt-4 mb-4">
            <div className="textHeaderFR">
                <h2>Firmalar</h2>
                <p>Firma yoki brendlar boshqaruvi</p>
            </div>
            <div className="rowStyleFR">
                <div className="qoshishFR">
                    <h5 className='sarlavha'>Barcha firma va brendlar boshqaruvi</h5>
                    <button onClick={toggle} className='btn btn-primary'>+Qo'shish</button>
                </div>
                <div className="izlashFR">
                    <div className="izlashBox1">
                        <p>Ko'rsatildi</p>
                        <select value={input.view} onChange={view} name="" id="">
                            <option value="">25</option>
                            <option value="">50</option>
                            <option value="">100</option>
                            <option value="">All</option>
                        </select>
                        <button><img src={CSV} alt=""/> Export CSV</button>
                        <button><img src={Excel} alt=""/> Export Excel</button>
                        <button><img src={Print} alt=""/> Print</button>
                        <button><img src={Pdf} alt=""/>Export PDF</button>
                        <button><img src={Data} alt=""/>Malumotlarni kamaytirish</button>
                    </div>
                    <div className="izlashBox2">
                        <input type="text" value={input.search} onChange={search} placeholder='Izlash...'/>
                    </div>
                </div>
                <div className="table-responsive pb-4">
                    <table className='table table-striped table-bordered mt-4'>
                        <thead>
                        <tr>
                            <th>Firmalar</th>
                            <th>Eslatma</th>
                            <th>Amallar</th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            FirmaReducer.firmalar.filter(val => {
                                if (input.search === '') {
                                    return val
                                } else if (val.name.toUpperCase().includes(input.search.toUpperCase())) {
                                    return val
                                }
                            }).map(item => <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>
                                    <Link>
                                        <button onClick={()=>editB(item.id)} className='taxrirlash'><img src={Edit} alt=""/> Taxrirlash
                                        </button>
                                    </Link>
                                    <button className='ochirish' onClick={()=>deleteF(item)}><img src={Delete} alt=""/> O'chirish</button>
                                </td>
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

                <Modal isOpen={active} toggle={toggle}>
                    <ModalHeader>
                        Yangi qo`shish / taxrirlash
                    </ModalHeader>
                    <ModalBody>
                        <label htmlFor={'l'}>Brand Nomi</label>
                        <input value={input.brandqoshish} onChange={brandqoshish} type="text" id={'l'}
                               className={'form-control'}/>
                        <label htmlFor={'l2'} className={'mt-3'}>Qisqa eslatma</label>
                        <input value={input.qisqaeslatma} onChange={qisqaeslatma} type="text" className={'form-control'}
                               id={'l2'}/>
                    </ModalBody>
                    <ModalFooter>
                        <button className={'btn btn-outline-primary'} onClick={saqla}>Saqlash</button>
                        <button className={'btn btn-outline-primary'} onClick={toggle}>Chiqish</button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}

export default connect((FirmaReducer,users), {
    getFirma,
    saveFirma,
    editFirma,
    deleteFirma
})(Firmalar)
// export default connect((FirmaReducer,users),{getFirma,saveFirma,editFirma,deleteFirma}) (Firmalar)
