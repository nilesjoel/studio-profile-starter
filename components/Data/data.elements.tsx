import styled from 'styled-components'

import { devices } from '../../styles/devices';


const StyledList = styled.div`
    display: flex;
    align-items: center;
    // padding: 1rem;
    // margin-top: 0.5rem;
    justify-content: space-between;
    flex-direction: column;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    li {
        // padding: 0.5rem;
        background: silver;
        // margin-top: 0.5rem;
        // width: 100%;
        display: flex;
        justify-content: space-between;
    }
`
const StyledPanel = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    padding: 1rem;
    // background: silver;
    margin-top: 0.5rem;
    margin-top: 0.5rem;
    align-items: center;


    
@media ${devices.tabletS} {
    flex-direction: row;
    
  // margin: 3rem;
  }
`

const StyledColumns = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    background: green;
    margin-top: 0.5rem;
    margin-top: 0.5rem;
    align-items: center;
`

const StyledPanelLabel = styled.div`
    display:flex;
    flex:3;
    flex-direction: column;
    // background-color: red;
`
const StyledPanelDetails = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    // background-color: red;
`


export { StyledList, StyledPanel, StyledColumns, StyledPanelLabel, StyledPanelDetails }