import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Axios } from "./Helper";

const UserForm = () => {
    const navigate = useNavigate()
    const { network, userid } = useParams();
    const obj = {
        userId: "",
        username: "",
        location: "",
        phone: ""
    }
    const [userdata,setUserdata] = useState(obj)

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserdata({...userdata, [name] : value});
    }

    useEffect(() => {
        if(userid != undefined){
            Axios.get(`/get/${userid}`).then((resp) => setUserdata({...userdata,userId: resp.data.id,
            username: resp.data.name,
            location: resp.data.location,
            phone: resp.data.phone})).catch((error) => console.log(error));
        }
    },[])
    const handleSubmit = (e) => {
        e.preventDefault();
        if(userid != undefined){
            const updatedata = {
                "id": userdata.userId,
                "network": network,
                "name": userdata.username,
                "location": userdata.location,
                "phone": userdata.phone
            }
            if(confirm("Are you sure want to UPDATE the user !!!")){
                Axios.post(`/update/${userid}`,updatedata).catch((error) => console.log(error));
                navigate(-1);
            }
        }
        else{
            const postdata = {
                "id": userdata.userId,
                "network": network,
                "name": userdata.username,
                "location": userdata.location,
                "phone": userdata.phone
            }
            if(confirm("Are you sure want to ADD the user !!!")){
                Axios.post("add/newUser",postdata).catch((error) => console.log(error));
                setUserdata(obj);
                navigate(-1);
            }
        }
    }

    return (
        <div id="form">
            <form onSubmit={handleSubmit}>
                <div className="form-div form-div-1">
                    <label htmlFor="userId" className="form-lable">User ID</label> <br />
                    <input type="text" autoComplete = "off" onChange={handleInput} value={userdata.userId} disabled={(userid != undefined)?true:false} name="userId" id="userId" />
                </div>
                <br />
                <div className="form-div">
                    <label htmlFor="username" className="form-lable">Name</label> <br />
                    <input type="text" autoComplete = "off" onChange={handleInput} value={userdata.username} name="username" id="username" />
                </div>
                <br />
                <div className="form-div">
                    <label htmlFor="location" className="form-lable">Loaction</label> <br />
                    <input type="text"  autoComplete = "off" onChange={handleInput} value={userdata.location} name="location" id="location" />
                </div>
                <br />
                <div className="form-div">
                    <label htmlFor="phone" className="form-lable">Phone</label> <br />
                    <input type="text" autoComplete = "off" onChange={handleInput} value={userdata.phone} name="phone" id="phone" />
                </div>
                <br />
                <div className="form-div">
                    <button className="form-btn" type="submit">{(userid != undefined)?"Update":"Add"}</button>
                </div>
            </form>
        </div>
    )
}

export default UserForm;