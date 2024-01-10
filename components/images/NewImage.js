import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewImage.module.css';

function NewImage(props) {
  const titleInputRef = useRef();
  const urlInputRef = useRef();
  const imageIdInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredUrl = urlInputRef.current.value;
    const enteredImageId = imageIdInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const imageData = {
      title: enteredTitle,
      image: enteredUrl,
      imageId: enteredImageId,
      description: enteredDescription,
    };

    props.onAddImage(imageData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Title </label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Image URL</label>
          <input type='url' required id='image' ref={urlInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='imageId'>Title </label>
          <input type='imageId' required id='imageId' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <input type='text' required id='description' ref={imageIdInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Image</button>
        </div>
      </form>
    </Card>
  );
}

export default NewImage;
