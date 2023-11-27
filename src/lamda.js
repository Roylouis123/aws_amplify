// import React, { useState } from 'react';
// import AWS from 'aws-sdk';

// const Lambda = () => {

//     const [data, setData] = useState(false);

//   function callAWSLambda(type,) {

//         let lambda = new AWS.Lambda({
//           region: 'us-east-1', // change to your region
//           accessKeyId: 'AKIA6L5X6FN5GC4VJCKQ', // access key id
//           secretAccessKey: 'O8Uu0uPg56PMUQOORii8CYGDdWLGnx+a+YuwKxjS' // secret access key
//         });
    
//         let params = {
//             FunctionName: type, 
//             Payload: JSON.stringify({})
//           };
        
//           lambda.invoke(params, function(err, data) {
//             if (err) {
//               console.log(err, err.stack); 
//               setData(false);
//             } else {
//               setData(JSON.parse(data.Payload
//                 ));
//             }
//           });
//       }
  
//       const handleFunction1 = () => {
          

//         const query = `{
//           getRoySchema(id: "3") {
//             data {
//               id
//               title
//             }
//             success
//           }
//         }`;
        
//         fetch("https://432h7nxknrhkjiobb7ulrlzkse.appsync-api.us-east-1.amazonaws.com/graphql", {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'x-api-key': 'da2-pgnrff5g55djjl2kzpkr6etpqu'
//           },
//           body: JSON.stringify({ query })
//         }).then(response => response.json())
//           .then(data => console.log(data))
//           .catch(error => console.error(error));


//       }
  
//       const handleFunction2 = () => {
//           callAWSLambda('royTrigger2');
//       }
  
//       return (
//           <div>
//               <div className='flex justify-around h-40 p-10'>
//                   <div><button className='bg-blue-500 p-2 rounded-md' onClick={handleFunction1}>Function_1</button></div>
//                   <div><button className='bg-red-600 p-2 rounded-md' onClick={handleFunction2}>Function_2</button></div>
//               </div>
  
//               <div className='flex justify-around h-40 p-10 text-lg font-bold text-green-500'>{data.body}</div>
  
//           </div>
//       );
//   };
  
//   export default Lambda;





// import React, { useState } from 'react';
// import {get} from "lodash"

// const YourComponent = () => {
//     const [id, setId] = useState('');
//     const [data, setData] = useState(false);
//     console.log(data,"data")

//     const fetchGraphQLData = (id) => {
//         const query = `{
//             getRoySchema(id: "${id}") {
//                 data {
//                     id
//                     title
//                 }
//                 success
//             }
//         }`;

//         console.log(query,"query")

//         fetch("https://432h7nxknrhkjiobb7ulrlzkse.appsync-api.us-east-1.amazonaws.com/graphql", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'x-api-key': 'da2-pgnrff5g55djjl2kzpkr6etpqu'
//             },
//             body: JSON.stringify({ query })
//         })
//         .then(response => response.json())
//         .then(data => setData(data))
//         .catch(error => console.error(error));
//     }

//     let result = get(data, 'data.getRoySchema.data', null);

//     return (
//       <div style={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh'
//     }}>
//         <input 
//             type="text" 
//             value={id} 
//             onChange={e => setId(e.target.value)} 
//             placeholder="Enter id" 
//             style={{
//                 marginBottom: '10px',
//                 padding: '10px',
//                 fontSize: '16px',
//                 border: 'solid black 1px',
//             }}
//         />
//         <button 
//             onClick={() => fetchGraphQLData(id)} 
//             style={{
//                 padding: '10px 20px',
//                 fontSize: '16px',
//                 cursor: 'pointer',
//                 border: 'solid black 1px',
//                 backgroundColor: 'blue',
//                 color: 'white',
//             }}
//         >
//             Fetch Data
//         </button>

//         <div style={{width: '50%', marginTop: '20px'}}>
//           {result && JSON.stringify(result, null, 2)}
//           </div>

//     </div>
//     );
// }

// export default YourComponent;







import React, { useState, useEffect } from 'react';
import {get} from "lodash"

const YourComponent = () => {
    const [id, setId] = useState('');
    const [data, setData] = useState(false);
    console.log(data,"data")

   useEffect(()=>{
    const fetchGraphQLData = () => {
        const query = `{
            getRoySchema(id: "") {
                data {
                    id
                    title
                }
                success
            }
        }`;

        console.log(query,"query")

        fetch("https://432h7nxknrhkjiobb7ulrlzkse.appsync-api.us-east-1.amazonaws.com/graphql", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'da2-pgnrff5g55djjl2kzpkr6etpqu'
            },
            body: JSON.stringify({ query })
        })
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }
    fetchGraphQLData()
   },[])

    let result = get(data, 'data.getRoySchema.data', null);

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }}>

        <div style={{width: '50%', marginTop: '20px'}}>
          {result && JSON.stringify(result, null, 2)}
          </div>

    </div>
    );
}

export default YourComponent;