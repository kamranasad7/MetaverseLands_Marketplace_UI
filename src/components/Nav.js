import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBIcon,
    MDBPopover, MDBPopoverBody,
} from 'mdb-react-ui-kit';
//#372554
const Nav = () => {

    const userButton = () => (
        <MDBIcon fas color='white' size='lg' icon="user-alt" />
    )

    return (
        <MDBNavbar dark bgColor='primary'>
            <MDBContainer fluid>
                <MDBNavbarBrand>Virtual Shops Marketplace</MDBNavbarBrand>
                
                <MDBPopover size='lg' btnClassName='btn-floating' btnChildren={userButton()} dismiss>
                    <MDBPopoverBody>
                        User Account
                    </MDBPopoverBody>
                </MDBPopover>
            </MDBContainer>
        </MDBNavbar>
    );
}

export default Nav;