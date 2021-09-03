import styles from '../../styles/Posts.module.css';
import Post from './Post';

const Posts = ({ posts }) => {
  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
