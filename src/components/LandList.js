import React, { useState } from 'react';
import Map from './Map';

import {
    MDBCol,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow,
    MDBTabsContent,
    MDBTabsPane,
    MDBRipple,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
} from 'mdb-react-ui-kit';

const LandList = ({ mallConfig }) => {
    
    const [activeFloor, setFloor] = useState(mallConfig.floors[0]?.floorNo);
    const [modal, setModal] = useState(false);
    const [selectedShop, setShop] = useState()

    const openShop = (shop) => {
        setModal(true)
        setShop(shop);
    }

    return (
        <>
            <MDBRow>
                <MDBCol size={3}>
                    <MDBListGroup light>
                        {mallConfig.floors.map(floor => {
                            return (
                                <MDBRipple key={floor.floorNo}>
                                    <MDBListGroupItem
                                        tag='button'
                                        type='button'
                                        style={{ textAlign: "center" }}
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
                                    <Map floorConfig={floor} openShop={openShop} />
                                </MDBTabsPane>
                            )
                        })}
                    </MDBTabsContent>
                </MDBCol>
            </MDBRow>

            <MDBModal show={modal} setShow={setModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Shop No. {selectedShop?.shopNo}</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={() => setModal(false)}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>...</MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={() => setModal(false)}>
                                Close
                            </MDBBtn>
                            <MDBBtn>Buy {selectedShop?.price} ETH</MDBBtn>
                            <MDBBtn>Rent {selectedShop?.rentRate} ETH</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>


        </>
    );
}

export default LandList;