
import {products} from "./DataProduct.tsx"

import {Link, useSearchParams} from "react-router-dom";


import Card from "react-bootstrap/Card";

export default function (){
    const [name] = useSearchParams()
    const id = name.get("id");


    const productId = id ? parseInt(id) : 0;


    const [a] = products.filter((a) => a.id === productId);

    return(
        <div>
            <div className={"bg-blue-400 text-white p-3.5 text-center"}>
                <h1>Trang Chi tiep san pham</h1>
                <p>Danh Sach san pham</p>
            </div>


            <div className={"mt-5 flex justify-center"}>
                <Card
                    key={a.id}
                    text={"black"}
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>{a.name} </Card.Title>
                        <Card.Text>
                            {a.description}
                        </Card.Text>
                        <Link to={`/`}>Quy Lai</Link>
                    </Card.Body>

                </Card>

            </div>
        </div>

    )

}