export function filterPostsByTag(posts, tag) {
    let results = []

    posts.forEach((post) => {
        post.frontmatter.tags.forEach((tagElement) => {
            if(tagElement == tag) {
                results.push(post);
            }
        });
    })

    return results;
}