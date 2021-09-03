import styles from '../../styles/Post.module.css';

const Post = ({ post }) => {
  return (
    <div className={styles.post}>
      <h4>{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h4>
      <h5>{post.body}</h5>
    </div>
  );
};

export default Post;
