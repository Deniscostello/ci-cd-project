import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewUser.module.css'

function NewUser(props) {
  const userIdInputRef = useRef();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredUserId = userIdInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const userData = {
      userId: enteredUserId,
      name: enteredName,
      email: enteredEmail,
    };

    props.onAddUser(userData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='userId'>User Id </label>
          <input type='text' required id='userId' ref={userIdInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='name'>Name</label>
          <input type='text' required id='name' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Gmail account </label>
          <input type='text' required id='email' ref={emailInputRef} />
        </div>
        
        <div className={classes.actions}>
          <button>Add User</button>
        </div>
      </form>
    </Card>
  );
}

export default NewUser;
