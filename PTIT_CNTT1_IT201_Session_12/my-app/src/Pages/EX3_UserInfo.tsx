import "../index.css";

const EX3_UserInfo = () => {
    const name = "WER"
    const sex = "Nam"
    const DOB = "25/05/2k6"
    const email = "sads@gmail.com"
    const address = "Thanh Xuan, Hn"



    return (
        <div className="information">
            <h1>Information</h1>
            <ul>
                <li>Ten: {name}</li>
                <li>Gioi Tinh: {sex}</li>
                <li>Ngay sinh: {DOB}</li>
                <li>Email: {email}</li>
                <li>Dia chi: {address}</li>
            </ul>
        </div>
    )
}


export default EX3_UserInfo;