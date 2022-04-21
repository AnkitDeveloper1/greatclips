import React from "react";
import { Modal, Button } from 'react-bootstrap';

export default function Example(props) {
    const { modelTitle, modelContent, buttonLabel, handleclickevent, show, closeModel, data, handleRoles, selectedRoles } = props;
    
    return (
      <>
        <Modal show={show} onHide={closeModel}>
          <Modal.Header closeButton>
            <Modal.Title>{modelTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modelContent}
            {Array.isArray(data)?<>
              {data.map((value, index) => (
                <table className="table table-bordered" key={index}>
                  <tbody>
                    {Object.keys(value).map((v, i) => (
                      <tr key={i}>
                        <th className="bg-success"><label style={{ textTransform: 'capitalize'}}><input type="checkbox" onChange={(e) => handleRoles(e, v, "all")} value={v} /> {v}</label></th>
                        {Object.values(value[v]).map((va) => (
                          <td key={va}><label style={{ textTransform: 'capitalize'}}><input type="checkbox" onChange={(e) => handleRoles(e, v, va)} value={va} /> {va}</label></td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}
            </>:''}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleclickevent}>
              {buttonLabel}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

/*import React, { Component } from "react";

class CustomModel extends Component {

    render() {
        const { modelName, modelTitle, modelContent, buttonLabel, handleclickevent } = this.props;
        return (
            <div className="modal fade" id={modelName} tabIndex="-1" aria-labelledby={modelName+"Label"} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={modelName+"Label"}>{modelTitle}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {modelContent}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleclickevent}>{buttonLabel}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomModel;
*/