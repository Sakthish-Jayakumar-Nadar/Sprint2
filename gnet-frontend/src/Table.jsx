import { useEffect, useState } from "react"
import { Axios } from "./Helper";
import { Link, useParams, useNavigate} from "react-router-dom";

const Table = () => {
    const {network} = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        Axios.get(`/networkName/${network}`)
        .then((resp) => {
        setData(resp.data)})
        .catch((error) => {console.log(error)});
    },[data,network])

    const actionInfo = (id) => {
        navigate(`/Network/${network}/NetPlan/${id}`);
    }

    const actionUpdate = (id) => {
        navigate(`/Network/${network}/UpdateUser/${id}`);
    }

    const actionDelete = (id) => {
        Axios.delete(`/delete/${id}`).catch((error) => console.log(error))
    }

    return (
        <>
            <button className="network-btn"><Link to="AddNewUser" className="network-add-link">Add User</Link></button>
            <table id="table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Phone No.</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d)=><tr>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.location}</td>
                        <td>{d.phone}</td>
                        <td className="action">
                        <button className="action-btn info-btn" onClick={() => actionInfo(d.id)}>Info</button>
                        <button className="action-btn update-btn" onClick={() => actionUpdate(d.id)}>Update</button>
                        <button className="action-btn delete-btn" onClick={() => actionDelete(d.id)}>Delete</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}

export default Table