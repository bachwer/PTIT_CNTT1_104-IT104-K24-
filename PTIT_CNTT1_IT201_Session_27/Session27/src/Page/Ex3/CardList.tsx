import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import {tasks} from "./DataTask.tsx"


export default function (){



    return(
        <div className={"flex flex-col gap-3 m-auto items-center "}>
            {
              tasks.map((a) => (

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
                              <Link to={`/Ex3TaskListDetail?id=${a.id}`}>Xem Chi Tiet</Link>
                          </Card.Body>

                      </Card>

              ))
            }
        </div>
    )
}
