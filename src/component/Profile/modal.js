import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function InfoModal(props) {
    const profile = props.profile;
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow} style={{ backgroundColor: "#0a7496", borderRadius: "25PX" }}>
                More Info...
          </button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header >
                    <Modal.Title style={{ color: "#eb7b28", textAlign:"center" }}>{profile.name} <br>
                    </br> 
                    <img
        src={profile.img}
        alt=''
        style={{
          width: "35%",
          height: "35%",
          objectFit: "scale-down",
          borderRadius: "250PX 250PX 250PX 250PX",
        }}
      /></Modal.Title>
                </Modal.Header>
                <Modal.Body> <strong style={{color:"#eb7b28"}}>ROLE:</strong> <br /> <h4>{profile.job_title}</h4></Modal.Body>
                <Modal.Body> <strong style={{color:"#eb7b28"}}>LOCATION:</strong><br /> <h4>{profile.location}</h4></Modal.Body>
                <Modal.Body> <strong style={{color:"#eb7b28"}}>BIO:</strong> <br /><h4>{profile.bio}</h4></Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="flat" style={{backgroundColor: "#0a7496", color:"white" }} >
                        Close
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default InfoModal