import React, {Fragment} from 'react';
import Form from './Form';
import Sales from './Sales';

export default function Dashboard() {
  return (
    <div>
      <Fragment>
          <Form/>
          <Sales/>
      </Fragment>
    </div>
  )
}
