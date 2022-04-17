import {useState, useEffect} from "react"

export default function useAuth(){
  const [accessToken,setaccessToken] = useState()
  const [refreshToken,setrefresh]= useState()
  const [expiresIn,setexpiresIn]= useState()


  useEffect(()=>{
    axcios.post("http://localhost:30001/login",
    {
    code,
    
    }).then(res=>{
        console.log(res.data)
    })
    
    
    },[code])
}


