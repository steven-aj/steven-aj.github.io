// export async function load({ parent, params }) {
// 	const meta = await parent();
// 	console.log(params);
// 	const post = await import(`$markdown/blog/${params.category}`);
// 	const content = post.default;

// 	return {
// 		meta: {
// 			...post.metadata,
// 			author: meta.author
// 		},
// 		content,
// 	};
// }