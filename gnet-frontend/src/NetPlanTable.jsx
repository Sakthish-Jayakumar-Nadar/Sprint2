import { useEffect, useState } from "react"
import { Axios } from "./Helper";
import { Link, useParams, useNavigate} from "react-router-dom";

const NetPlanTable = () => {
    const {userid} = useParams();
     const [netPlanData, setNetPlanData] = useState([]);
     const [dataDelete, setdataDelete] = useState(false);
    // const navigate = useNavigate()

    useEffect(() => {
        Axios.get(`/${userid}/getNetPlan`)
        .then((resp) => {
        setNetPlanData(resp.data)})
        .catch((error) => {console.log(error)});
        setdataDelete(false)
    },[netPlanData])

    // const actionUpdate = (id) => {
    //     navigate(`/Network/${network}/UpdateUser/${id}`);
    // }

    // const actionDelete = (id) => {
    //     setdataDelete(true)
    //     Axios.delete(`/delete/${id}`).then((resp) => console.log(resp.data)).catch((error) => console.log(error))
    // }

    return (
        <>
            <button className="network-btn"><Link to="AddNetPlan" className="network-add-link">Add User</Link></button>
            <table id="table">
                <thead>
                    <tr>
                        <th>Mbps</th>
                        <th>Renew Date</th>
                        <th>Expire Date</th>
                        <th>Month</th>
                        <th>Balance Month</th>
                        <th>Amount</th>
                        <th>Balance Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {netPlanData.map((d)=><tr>
                        <td>{d.mbps}</td>
                        <td>{d.renew}</td>
                        <td>{d.expire}</td>
                        <td>{d.month}</td>
                        <td>{d.balanceMonth}</td>
                        <td>{d.amount}</td>
                        <td>{d.balanceAmount}</td>
                        <td className="action">
                        <button className="action-btn update-btn" onClick={() => actionUpdate(d.id)}>Update</button>
                        <button className="action-btn delete-btn" onClick={() => actionDelete(d.id)}>Delete</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}

export default NetPlanTable