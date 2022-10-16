import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Blogs = () => {
    return (
        <div className='w-75 mx-auto mt-5'>
        <Accordion>
      <Accordion.Item className='mb-3' eventKey="0">
        <Accordion.Header>What is the purpose of react router?</Accordion.Header>
        <Accordion.Body>
        ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='mb-3' eventKey="1">
        <Accordion.Header>How dose context api works?</Accordion.Header>
        <Accordion.Body>
        React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as its names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='mb-3' eventKey="2">
        <Accordion.Header>What is useRef Hook?</Accordion.Header>
        <Accordion.Body>
        Ref means just reference, so it can be a reference to anything (DOM node, Javascript value, etc). The useRef hook returns a mutable object which doesn’t re-render the component when it’s changed. Think it like useState, but unlike useState, doesn’t trigger re-render of the component. The object that useRef returns have a current property that can hold any modifiable value.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    );
};

export default Blogs;