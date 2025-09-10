import {Button, Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

interface pro {
    id: number; name: string; price: number; imageLink: string
}
interface ProductsProps {
   data :pro[]
}

export default function ({data}: ProductsProps) {
    const navigate = useNavigate();


    const handelDetail = (id:number) => {
        navigate(`/ProductDetail?id=${id}`)
    }

    return (


        <div className={"flex flex-wrap gap-10 justify-center mt-10"}>

            {data.map(a => (
                <Card className={"p-2 text-center"} style={{width: '18rem'}}>
                    <Card.Img variant="top" src={a.imageLink}/>
                    <Card.Body>
                        <Card.Title>{a.name}</Card.Title>
                        <Card.Text>
                            {a.price}
                        </Card.Text>
                        <Button onClick={() => handelDetail(a.id)} variant="primary">Xem Chi tiết</Button>
                    </Card.Body>
                </Card>

            ))

            }

        </div>
    )
}