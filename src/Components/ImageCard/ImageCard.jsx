import css from './ImageCard.module.css';

const ImageCard = ({ item: { urls, description } }) => {
  return (
    <div>
      <img className={css.image} src={urls.small} alt={description} />
    </div>
  );
};

export default ImageCard;
