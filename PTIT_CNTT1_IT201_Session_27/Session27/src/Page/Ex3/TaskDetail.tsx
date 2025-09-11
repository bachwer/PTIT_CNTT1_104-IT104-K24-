import Card from "react-bootstrap/Card";
import {Link, useSearchParams} from "react-router-dom";
import {tasks} from "./DataTask.tsx"


export default function (){
    const [name] = useSearchParams()
    const id = name.get("id");

    const productId = id ? parseInt(id) : 0;


    const [a] = tasks.filter((a) => a.id === productId);


    return(
        <div className={"flex flex-col gap-3 m-auto items-center "}>
            {


                    <Card
                        key={a.id}
                        text={"black"}
                        style={{ width: '18rem' }}
                        className="mb-2 w-25"
                    >
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>{a.title} </Card.Title>
                            <Card.Text>
                                {a.description}
                            </Card.Text>
                            <Link to={`/Ex3TaskList`}>Xem Chi Tiet</Link>
                        </Card.Body>

                    </Card>

            }
        </div>
    )
}
