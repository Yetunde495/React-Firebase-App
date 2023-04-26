import styled from "styled-components";


export const InputDiv = styled.div`
display: flex;
flex-direction: column;
gap: 0.3rem;
width:100%;
margin-bottom: 1rem;
input {
    width: 100%;
    line-height: 1.25;
    border: 1px solid #ced4da; 
    padding: 1rem 0.75rem;
    border-radius: 5px;
    font-size: 1rem;
    :focus {
    color: #212529;
    background-color: #fff;
    border-color: #cbd9e7;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(206,212,218,.25);
}
    }
p {
    color: #ff0000;
}
}
`
export const InputAddon = styled.div`
display: flex;
align-items: stretch;
flex-wrap:wrap;
position:relative;
width:100%;
 span {
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    white-space: nowrap;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
 }
`