import Card from '../ui/Card';
import classes from './ImageItem.module.css';
import { useRouter } from 'next/router';

function ImageItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.imageId);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default ImageItem;
