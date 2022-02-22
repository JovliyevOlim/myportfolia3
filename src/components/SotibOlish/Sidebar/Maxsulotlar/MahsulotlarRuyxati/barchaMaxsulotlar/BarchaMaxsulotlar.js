import './barchMaxsulotlar.css'
import CSV from '../../../../../../img/CSV.png'
import Excel from '../../../../../../img/Excel.png'
import Print from '../../../../../../img/Print.png'
import Data from '../../../../../../img/Data.png'
import Pdf from '../../../../../../img/PDF.png'
import Edit from '../../../../../../img/Edit.png'
import Korish from '../../../../../../img/Korish.png'
import Delete from '../../../../../../img/Delete.png'
import {Switch, Link, Route} from 'react-router-dom'
import {useState, useEffect} from "react";
import KorishM from '../Taxrirlash/Korish'
import {connect} from "react-redux";
import MaxsulotlarRoyxariReducer, {
    getMaxsulotRuyxati,
    saveMaxsulotRuyxati,
    editMaxsulotRuyxati,
    deleteMaxsulotRuyxati
} from '../../reducer/MaxsulotlarRoyxariReducer'

function BarchaMaxsulotlar({getMaxsulotRuyxati, maxsulotlar,MaxsulotlarRoyxariReducer,deleteMaxsulotRuyxati,saveMaxsulotRuyxati}) {

    const [input, setInput] = useState(
        {
            view: '',
            izlash: '',
            maxsulot: '',
            baza: '',
            sotibolishnarxi: '',
            sotishnarxi: '',
            qolganmaxsulot: '',
            firma: '',
            checkbarcha: '',
            //    ---
            name: '',
            barcode: '',
            brandId: '',
            categoryId: '',
            measurementId: '',
            photoIds: '',
            minQuantity: '',
            buyPrice: '',
            salePrice: '',
            tax: '',
            branchId: '',
            expireDate: '',
            dueDate: '',
            inputsearch: ''
        }
    )

    useEffect(() => {
        getMaxsulotRuyxati()
    }, [])

    function view(e) {
        input.view = e.target.value
        let a = {...input}
        setInput(a)
    }

    function izlash(e) {
        input.izlash = e.target.value
        let a = {...input}
        setInput(a)
    }

    const [active, setActive] = useState(false)

    function toggle() {
        setActive(!active)
    }

    function saqla() {
        saveMaxsulotRuyxati({
            name: input.name,
            barcode: input.barcode,
            brandId: input.brandId,
            categoryId: input.categoryId,
            measurementId: input.measurementId,
            photoIds: input.photoIds,
            minQuantity: input.minQuantity,
            buyPrice: input.buyPrice,
            salePrice: input.salePrice,
            tax: input.tax,
            branchId: input.branchId,
            expireDate: input.expireDate,
            dueDate: input.dueDate
        })
    }

    function name(e) {
        input.name = e.target.value
        let a = {...input}
        setInput(a)
    }
    function barcode(e) {
        input.barcode = e.target.value
        let a = {...input}
        setInput(a)
    }
    function brandId(e) {
        input.brandId = e.target.value
        let a = {...input}
        setInput(a)
    }
    function categoryId(e) {
        input.categoryId = e.target.value
        let a = {...input}
        setInput(a)
    }
    function measurementId(e) {
        input.measurementId = e.target.value
        let a = {...input}
        setInput(a)
    }
    function photoIds(e) {
        input.photoIds = e.target.value
        let a = {...input}
        setInput(a)
    }
    function minQuantity(e) {
        input.minQuantity = e.target.value
        let a = {...input}
        setInput(a)
    }
    function buyPrice(e) {
        input.buyPrice = e.target.value
        let a = {...input}
        setInput(a)
    }
    function salePrice(e) {
        input.salePrice = e.target.value
        let a = {...input}
        setInput(a)
    }
    function tax(e) {
        input.tax = e.target.value
        let a = {...input}
        setInput(a)
    }
    function branchId(e) {
        input.branchId = e.target.value
        let a = {...input}
        setInput(a)
    }
    function expireDate(e) {
        input.expireDate = e.target.value
        let a = {...input}
        setInput(a)
    }
    function dueDate(e) {
        input.dueDate = e.target.value
        let a = {...input}
        setInput(a)
    }
    function search(e) {
        input.inputsearch = e.target.value
        let a = {...input}
        setInput(a)
    }

    function deleteM(item) {
        deleteMaxsulotRuyxati(item.id)
        console.log('deleted')
    }

    return (
        <div>
            <div className="col-md-12">
                <div className="rowStyleBR">
                    <div className="qoshish">
                        <h5>Barcha maxsulotlar</h5>
                        <Link to={'/headerthird/mahsulotRuyxati/barcaMahsulot/taxrirlash'}>
                            <button onClick={toggle} className='btn btn-primary'>+Qo'shish</button>
                        </Link>
                    </div>
                    <div className="izlashBR">
                        <div className="izlashBox1">
                            <p>Ko'rsatildi</p>
                            <select name="" id="" value={input.view} onChange={view}>
                                <option value="">25</option>
                                <option value="">All</option>
                            </select>
                            <button><img src={CSV} alt=""/> Export CSV</button>
                            <button><img src={Excel} alt=""/> Export Excel</button>
                            <button><img src={Print} alt=""/> Print</button>
                            <button><img src={Pdf} alt=""/>Export PDF</button>
                            <button><img src={Data} alt=""/>Malumotlarni kamaytirish</button>
                        </div>
                        <div className="izlashBox2">
                            <input type="text" placeholder='Izlash...' value={input.izlash} onChange={izlash}/>
                        </div>
                    </div>
                    <div className="table-responsive">
                    <table className='table table-striped table-bordered mt-4'>
                        <thead>
                        <tr>
                            <th><input type="checkbox"/></th>
                            <th>Maxsulot</th>
                            <th>Baza</th>
                            <th>Sotib olish narxi</th>
                            <th>Sotish narxi</th>
                            <th>Qolgan maxsulot</th>
                            <th>Firma</th>
                            <th>Amallar</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            maxsulotlar.
                            filter(val => {
                                if (input.izlash === '') {
                                    return val
                                } else if (val.name.toUpperCase().includes(input.izlash.toUpperCase())) {
                                    return val
                                }
                            })
                                .map(item => <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <Link to={'/headerthird/mahsulotRuyxati/barcaMahsulot/taxrirlash'}>
                                            <button className='taxrirlash'><img src={Edit} alt=""/> Taxrirlash
                                            </button>
                                        </Link>
                                        <Link
                                            to={'/headerthird/mahsulotRuyxati/barcaMahsulot/view/' + input.name + '/' + input.ferma + '/' + input.pay + '/' + input.sotishNarxi + '/'}>
                                            <button onClick={toggle} className='korish'><img src={Korish}
                                                                                             alt=""/> Ko'rish
                                            </button>
                                        </Link>
                                        <button onClick={()=>deleteM(item)} className='ochirish'><img src={Delete} alt=""/> O'chirish</button>
                                    </td>
                                </tr>)
                        }

                        </tbody>
                    </table>
                    </div>
                    {
                        active ? <KorishM active={active} toggle={toggle} mahsulot={input}/> : ''
                    }
                    <div className="btnBoshqarish">
                        <button className='btn btn-danger buttonPage'>Belgilanganlarni o'chirish</button>
                        <button className='btn btn-success buttonPage'>Boshqa bazaga surish</button>
                        <button className='btn btn-primary buttonPage'>Bazadan olib tashlash</button>
                        <button className='btn btn-warning buttonPage'>Belgilanganlarni vaqtinchalik o'chirish</button>
                    </div>

                    <p>Ko'rsatildi 1 ta sahifa 1 va yana 1 ta sahifa bor</p>
                    <div className='sahifalar'>
                        <button>Ortga</button>
                        <button>1</button>
                        <button>Oldinga</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default connect(({MaxsulotlarRoyxariReducer:{maxsulotlar}})=>({maxsulotlar}), {
    getMaxsulotRuyxati,
    saveMaxsulotRuyxati,
    deleteMaxsulotRuyxati,
    editMaxsulotRuyxati
}) (BarchaMaxsulotlar)
