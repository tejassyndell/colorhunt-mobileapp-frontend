/* eslint-disable */

import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import './alert_message.css';

function alert_message() {
    const [showMessage, setShowMessage] = useState(true);
    return (
      <Container style={{ paddingTop: '2rem' ,zIndex:"90"}}>
        <CSSTransition
          in={showMessage}
          timeout={300}
          classNames="alert"
          unmountOnExit
        >
          <Alert
            variant="primary"
            dismissible
            onClose={() => setShowMessage(false)}
          >
            <Alert.Heading>
              Animated alert message
            </Alert.Heading>
            <p>
              This alert message is being transitioned in and
              out of the DOM.
            </p>
            <Button onClick={() => setShowMessage(false)}>
              Close
            </Button>
          </Alert>
        </CSSTransition>
      </Container>
    );
}

export default alert_message;