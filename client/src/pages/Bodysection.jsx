import React, { useContext } from 'react';
import { MainBodyDisplay, LoaneeFormData } from "../components/styled/Body.styled"
import { FaEnvelope, FaPhone} from "react-icons/fa"
import { ApplicantContext } from '../context/form-context';

const Bodysection = () => {
  const { applicardId, gender, maritalStatus, dependants, employed, loanamount, incomerate, credithistory, setApplicantid, setGender, setMaritalStatus, setDependants, setEmployed, setLoanamount, setIncomerate, setCredithistory, detailspage, submitUserDetails } = useContext(ApplicantContext)

 return (
  <>{!detailspage &&
    <MainBodyDisplay>
    <LoaneeFormData>
    <h1>Predict Your Loan Here</h1>

    {/* getting the fomr */}
    <form>
      {/* Left section */}
      <div className='Formleftcontainer'>
        <div className='Formgroupfileds'>
          <span><p>Applicant ID</p> <p>*</p></span>
          <input type='text' placeholder='Enter your National Identity Number. eg:- 23213453'
          value={applicardId} onChange={(e) => {setApplicantid(e.target.value)}}/>
        </div>

        <div className='Formgroupfileds'>
          <span><p>Applicant Gender</p> <p>*</p></span>
          <select id="priority-select" value={gender} onChange={(e) => {setGender(e.target.value)}}>
            <option value="">--Chose your gender--</option>
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </div>

        <div className='Formgroupfileds'>
        <span><p>Marital Status</p> <p>*</p></span>
          <select id="priority-select" value={maritalStatus} onChange={(e) => {setMaritalStatus(e.target.value)}}>
            <option value="">--Chose your status--</option>
            <option value="1">Married</option>
            <option value="0">Not Married</option>
          </select>
        </div>

        <div className='Formgroupfileds'>
          <span><p>Dependants</p> <p>*</p></span>
          <select id="priority-select" value={dependants} onChange={(e) => {setDependants(e.target.value)}}>
            <option value="">--Chose your option here--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div className='Formgroupfileds'>
         <span><p>Self Employed</p> <p>*</p></span>
          <select id="priority-select" value={employed} onChange={(e) => {setEmployed(e.target.value)}}>
            <option value="">--Chose your option--</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

      </div>

      {/* Right section */}
      <div className='Formrightcontainer'>
        
        <div className='Formgroupfileds'>
          <span><p>Loan Amount</p> <p>*</p></span>
          <input type='number' placeholder='The amount you want to borrow. eg:- 100,000'
          value={loanamount} onChange={(e) => {setLoanamount(e.target.value)}}/>
        </div>

        <div className='Formgroupfileds'>
          <span><p>Applicant Income</p> <p>*</p></span>
          <input type='number' placeholder='Your net mathly income. eg:- 120,000'
          value={incomerate} onChange={(e) => {setIncomerate(e.target.value)}}/>
        </div>

        <div className='Formgroupfileds'>
          <span><p>Credit History</p> <p>*</p></span>
          <select id="priority-select" value={credithistory} onChange={(e) => {setCredithistory(e.target.value)}}>
            <option value="">--Chose your history--</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div className='Formgroupfileds'>
          <input type='submit' value='Apply Loan' onClick={(e) => {submitUserDetails(e)}}/>
        </div>

        <div className='Formgroupfileds Footerloan'>
          <p><i>NOTE</i>: By clicking the Apply loan button, does not quarantee you to get the loan. We only provide recommendation on minimum requirements to be met before your loan application. Thanks for using our platform. If have any question, click one of the contacts below.</p>
        </div>

      </div>
    </form>

    <div className='Copyright'>
      <p>Copyright&copy;2023Gtechdevelopers.com || Contact developer: <FaEnvelope/>&nbsp;<FaPhone/></p>
    </div>
   </LoaneeFormData>
 </MainBodyDisplay>}
  </>
  
 );
}

export default Bodysection;
