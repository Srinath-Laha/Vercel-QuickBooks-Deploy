import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const api = `https://sandbox-quickbooks.api.intuit.com/v3/company/4620816365281116760/invoice?minorversion=65`;

const token =
  "YOUR TOKEN";  

  // axios.interceptors.request.use((confiq) => {
  //     confiq.headers.authorization = `Bearer${token}`;
  //     return confiq;
  //   },
  //   error =>{
  //     return Promise.reject(error)
  //   })


  const authAxios =axios.create({
    baseURL : api,
    headers:{
      Authorization : `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })

  




const QuickBooksApi = () => {
  // POST /v3/company/4620816365281116760/invoice?minorversion=65
  const [state, setState] = useState();
  const [err, setErr] = useState();
  // console.log(state, "][][][][[]");

  // useEffect(() => {
  //   console.log("object");
  //   const datax = () => {
      // const api = `https://sandbox-quickbooks.api.intuit.com/v3/company/4620816365281116760/employee?minorversion=65`
      // axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
      //         .then(res => {
      //             console.log(res.data);
      //         this.setState({
      //             items: res.data,  /*set response data in items array*/
      //             isLoaded : true,
      //             redirectToReferrer: false
      //         }))

     
      // axios.interceptors.request.use((confiq) => {
      //   confiq.headers.authorization = `Bearer${token}`;
      //   return confiq;
      // },
      // error =>{
      //   return Promise.reject(error)
      // }
      
      // );

      // axios

      //   .get(
      //     "https://sandbox-quickbooks.api.intuit.com/v3/company/4620816365281116760/invoice?minorversion=65",
      //     { headers: { Authorization: ` Basic  ${token}` } }
      //   )

      //   .then((res) => {
      //     console.log(res);
      //     setState({
      //       items: res.data,
      //       isLoaded: true,
      //       redirectToReferrer: false,
      //     });
      //   })
      //   .catch((err) => console.log(err));

      //   axios.get(api, {
      //     headers: {
      //         'authorization': token,
      //         'Accept' : 'application/json',
      //         'Content-Type': 'application/json'
      //     }
      // })
      // .then(res => {
      //     console.log(res)
      // })
      // .catch((err) => {
      //     console.log(err)
      // });
  //   };

  //   datax();
  // }, []);
   

   

    
      // console.log('fetchData===>>')
      // const fetchData =useCallback(async () =>{
      //   try{
      //     const result = await authAxios.get(`${api}`)
      //     setState(result.data)
      //   }
      //   catch (err){
      //     setErr(err.message)
      //   }
      // })

     
      // fetchData()
      

      var data = JSON.stringify({
        "Line": [
          {
            "Amount": 100,
            "DetailType": "SalesItemLineDetail",
            "SalesItemLineDetail": {
              "ItemRef": {
                "value": "1",
                "name": "Services"
              }
            }
          }
        ],
        "CustomerRef": {
          "value": "1"
        }
      });


      var config = {
        method: 'post',
      maxBodyLength: Infinity,
        url: 'https://sandbox-quickbooks.api.intuit.com/v3/company/4620816365281116760/invoice?minorversion=65\n',
        headers: { 
          'User-Agent': 'QBOV3-OAuth2-Postman-Collection', 
          'Accept': 'application/json', 
          'Content-Type': 'application/json', 
          'Authorization': 'YOUR TOKEN'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
   

  

  return (
    <div>
      <h1>hello axios</h1>
    </div>
  );
};

export default QuickBooksApi;
