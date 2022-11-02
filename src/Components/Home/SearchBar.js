import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const SearchBar = () => {
  return (
    <div className="Form_area">
      <Form>
        <Row>
          <Col>
            <Form.Control size="lg" type="text" placeholder="Search" />
          </Col>
          <Col></Col>
        
        </Row>
      </Form>
      <br></br>
    </div>
  );
};
