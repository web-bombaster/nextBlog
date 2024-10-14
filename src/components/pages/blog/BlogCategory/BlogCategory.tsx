import Image from "next/image";
import Link from "next/link";
import styles from "./blogCategory.module.scss";
import { blogPostsArr as posts } from "./blogPostsArr";

interface BlogPost {
	id: string;
	title: string;
	descr: string;
	link: string;
	img: string;
}

interface BlogPosts {
	items: BlogPost[];
}

const fetchData = async (): Promise<BlogPosts> => {
	return fetch("./blogPostsArr.js", {
		method: "GET",
		headers: {
			//   'X-API-KEY': '07ca675a-db71-4e5b-8119-5618275b2fab',
			"Content-Type": "application/json",
		},
	}).then((response) => response.json());
};

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

			{/* {posts.map((postItem) => (
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
			))} */}
		</div>
	);
};

export default BlogCategory;
