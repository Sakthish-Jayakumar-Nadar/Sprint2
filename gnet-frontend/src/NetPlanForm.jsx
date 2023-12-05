import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Axios } from "./Helper";

const NetPlanForm = () => {
    const {userid} = useParams()
    const [netdata, setNetData] = useState({
        mbps : "",
        renew: "",
        expire: "",
        month: "",
        balanceMonth: "",
        amount: "",
        balanceAmount: ""
    });
    const navigate = useNavigate();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setNetData({...netdata,[name] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userid != undefined){
            if(confirm("Want to add net Plan !!!")){
                Axios.post(`/${userid}/postNetPlan`, netdata).catch((error) => console.log(error)); 
                setNetData({
                    mbps : "",
                    renew: "",
                    expire: "",
                    month: "",
                    balanceMonth: "",
                    amount: "",
                    balanceAmount: ""
                })
                navigate(-1);
            }
        }
    }

    return (
        <div id="netform">
            <form onSubmit={handleSubmit}>
                <div className="form-div form-div-1">
                    <label htmlFor="mbps" className="form-lable">Mbps</label> <br />
                    <input type="text" autoComplete = "off" onChange={handleInput} value={netdata.mbps} name="mbps" id="mbps" />
                </div>
                <br />
                <div className="form-div">
                    <label htmlFor="renew" className="form-lable">Renew Date</label> <br />
                    <input type="date" autoComplete = "off" onChange={handleInput} value={netdata.renew} name="renew" id="renew" />
                </div>
                <br />
                <div className="form-div">
                    <label htmlFor="expire" className="form-lable">Expire Date</label> <br />
                    <input type="date"  autoComplete = "off" onChange={handleInput} value={netdata.expire} name="expire" id="expire" />
                </div>
                <br />
                <div className="form-div">
                    <label htmlFor="month" className="form-lable">Month</label> <br />
                    <input type="text" autoComplete = "off" onChange={handleInput} value={netdata.month} name="month" id="month" />
                </div>
                <br />
                <div className="form-div">
                    <label htmlFor="balanceMonth" className="form-lable">Balance Month</label> <br />
                    <input type="text" autoComplete = "off" onChange={handleInput} value={netdata.balanceMonth} name="balanceMonth" id="balanceMonth" />
                </div>
                <br />
                <div className="form-div">
                    <label htmlFor="amount" className="form-lable">Amount</label> <br />
                    <input type="text" autoComplete = "off" onChange={handleInput} value={netdata.amount} name="amount" id="amount" />
                </div>
                <br />
                <div className="form-div">
                    <label htmlFor="balanceAmount" className="form-lable">Balance Amount</label> <br />
                    <input type="text" autoComplete = "off" onChange={handleInput} value={netdata.balanceAmount} name="balanceAmount" id="balanceAmount" />
                </div>
                <br />
                <div className="form-div">
                    <button className="form-btn" type="submit">ADD</button>
                </div>
            </form>
        </div>
    )
}

export default NetPlanForm;