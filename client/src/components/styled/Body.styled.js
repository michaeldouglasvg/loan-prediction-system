import styled from 'styled-components';

export const MainBodyDisplay = styled.div`
 width: 100%;
 height: calc(100vh - 100px);
 background: ${({theme}) => theme.colors.body};
 color:  ${({theme}) => theme.colors.color};
 box-shadow: 0 0 2px 1px rgba(0, 0, 0, .1);

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  width: 88%;
  margin: 1rem auto;
  padding: 1rem .6rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
 }
`

export const LoaneeFormData = styled.div`
 width: 100%;
 padding: 1rem .2rem;
 position: relative;
 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  width: 100%;
  height: 100%;
  padding: 1rem .2rem;
  position: relative;
 }

 & > h1{
  padding: 1rem 1rem;
  box-shadow: 0 0 2px 1px rgba(0 ,0 ,0 ,.1);
  font-size: 1.5rem;
  color: grey;
  text-align: center;
 }

 & > .Header{
  width: 100%;
  background: ${({theme}) => theme.colors.body};
  color:  ${({theme}) => theme.colors.color};
  box-shadow: 0 0 2px 1px rgba(0 ,0 ,0 ,.1);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: .5rem 1rem;
  & > h1{
  padding: 1rem 1rem;
  background: whitesmoke;
  color: grey;
  font-size: 1rem;
 }
 & > div{
  display: flex;
  align-items: center;
  color: grey;
  cursor: pointer;
  & p{
   font-size: 1rem;
  }
 }
 }
 
 & > form{
  width: 100%;
  padding: 1rem .4rem;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  width: 90%;
  padding: 1rem 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
 }

  & > .Formleftcontainer{
   width: 98%;
   margin: .1rem auto;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-direction: column;
   @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    }

   & .Formgroupfileds{
    width: 100%;
    margin: 1rem auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    & span{
     display: flex;
     align-items: center;
     position: relative;

     & P{
      font-size: 1rem;
      color: grey;
      padding-bottom: .4rem;
      &:nth-child(2){
       color: red;
       position: absolute;
       top: -.2rem;
       right: -.5rem;
      }
     }
    }

    & select{
     outline: none;
     padding: 1rem 1rem;
     width: 100%;
     border: none;
     background: silver;
     border-radius: 3px;
    }

    & input{
     outline: none;
     padding: 1rem 1rem;
     width: 100%;
     border: none;
     background: silver;
     border-radius: 3px;
    }
   }
  }

  & > .Formrightcontainer{
   width: 98%;
   margin: .1rem auto;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-direction: column;
   @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    }

   & .Formgroupfileds{
    width: 100%;
    margin: 1rem auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    & span{
     display: flex;
     align-items: center;
     position: relative;

     & P{
      font-size: 1rem;
      color: grey;
      padding-bottom: .4rem;
      &:nth-child(2){
       color: red;
       position: absolute;
       top: -.2rem;
       right: -.5rem;
      }
     }
    }

    & select{
     outline: none;
     padding: 1rem 1rem;
     width: 100%;
     border: none;
     background: silver;
     border-radius: 3px;
    }

    & input{
     outline: none;
     padding: 1rem 1rem;
     width: 100%;
     border: none;
     background: silver;
     border-radius: 3px;
    }

    & input[type='submit']{
     background: linear-gradient(45deg, skyblue, blue, purple, blue, skyblue);
     padding: 1.2rem 1rem;
     color: white;
     cursor: pointer;
    }
   }

   & .Footerloan{
    width: 100%;
    padding: .6rem 1rem;
    border-top: 5px solid goldenrod;
    border-radius: 3px;
    margin-top: 1rem;
    p{
     font-size: 11px;
     line-height: 1.3rem;
     color: grey;
     font-style: italic;
    }
   }
  }
 }

 & .Copyright{
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem .1rem;
  display: grid;
  place-items: center;
  & p{
   font-size: 11px;
   color: grey;
  }
 }
`

export const Bodyloandefinition = styled.div`
 width: 100%;
 padding: 1rem .1rem;
 
 & .Applicantdetailsform{
  width: 100%;

  & h1{
   width: 100%;
   padding: .2rem .1rem;
   font-size: 1.3rem;
   color: grey;
  }

  & table{
   width: 100%;
   ovrflow-x: scroll;
   outline: 1px solid #cbcbcd;
   border-colapse: colapse;

   & tr{
    & th{
     border-colapse: colapse;
     text-align: left;
     outline: 1px solid #cbcbcd;
     padding-left: .5rem;
    }

    & td{
     border-colapse: colapse;
     text-align: left;
     outline: 1px solid #cbcbcd;
     padding-left: .4rem;
    }
   }
  }
 }


 & .Resultsrecommendation{
  margin-top: 1rem;

  & h1{
   width: 100%;
   padding: .2rem .1rem;
   font-size: 1.3rem;
   color: grey;
  }

  & .Results{
   width: 100%;
   & p{
    padding: .2rem .1rem;
    font-size: 1.3rem;
    color: grey;

    & span{
     padding: .2rem .1rem;
     font-size: 1.5rem;
     color: grey;
    }
   }
  }

  & .Details{
   width: 100%;
   margin-top: 1rem;
  }


  & .sectionleftresults{
   width: 100%;
   margin: .4rem auto;

   & h2{
    width: 100%;
    padding: .2rem .1rem;
    font-size: 1.5rem;
    color: goldenrod;
   }

   & p{
    width: 100%;
    line-height: 2rem;
    font-size: 1rem;
    color: grey;
   }
  }

  & .sectionrightrecommentation{
   width: 100%;
   margin: .4rem auto;

   & h2{
    width: 100%;
    padding: .2rem .1rem;
    font-size: 1.5rem;
    color: goldenrod;
   }

   & p{
    width: 100%;
    line-height: 2rem;
    font-size: 1rem;
    color: grey;
   }
  }
 }
`