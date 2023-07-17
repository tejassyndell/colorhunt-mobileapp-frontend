/* eslint-disable */
import React from "react";
import "../../css/Rohit.css";
function OrderFilter() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    
    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
        filterItems(e.target.value, endDate);
      };
    
      const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
        filterItems(startDate, e.target.value);
      };
    return (
    <>
    <div className="OrderFilter_exteranal_div">
        <div className="OrderFilter_main_div">
            <span className="OrderFilter_close_btn">X</span>
            <div className="OrderFilter_date_div">
                <span className="OrderFilter_date_text_span">Search By Filter</span>
                <input type="date" style={{color:"red"}} value={startDate} onChange={handleStartDateChange} />
                <input type="date" style={{color:"#AE0617"}} value={endDate} onChange={handleEndDateChange} />

            </div>

        </div>

    </div>
    </> 
)}

export default OrderFilter;