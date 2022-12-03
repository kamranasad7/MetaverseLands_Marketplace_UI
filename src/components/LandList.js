import React, { useState } from 'react';
import {
    MDBCol,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow,
    MDBTabsContent,
    MDBTabsPane,
    MDBRipple
} from 'mdb-react-ui-kit';
import Map from './Map';

const LandList = ({ mallConfig }) => {
    const [activeFloor, setFloor] = useState(mallConfig.floors[0]?.floorNo);

    return (
        <MDBRow>
            <MDBCol size={3}>
                <MDBListGroup light>
                    {mallConfig.floors.map(floor => {
                        return (
                            <MDBRipple key={floor.floorNo}>
                                <MDBListGroupItem 
                                    tag='button' 
                                    type='button' 
                                    style={{textAlign: "center"}} 
                                    action noBorders 
                                    active={activeFloor === floor.floorNo} 
                                    onClick={() => setFloor(floor.floorNo)}
                                    className='px-3'
                                >
                                    Floor {floor.floorNo}
                                </MDBListGroupItem>
                            </MDBRipple>
                        )
                    })}
                </MDBListGroup>
            </MDBCol>

            <MDBCol size={9}>
                <MDBTabsContent>
                    {mallConfig.floors.map(floor => {
                        return (
                            <MDBTabsPane key={floor.floorNo} show={activeFloor === floor.floorNo}>
                                <Map floorConfig={floor} />
                            </MDBTabsPane>
                        )
                    })}
                </MDBTabsContent>
            </MDBCol>
        </MDBRow>
    );
}

export default LandList;