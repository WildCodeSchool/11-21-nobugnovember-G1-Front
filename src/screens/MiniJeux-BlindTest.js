import { useEffect, useState } from "react";
import axios from 'axios'

const MiniJeuxBlindTest = () => {
        const [deezer, setDeezer] = useState ()
        
            useEffect(() => {

                const apiDeezer= () => {
                  
                  axios
                    .get(
                      `https://api.deezer.com/playlist/8531512122`
                    )
                    .then(response => response.data)
                    .then(data => {
                      setDeezer(data)
                      console.log(deezer)
                    })
                }
                apiDeezer()
              }, [])

    return (
        <div>
           YO 
           
           {/* <BlindTest /> */}
        </div>
    )
}


export default MiniJeuxBlindTest


import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://deezerdevs-deezer.p.rapidapi.com/playlist/8531512122',
//   headers: {
//     'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
//     'x-rapidapi-key': '22942c22d6msh3d5e8fb723a0e82p177975jsnc6c1ad6f4366'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });