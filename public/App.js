
import React, {useState, useEffect} from 'react';
import './index.css';
import axios from 'axios';
import User from './components/User';
import Loading from './components/Loading';


function App() {


        const [isLoading , setIsLoading] = useState(true);
        const [posts, setPosts] = useState([])
    
        useEffect(() => {
            setIsLoading(true);
            axios.get("https://api.github.com/users")
            .then(res =>{
                if(res.status === 200){
                    setPosts(res.data)
                    console.log('get data');
                    setIsLoading(false);
                }
                else{

                    console.log('error');
                } 
            })

            .catch(err => {
                console.log(err);
            })
        },[] )
    
    
        if(isLoading){

            return(<Loading />)
        }
    
    
    return (
        <div className ="container">


            

               {posts.map(post => {
                     
                     const {id,login,type,avatar_url} = post;
                   console.log(post);

                   return(
                    

                    <>

                      <User 
                      key={id} 

                      data={post}
                     
                    />
                      </>
                   );




               })}


               
    
        </div>
    )
}

export default App;
