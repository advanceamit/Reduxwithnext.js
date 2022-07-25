import axios from 'axios'
export const GET_USERDATA='GET_USERDATA'

export const apidata=(data)=>{
    return {
      
            type:GET_USERDATA,
            payload:data

     

    }




}

