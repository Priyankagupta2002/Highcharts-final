import react from 'react';
import { useState } from 'react';
function Datepicker() {   //dropdown
    const [selects, setSelects] = useState([]);
    //(to date-end date)
    const [toDates, settoDates] = useState([]);
    const [endDates, setendDates] = useState([]);

    const handletodate = (e) => {
        const gettodatevalue = e.target.value;
        console.log(gettodatevalue);
    }
    return (
        <form>
            <div >
                <input type='Date' name='toDate'
                 placeholder='dd-mm-yyyy' onChange={(e) => handletodate(e)} />
                <input type='Date' name='endDate' placeholder='dd-mm-yyyy' />

                <select className='opt' value={selects} onChange={e => setSelects(e.target.value)}>
                    <option>ISRO</option>
                    <option>IMD</option>
                </select>
                <button className='btn'>Submit</button>
            </div>
        </form>
    )

};


export default Datepicker;