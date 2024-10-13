import Image from "next/image";
import Link from "next/link";
import styles from "./blogCategory.module.scss";
import { blogPostsArr as posts } from "./blogPostsArr";



const BlogCategory = () => {
	return (
		<div className={styles.list}>
			{posts.map((postItem) => (
				<Link
					key={postItem.id}
					href={postItem.link}
					className={styles.item}
				>
					<Image
						className={styles.img}
						src={postItem.img}
						width="780"
						height="440"
						alt=""
					/>
					<h2 className={styles.title}>{postItem.title}</h2>
					<p className={styles.descr}>{postItem.descr}</p>
					<button className={styles.more}>Подробнее</button>
				</Link>
			))}

		</div>
	);
};
export default BlogCategory;
