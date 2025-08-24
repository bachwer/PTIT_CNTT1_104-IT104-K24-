import { Component } from 'react';

import type {Post} from './Ex6_parent'


interface Props{
    post: Post[];
}


export default class Ex5 extends Component<Props>{

    render(){
        const { post } = this.props;
        return(
           <div>
               {
                   post.map(a => (
                       <div style={{margin: "center", width: "800px", borderBottom: "1px solid black"}}>
                           <h3>ID: {a.id}</h3>
                           <h3>Title: {a.title}</h3>
                           <h3>Content: {a.contents}</h3>
                           <h3>Author: {a.author}</h3>
                       </div>
                   ))
               }
           </div>
        )
    }

}

