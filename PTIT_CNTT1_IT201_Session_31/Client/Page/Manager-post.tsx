import NavPost from "./NavPost"
import TablePost from "./TablePost"
import {useCallback, useEffect, useState} from "react";
import ModalPost from "./ModalCreatePost"
import axios from "axios";
import debounce from "lodash.debounce";

export interface Post {
    id:string,
    title:string,
    content: string,
    created_at:string,
    status: boolean,
    image_url: string,
}

export interface PostAdd {
    title:string,
    content: string,
    created_at:string,
    status: boolean,
    image_url: string,
}


export default function Manager(){
    const [posts, setPost] = useState<Post[]>([])
    const [OpenModal, setModel] = useState(false);
    // const [textSearch, setSearch] = useState("");
    const [currentPost, setCurrent] = useState<Post[]>([]);
    const [currentPostTarget, setCurrentPost] = useState<Post>();


    const fetchPosts = async() => {
        await fetch("http://localhost:3000/posts")
            .then(response => response.json())
            .then((data: Post[]) => {
                setPost(data)
                setCurrent(data);

            })
            .catch((err) => {
                console.log(err)
            })
        }



    useEffect(() => {
        fetchPosts().then(r => console.log(r))
    }, []);





    const addNewPost = async (data: PostAdd) => {
        try {
                await axios.post("http://localhost:3000/posts", data);
                const updated = await axios.get("http://localhost:3000/posts");
                setPost(updated.data)
                setCurrent(updated.data)

        }
        catch (err)  {
            console.log(err)
        }
    }

    const handelDeletePost = async (id:string) => {
        try{
            await axios.delete(`http://localhost:3000/posts/${id}`);

            const data =   posts.filter(a => a.id  !== id);
            setPost(data);
            setCurrent(data)

        }catch(error: any){

            console.log(error);
        }
    }


    const changeStatus = async (id:string) => {

        const post = posts.find((a) => a.id === id);
        console.log(post)
        if(!post) return;
        try{

            const res = await axios.patch(`http://localhost:3000/posts/${id}`, {
                status: !post.status,
            })

            setPost((prev) => {
                return prev.map(t => (t.id === id ? res.data : t));
            });
            setCurrent((prev) => {
                return prev.map(t => (t.id === id ? res.data : t));
            });

        } catch (err){
            console.log(err)
        }
    }


    const handleSearch = useCallback(
        debounce((text: string) => {
            if (text === "") {
                setCurrent(posts);
            } else {
                const dataCurrent = posts.filter((a) =>
                    a.title.toLowerCase().includes(text.toLowerCase())
                );
                setCurrent(dataCurrent);
            }
        }, 500),
        [posts]
    );



    const handelSelect = (code:number)=> {
        switch (code){
            case 1:
                const dataCurrent = posts.filter((a) =>
                    a.status);
                setCurrent(dataCurrent);
                break;
            case 2:
                const dataCurrent1 = posts.filter((a) =>
                    !a.status);
                setCurrent(dataCurrent1);
                break;
            default:
                setCurrent(posts);
                break

        }

    }


    const updatePost = async (id: string, data: Post) => {
        try {

            await axios.put(`http://localhost:3000/posts/${id}`, data);

            // Lấy lại danh sách posts sau khi update
            const updated = await axios.get("http://localhost:3000/posts");

            // Cập nhật state
            setPost(updated.data);
            setCurrent(updated.data);
        } catch (err) {
            console.error("Update error:", err);
        }
    }


    const handelModal = () => {
        setModel(!OpenModal);
    }






    const editModal = (data:Post) => {
        setCurrentPost(data)
        handelModal();
    }

    // setCode



    return(
        <div className={"w-[80%] flex flex-col gap-8  m-auto mt-[5%]"}>
            <NavPost  handelModal={handelModal}  handleSearch={handleSearch} handelSelect={handelSelect}/>
            <TablePost dataPost={currentPost} handelDeletePost={handelDeletePost} changeStatus={changeStatus}
                       setCurrentPost={editModal}/>


            <ModalPost  open={OpenModal} setCurrentPost={setCurrentPost} onClose={handelModal} addNewPost={addNewPost} updatePost={updatePost} currentPostTarget={currentPostTarget}/>
        </div>
    )
}