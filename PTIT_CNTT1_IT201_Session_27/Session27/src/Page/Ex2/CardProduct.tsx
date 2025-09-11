// import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';

import {products} from "./DataProduct.tsx"
import {Link} from "react-router-dom";



export default function (){



    return(
        <div className={"flex flex-wrap gap-3"}>
            {
                products.map((a) => (
                    <div >
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
                                <Link to={`/Ex3TaskList?id=${a.id}`}>Xem Chi tiet</Link>
                            </Card.Body>

                        </Card>
                    </div>
                ))
            }

        </div>
    )

}