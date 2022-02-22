import './docnote.css'
function DocNote() {
    return(
        <div className={'divvv'}>

            <div className="btns">
                <p className={'p'}>Ko`rsatildi</p>
                <select name="" id="">
                    <option value="#">25</option>
                    <option value="#">50</option>
                    <option value="#">100</option>
                    <option value="#">200</option>
                    <option value="#">500</option>
                    <option value="#">1000</option>
                    <option value="#">All</option>
                </select>
                <button className={'btn btn-primary'}>E CSV</button>
                <button className={'btn btn-primary'}>E Excel</button>
                <button className={'btn btn-primary'}>Print</button>
                <button className={'btn btn-primary'}>kamaytir</button>
                <button className={'btn btn-primary'}>E PDF</button>
                <input type="text" className={'form-control '} style={{border:'3px solid gray'}} placeholder={'izlash'}/>
            </div>

            <table className={'table'}>
                <thead>
                    <tr>
                        <th>Heading</th>
                        <th>Savdogar</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                    </tr>
                </thead>
                <tbody>
                    <h5>Manba topilmadi</h5>
                </tbody>
                <tfoot>
                    <button className={'btn btn-outline-primary'}>Ortga</button>
                    <button className={'btn btn-outline-primary'}>Oldinga</button>
                </tfoot>
            </table>

        </div>
    )
}
export default DocNote
