---
layout: '../../../layouts/PostLayout.astro'
title: 'This is a long test title to see what happens'
pubDate: 2022-06-01
description: 'This is the first post of my new Astro blog.'
author: 'Astro Learner'
image:
    url: '/images/beach.jpg'
    alt: 'The full Astro logo.'
tags: ["astro", "blogging", "learning in public"]
---
Welcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.

## What I've accomplished

1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.

2. **Making Pages**: I then learned how to make pages by creating new `.astro` <a href="http://example.com/" target="_blank">Hello, world!</a> files and placing them in the `src/pages/` folder.

3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!

```astro
---
import BaseLayout from './BaseLayout.astro';

const { frontmatter } = Astro.props;

let title = "Bailey - " + frontmatter.title;

function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-US')
}
---
<h4>
    Test
</h4>
```
![Picture test](/images/beach.jpg)


## What's next

I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.
I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.
I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.
I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.
I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.
I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.
I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.
I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.
I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.

I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.
I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.
I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.
I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.

I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.
I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.
I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.