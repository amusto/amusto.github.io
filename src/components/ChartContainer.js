import React from 'react'
import { Card } from 'react-bootstrap'
// import '../css/style.css'
// import styled from 'styled-components';

// const ChartDiv = styled.div`
//   float: left;
//   margin: 5px;
//   width: 300px;
//   height: 300px;
//   border: 1px solid black;
// `;

/*
const ChartInnerDiv = styled.div`
  margin: 0px;
`;
*/

let defaultStyle = {
    float: 'left',
    margin: '5px',
    width: '500px'
}

const ChartContainer = (props) => (
    <Card style={defaultStyle}>
        <Card.Header>{props.reportData.name}</Card.Header>
        <Card.Body>
            {props.reportData.title && <Card.Title>{props.reportData.title}</Card.Title>}
            <Card.Text>
                {props.children}
            </Card.Text>
            {/*<Button variant="primary">Go somewhere</Button>*/}
        </Card.Body>
    </Card>

// <ChartDiv>
//     <div style={{textAlign: 'left', padding: '0px 0px 0px 5px', float:'left'}}>View Dashboard</div>
//     <div onClick={(e) => props.handleClose('0')} style={{textAlign: 'right', paddingRight: '5px', float:'right'}}>X</div>
//     <ChartInnerDiv>
//     {props.children}
//     </ChartInnerDiv>
// </ChartDiv>

)

export default ChartContainer
