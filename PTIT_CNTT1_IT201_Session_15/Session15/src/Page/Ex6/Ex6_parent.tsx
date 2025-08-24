import {Component} from 'react'
import ListPost from './ListPost.tsx'


export interface Post {
	id: number;
	title: string;
	contents: string;
	author: string;
}
interface State{
	posts: Post[];
}

export default class Ex6 extends Component<{}, State>{
	constructor(props: {}){
		super(props);
		this.state=
		{
			posts:[
				{id: 1, title: "Tại sao nên học React", contents: "Học React để đi làm", author: "David"},
				{id: 2, title: "Ưu điểm của TypeScript", contents: "TS giúp code an toàn hơn", author: "Alice"},
				{id: 3, title: "NodeJS là gì?", contents: "NodeJS giúp xây dựng backend với JS", author: "Bob"},
				{id: 4, title: "CSS hiện đại", contents: "Flexbox và Grid giúp layout dễ dàng", author: "Emma"},
				{id: 5, title: "Docker cơ bản", contents: "Docker giúp triển khai nhanh và tiện lợi", author: "John"}
			]
		}

	}
	
	render(){
		return(
			<div>
				<ListPost post={this.state.posts}/>
			</div>
		)
	}
	
}