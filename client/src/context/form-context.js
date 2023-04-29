import React, { useState, createContext, useEffect } from "react";
import axios from 'axios';

export const ApplicantContext = createContext(null);

export const FromApplicationContext = (props) => {
 // Open results page 
 const[detailspage, setDetailspage] = useState(false);
 const[dataformat, setDataformat] = useState()

 // Other states
 const[applicardId, setApplicantid] = useState('');
 const[gender, setGender] = useState("");
 const[maritalStatus, setMaritalStatus] = useState("");
 const[dependants, setDependants] = useState("");
 const[employed, setEmployed] = useState("");
 const[loanamount, setLoanamount] = useState("");
 const[incomerate, setIncomerate] = useState("");
 const[credithistory, setCredithistory] = useState("");

 console.log(credithistory)

//  Predictions
const [prediction, setPrediction] = useState(null);

// API predictions >> Fetch after every 1s
useEffect(() => {
  const interval = setInterval(() => {
    fetchUserData();
  }, 1000);

  return () => clearInterval(interval);
}, []);

const fetchUserData = () => {
  axios.get('http://localhost:3001/api/predict')
    .then(response => {
      setPrediction(response.data.predictions[0]);
    })
    .catch(error => {
      console.log(error);
    });
};
 
 // Validating the form starting from the one
 const submitUserDetails = async (e) => {
  e.preventDefault();
  const loanstatus = "N";

  if(applicardId === ''){
   alert("Please insert Applicant ID.");
  }

  if(applicardId.length < 8){
   alert("The national ID according to your Geo-location must be greater than 8-digits")
   setDetailspage(false)
  }

  if(gender === ''){
   alert("Please insert your gender below.");
  }
 
  if(maritalStatus === ''){
   alert("Please insert your marital status.");
  }
 
  if(dependants === ''){
   alert("Please insert dependants exapmle the number of people you are taking off.");
  }
 
  if(employed === ''){
   alert("Please insert your employement details");
  }
 
  if(loanamount === ''){
   alert("Please insert the amount you want to borrow.");
  }
 
  if(incomerate === ''){
   alert("Please insert your basic salary amount.");
  }
 
  if(credithistory === ''){
   alert("Please insert your credit history. Yes or No.");
  }

  if(applicardId && gender && maritalStatus && dependants && employed && loanamount && incomerate && credithistory){
   setDetailspage(true)

   const userData = {
    applicardId: applicardId,
    gender: gender,
    maritalStatus: maritalStatus,
    dependants: dependants,
    employed: employed,
    loanamount: loanamount,
    incomerate: incomerate,
    credithistory: credithistory,
    loanstatus: loanstatus
  };

  try {
    const res = await fetch("http://localhost:3001/api/applyloan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });

    const data = await res.json();
    setDataformat(data);
    console.log("Succefule send details")
  } catch (err) {
      console.error(err);
  }
  }
 }

 // Reset the datasets
 const resetFileds = () => {
  setApplicantid("")
  setGender("")
  setMaritalStatus("")
  setDependants("")
  setEmployed("")
  setLoanamount("")
  setIncomerate("")
  setCredithistory("")
  setDetailspage(false)
 }

 const ApplicantContextValues = {applicardId, gender, maritalStatus, dependants, employed, loanamount, incomerate, credithistory, setApplicantid, setGender, setMaritalStatus, setDependants, setEmployed, setLoanamount, setIncomerate, setCredithistory, detailspage, submitUserDetails, resetFileds, dataformat, prediction, setPrediction};

 return (
  <ApplicantContext.Provider value={ApplicantContextValues}>{props.children}</ApplicantContext.Provider>
 )
}

