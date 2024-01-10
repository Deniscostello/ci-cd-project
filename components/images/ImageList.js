import ImageItem from './ImageItem';
import classes from './ImageList.module.css';

function ImageList(props) {
  return (
    <ul className={classes.list}>
      {props.images.map((image) => (
        <ImageItem
          key={image.imageId}
          imageId={image.imageId}
          image={image.url}
          title={image.title}
          description={image.description}
        />
      ))}
    </ul>
  );
}

export default ImageList;
