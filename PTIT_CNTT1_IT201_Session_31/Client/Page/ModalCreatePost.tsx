import React, {useEffect, useState} from "react";
import {Form, Modal, Button, Input} from "antd";

import ReactQuill from "react-quill-new";

import "react-quill/dist/quill.snow.css";
import {Post, PostAdd} from "./Manager-post";

interface ModalPostProps {
    open: boolean,
    onClose: () => void,
    addNewPost: (data: PostAdd) => Promise<void>,
    currentPostTarget: Post | undefined,
    setCurrentPost: (value: (((prevState: (Post | undefined)) => (Post | undefined)) | Post | undefined)) => void,
    updatePost: (id: string, data: Post) => Promise<void>
}

export default function AddPostModal({
                                         open,
                                         onClose,
                                         addNewPost,
                                         currentPostTarget,
                                         setCurrentPost,
                                         updatePost
                                     }: ModalPostProps) {
    const [form] = Form.useForm();
    const [code, setCode] = useState<"Add" | "Edit">("Add");
    const [btn, setBtn] = useState<"Xuất Bản" | "Edit">("Xuất Bản");

    const [post, setPost] = useState<Post>({
        id: "",
        title: "",
        content: "",
        created_at: "",
        status: true,
        image_url: "",
    })

    useEffect(() => {
        if (currentPostTarget) {
            setPost(currentPostTarget);
            form.setFieldsValue({
                title: currentPostTarget.title,
                image_url: currentPostTarget.image_url,
                content: currentPostTarget.content,
            });
            setCode("Edit");
            setBtn("Edit")
        } else {
            setPost({
                id: "",
                title: "",
                content: "",
                created_at: "",
                status: true,
                image_url: "",
            });
            form.resetFields();
            setCode("Add");
            setBtn("Xuất Bản")
        }
    }, [currentPostTarget, form]);


    console.log(currentPostTarget);


    const handleSubmit = () => {
        if (post.title === "" || post.image_url === "" || post.content === "") {
            return;
        }
        const updatedPost = {
            ...post,
            created_at: new Date().toISOString().split("T")[0],
        };

        switch (code) {
            case "Add":
                if (addNewPost) {
                    addNewPost(updatedPost).then(r => console.log(r));
                }
                break
            case "Edit":
                 updatePost(post.id, post).then(r => console.log(r))
                break

        }


        onClose();


        form.resetFields();

        setPost({
            id: "",
            title: "",
            content: "",
            created_at: "",
            status: true,
            image_url: "",
        });
    };

    const handelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setPost((prev) => ({
            ...prev,
            [name]: value
        }));
        console.log(name + value);

    }

    const handleContentChange = (value: string) => {
        setPost((prev) => ({
            ...prev,
            content: value
        }));
    }

    return (
        <Modal
            title="Thêm mới bài viết"
            open={open}
            onCancel={() => {
                onClose();
                setCurrentPost(undefined)
            }}
            footer={[
                <Button key="reset" onClick={() => form.resetFields()}>Làm mới</Button>,
                <Button key="submit" type="primary" onClick={handleSubmit}>{btn}</Button>,
            ]}
        >
            <Form layout="vertical" form={form}>
                <Form.Item name="title" label="Tiêu đề" rules={[{required: true}]}>
                    <Input name="title" onChange={handelInput}/>
                </Form.Item>
                <Form.Item name="image_url" label="Hình ảnh">
                    <Input name="image_url" onChange={handelInput}/>
                </Form.Item>
                <Form.Item label="Nội dung">
                    <ReactQuill
                        theme="snow"
                        value={post.content}
                        onChange={handleContentChange}
                        modules={{
                            toolbar: [
                                ["bold", "italic", "underline", "strike"],
                                [{list: "ordered"}, {list: "bullet"}],
                                ["blockquote", "code-block"],
                                [{header: [1, 2, 3, false]}],
                                ["link", "image"],
                                ["clean"],
                            ],
                        }}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
}