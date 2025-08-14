
// Thuộc tính:
//     id: Mã người dùng (public).
//     posts: Mảng các bài đăng của người dùng (public).
//     followers: Mảng các người dùng mà người dùng này đang theo dõi (public).

let allPost : post[] = [];

class User{
    public id:string;
    public allPost:post[] = [];
    public followers:User[] = [];
    constructor(id:string) {
        this.id = id;
    }

    createPost(id: string,content:string ){
        const Post  = new post(id, this.id, content);
        allPost.push(Post)
        this.allPost.push(Post)
    }


    comment(postId:string,idCM:string, commentContent:string){
        const comment1 = new Comment(idCM, this.id, commentContent);
        allPost.forEach(post => {
            if( post.id === postId){
                post.addComment(comment1);
            }
        })
    }

    likePost(postId:string, User:User){
        allPost.forEach(post => {
            if( post.id === postId){
                post.addLike(User);
            }
        })
    }

    follow(User:User){
        this.followers.push(User)
    }

    addReply(idCom:string, contentRep: string){
      allPost.forEach(Comment =>{
          Comment.comments.forEach(id =>{
              if(id.id === idCom){
                  id.addReply(contentRep);
              }
          })
      })
    }



    viewFeed(){
        this.followers.forEach(user =>{
            allPost.forEach(userPost =>{
                if(user.id === userPost.userId){
                    console.log(userPost);
                }
            })
        })
    }

}
// Phương thức:
// createPost(content): Phương thức để người dùng tạo bài đăng mới. Mỗi bài đăng sẽ được thêm vào mảng posts.
// comment(postId, commentContent): Phương thức để người dùng bình luận vào một bài đăng. Bình luận sẽ được thêm vào mảng comments của bài đăng tương ứng.


// follow(user): Phương thức để người dùng theo dõi một người dùng khác. Người dùng đó sẽ được thêm vào mảng followers.
// likePost(postId): Phương thức để người dùng thích một bài đăng. Người dùng đó sẽ được thêm vào mảng likes của bài đăng tương ứng.

// viewFeed(): Phương thức để người dùng xem các bài đăng của những người dùng mà họ đang theo dõi.


class post{
    id: string;
    likes: User[] = [];
    comments: Comment[] = [];
    userId: string;
    content:string;
    constructor(id: string, userId:string,content:string ) {
        this.id = id;
        this.userId =userId;
        this.content =content;
    }

    // addLike(userId): Phương thức để thêm một người dùng vào mảng likes khi người dùng thích bài đăng.
    addLike(listUser:User){
        this.likes.push(listUser);
    }

    // addComment(comment): Phương thức để thêm một bình luận vào mảng comments.
    addComment(Comment:Comment){
        this.comments.push(Comment);
    }
}






// Lớp Comment:
//     Thuộc tính:
//     id: Mã bình luận (public).
//     userId: Mã người dùng tạo bình luận (public).
//     content: Nội dung bình luận (public).
//     replies: Mảng các phản hồi đối với bình luận (public).
class Comment{
    id:string;
    userId: string;
    contentComment: string;
    replies: string[] = [];
    constructor(id:string, userId:string, contentComment:string) {
        this.id = id;
        this.userId =userId;
        this.contentComment = contentComment;
    }//     Phương thức:
//    addReply(reply): Phương thức để thêm một phản hồi vào bình luận. Phản hồi sẽ được thêm vào mảng replies.

    addReply(reply:string){
        this.replies.push(reply);
    }
}


const User1 = new User("U1")
const User2= new User("U2")
const User3 = new User("U3")



User1.createPost("POS12", "POSTS CONTENT1")
User1.createPost("POS112", "POSTS CONTENT2")
User1.createPost("POS1232", "POSTS CONTENT2")
console.log('User1 POSTED');



console.log('User3 like postID122 of user1 and comment');
User3.likePost("POS112",User3);
User3.comment("POS1232", "CM12", "I like it");
console.log("repCom..")
User2.addReply("CM12", "me to")

User2.follow(User1);
console.log('User2 following User1');
console.log('Show post user1');
User2.viewFeed();



