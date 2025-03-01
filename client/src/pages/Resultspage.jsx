import React, { useContext, useState  } from 'react';
import { MainBodyDisplay, LoaneeFormData, Bodyloandefinition } from "../components/styled/Body.styled"
import { Button } from '../components/styled/Button.styled';
import { FaEnvelope, FaPhone} from "react-icons/fa"
import { ApplicantContext } from '../context/form-context';
import { FaDownload } from 'react-icons/fa';
import Subloader from '../components/universals/Subloader';
import html2pdf from 'html2pdf.js';
import AutoTyping from 'react-auto-typing'
import "./report.css";
import styled from 'styled-components';


const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 20px;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }

  th, td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
  }

  th {
    background: ${({theme}) => theme.colors.body};
    color:  ${({theme}) => theme.colors.color};
  }

  @media (max-width: 768px) {
    th, td {
      padding: 8px;
      font-size: 14px;
    }
  }

  @media (max-width: 600px) {
    min-height: 50vh;
    table {
      min-width: 100%;
      display: block;
      overflow-x: auto;
    }

    tr {
      display: block;
      margin-bottom: 10px;
    }

    th, td {
      display: block;
      text-align: right;
    }

    th {
      text-align: left;
      background-color: transparent;
      font-weight: bold;
    }
  }
`;

const Resultspage = () => {
  const { detailspage, applicardId, resetFileds, gender, maritalStatus, dependants, employed, loanamount, incomerate, credithistory, prediction } = useContext(ApplicantContext)
  const [isTyping, setIsTyping] = useState(true);

  const handleReport = () => {
     const reportElement = `
  <div id='Reportheader'>
    <h2>Loan Analysis Qualification Report</h2>
    <table>
      <thead><tr><th>Loan Analysis Report For Holder Nation ID: ${applicardId}</th></tr></thead>
      <thead>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>National ID: </td>
          <td>${applicardId}</td>
        </tr>
        <tr>
          <td>Gender: </td>
          <td>${gender === '1' ? "Male" :  "Female"}</td>
        </tr>
        <tr>
          <td>Marital Status: </td>
          <td>${maritalStatus === '1' ? "Married" : "Unmarried"}</td>
        </tr>
        <tr>
          <td>Dependants: </td>
          <td>${dependants}</td>
        </tr>
        <tr>
          <td>Employment Status: </td>
          <td>${employed === '1' ? "Yes" : "No"}</td>
        </tr>
        <tr>
          <td>Requested Amount: </td>
          <td>${loanamount}</td>
        </tr>
        <tr>
          <td>Basic Salary: </td>
          <td>${incomerate}</td>
        </tr>
        <tr>
          <td>Credit History: </td>
          <td>${credithistory === '1' ? "Yes" : "No"}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div id='Resultsrecommendation'>
    <h1>Applicant results</h1>
    <div class='Results'>
      <p>You are ${prediction === 1 ? 
      "<span style='color: green;'>Qualified</span>" 
      : 
      "<span style='color: orangered;'>Not Qualified</span>"}</p>
    </div>
    <div class='Details'>
      ${prediction === 1 ? "<div class='sectionleftresults'><h2>Reasons why you are Qualified.</h2>" +
        qualified.map((qualifieds) => (
          "<p>" + qualifieds + "<br /></p>"
        )).join('') + "</div>"
      : "<div class='sectionrightrecommentation'><h2>Reasons why you are Not Qualified</h2>" +
        notqualified.map((notqualifieds) => (
          "<p>" + notqualifieds + "<br /></p>"
        )).join('') + "</div>"}
    </div>
  </div>
`;


    // Define the options for the PDF generation
    const options = {
      margin: 1,
      filename: 'Loan Qualifications Report.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };


    // Generate the PDF from the HTML element
    html2pdf().from(reportElement).set(options).save();
  }


  // COnent generation >> Qualified
  const qualified = [
    `1. You applied Ksh.${loanamount} slightly above your basic salary, which is recommended.`,
    `2. Your income rate Ksh.${incomerate} is close to the amount you applied for.`,
    '3. Your credit history is clean and makes you stand-out.',
    '4. Recommendation: Increase your income to apply for large amounts',
    '5. Conclusion: Remember to repay the loan before datelines to increase your loan and improves ratings.'
  ];
  

  // Content generation >> Not Qualified
  const notqualified = [
    `1. You applied Ksh.${loanamount} and you earn Ksh.${incomerate} makes the rate so high according to our terms of interest applied`,
    `2. Your income rate Ksh.${incomerate} is far much compared to the amount Ksh.${loanamount} you applied`,
    '3. Your credit history is wanting, try to check on ypur credit history',
    '4. Recommendation: Increase your income and clear credits.',
    '5. Conclusion: Remember the recommendation above before you apply for any loan again.'
  ];


  const handleAnimationComplete = () => {
    setIsTyping(false);
  };
 
 return (

  <>{detailspage &&
  <MainBodyDisplay>
      <LoaneeFormData>
      <div className='Header'>
        <div>
         <Button onClick={() => {resetFileds()}} bg='orangered' clr='white'>Reaply Loan</Button>
        </div>
        <h1>Welcome, National ID {applicardId}.</h1>
        <div onClick={handleReport}><p>Generate Report</p> <FaDownload size={20}/></div>
       </div>
       {typeof prediction === "undefined" ? 
       <Subloader /> 
      :
      (
        <>
        <Bodyloandefinition>
          <div className='Applicantdetailsform'>
            <h1>Applicant Details</h1>
            <TableContainer>
              <table>
                <tr>
                  <th>Applicant ID</th>
                  <th>Gender</th>
                  <th>Marital Status</th>
                  <th>Dependants</th>
                  <th>Employment</th>
                  <th>Loan Amount</th>
                  <th>Income</th>
                  <th>Credit History</th>
                </tr>
                
                <tr>
                  <td>{applicardId}</td>
                  <td>{gender === "1" ? "Male" : "Female"}</td>
                  <td>{maritalStatus === "1" ? "Married" : "Unmarried"}</td>
                  <td>{dependants}</td>
                  <td>{employed === "1" ? "Yes" : "No"}</td>
                  <td>{loanamount}</td>
                  <td>{incomerate}</td>
                  <td>{credithistory === "1" ? "Yes" : "No"}</td>
                </tr>
              </table>
            </TableContainer>
          </div>

          <div className='Resultsrecommendation'>
            <h1>Applicant results</h1>

            <div className='Results'>
              <p>You are {prediction === 1 ? 
              <span style={{ color: "green"}}>Qualified</span> 
              : 
              <span style={{ color: "orangered"}}>Not Qualified</span>}</p>
            </div>

            <div className='Details'>
              {prediction === 1 && <div className='sectionleftresults'>
                <h2>Reasons why you are Qualified.</h2>
                {qualified.map((qualifieds, index) => (
                  <p key={index}>
                    <AutoTyping
                      active={isTyping}
                      textRef={qualifieds}
                      writeSpeed={100}
                      deleteSpeed={10000}
                      delayToWrite={100}
                      delayToDelete={5000000}
                      onComplete={index === qualified.length - 1 ? handleAnimationComplete : undefined}
                    />
                    <br />
                  </p>
                ))}
              </div>}

              {prediction === 0 && <div className='sectionrightrecommentation'>
                <h2>Reasons why you are Not Qualified</h2>
                {notqualified.map((notqualifieds, index) => (
                  <p key={index}>
                    <AutoTyping
                      active={isTyping}
                      textRef={notqualifieds}
                      writeSpeed={150}
                      deleteSpeed={150}
                      delayToWrite={1000}
                      delayToDelete={100000}
                      onComplete={index === notqualified.length - 1 ? handleAnimationComplete : undefined}
                    />
                    <br />
                  </p>
                ))}
              </div>}
            </div>
          </div>
        </Bodyloandefinition>
        </>
      )}
      
      
      <div className='Copyright'>
        <p>Copyright&copy;2023Gtechdevelopers.com</p>
        <div style={{display: "flex", alignItems: "center", marginTop: "1rem auto"}}>
         <p>Contact developer:</p>
         <FaEnvelope/>&nbsp;<FaPhone/>
        </div>
      </div>
     </LoaneeFormData>
   </MainBodyDisplay>}
  </>
 );
}

export default Resultspage;
