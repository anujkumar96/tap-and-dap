import axios from "axios";
import { USERS } from "../../utils/EndPoints";
import _history from "../../utils/history";

export const registerUser = ({email,password,fullname}) => {

    const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64');
    
    var bodyParameters = {
        "access_token": "sG6lMKh9DoKVhWQcCXgin9GkrS0fqi9g",
        "email":email, 
        "password":password,
        "fullname":fullname
    }
    let esc = encodeURIComponent;
    let body = Object.keys(bodyParameters).map(k => esc(k) + "=" + esc(bodyParameters[k])).join("&");

    return dispatch => {
        axios.post(USERS, body)
            .then((response) => {
                if (response.status === 201) {
                    dispatch({ 
                        type:"SIGNUP",
                        payload:response.data
                    })
                    _history.push("/")
                }
            }).catch((error) => {
                if (!error.response) {
                    // network error
                    console.log('Error: Network Error');
                } else {
                    console.log(error.response.data);
                }
            })
    }
};