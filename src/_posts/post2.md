---
title: "npm init new-thing"
excerpt: "I made mention of the next most important thing. Inside that was a list of steps to accomplish said most important thing. One of those was 'setup new project'. That one line has a lot of layered decision making in it."
date: "2022-01-01"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

## Seting up a new project

In the last post, I made mention of the next most important thing. Inside that was a list of steps to accomplish said most important thing.

One of those was 'setup new project'. Well... that one line has a lot of layered decision making in it.

Today we are gonna talk about what requirements there were for my new project and then how you can setup a similar project for yourself.

## What this post isn't

There is a longer, more in depth post that would explain why I selected `Next` over `Gatsby` or `Remix` or whatever other framework just came out when you are reading this. There is a similar one for why I picked `Chakra` instead of `tailwind`, or `theme ui`, or just `styled-compononets` or `emotion` or whatever other styling solution you like better. Thats not what today's article is about.

Todays article is about clearly stating the parameters for what I need my project to do and how I can most quickly move from NOTHING to having it up and running.

## Requirements

For my new project, I need tools that will support the full range of initiatives outlined in the initial post. Currently the various initiatives are being handled across a handful of spaces. See below.

![Current personal initiatives by platform](/assets/blog/1/2.jpg)

I do not want to split all of these initiatives off into there own silos unless one or more of them grow to such a substantial size that it makes more sense.

With all that said, here is a short-ish list of desired features/tools for the new project.

<style>
  ul { list-style: disc; }
  a { text-decoration: underline; }
</style>

- Next
- Typescript
- Chakra
- Blog
- MDX

## Why _insert tool here_?

_Next_  
React framework of choice. Pretty excited to dive in a little deeper with the release of v12. I've been a longtime Gatsby user but run into some issues / excited to learn something new.

_Typescript_  
This is largely aspirational. I know I should do it. I've worked in TS before. I know I will be grateful in the long run, and I should just deal with the friction it can cause. Thankfully I feel motivated enough at the moment to pick a starter with it so I don't have to add it to an existing project down the line.

_Chakra_  
My favorite flavor of `css-in-js` at the moment. It functions at a level of abstractiont that makes sense with myu brain. I got a week into trying to build my own toolchain on top of the remains of `styled-system`'s incredible props api and `styled-components` styled patterns before realizing, that is basically what Chakra offers + handful of other goodies.

_Blog_  
As you can tell (because you are reading this), I would like to share my journey into madness of building all this miscelaney online. I would really like to avoid re-inventing the blogging engine wheel. Unless, at some point I decide that's a worthwhile sidequest. But for now, not the most important thing.

_MDX_  
If I'm blogging I'm sure its gonna have some amount of dev content. Would be really great if I didn't have to have a whole sandbox/codepen flow to drop in examples or just make a post look cooler.

![Next | Chakra |  Typescript | Blog | MDX](/assets/blog/2/stack-1-All.jpg)

## Next Starters and Non-Starters

Next offers a whole bunch of [starters][examples] to get you up and running quickly. For me and my particular needs there isn't exactly a perfect fit. There are starters with any one of these tools. Even two or three. But not all of them.

<!-- ![Typescript examples](/assets/blog/2/stack-2-TS.jpg) -->

### Typescript

Obviously there are demos of [Next w/ Typescript][example-ts] but, we can get more then _just typescript_. Most of the other feature sets include an option with and w/o TS.

<!-- ![Chakra examples](/assets/blog/2/stack-3-chakra.jpg) -->

### w/ Chakra

There are starters [with Chakra][example-chakra] and [with Chakra + TS][example-chakra-ts]. That's awesome, I would love to dive into those. But, if I'm being honest with myself, it's not the most needed feature. At least not now. I can write vanilla CSS or some other flavor of CSS-in-JS that another starter comes with.

### Blog

There are blog examples both [with][example-blog-ts] and [w/o][example-blog] typescript. Looks like it's leveraging Tailwind for styling, but that's not a show stopper for now. There is also an interesting [blog starter][example-blog-nextra] that uses something called [`nextra`][nextra]? This seems like an intersting tool, but definitely a sidequest we aren't going on for the time being. This one feels like the most obvious choice. It's got logic baked in for generating post pages from markdown and sample tempaltes for both the article list and individual page. This is our winner.

<!-- ![Blog examples](/assets/blog/2/stack-4-blog.jpg) -->

### MDX

There is an example here showing how to get [`MDX`][mdx] to render to the page in the context of Next. But the [starter][mdx-starter] itself is pretty barebones. I think I would be better off implementing this as an additional feature to an existing starter. There also seems like good [documentation][mdx-docs] as well as a [blog post][mdx-blog-post] about how to get MDX working inside of Next.

<!-- ![MDX examples](/assets/blog/2/stack-5-mdx.jpg) -->

## Moving forward

Now that I've got a starter selected _(blog with Typescript)_, I just need to clone it and add both yesterday and today's posts.

I guess if you are reading this, I figured that out. Hooray for you Nathan. So what's next? I think the next thing we need to do is get a homepage that works for us. But, that's for next time.

See ya'll then  
—x

[examples]: https://nextjs.org/examples
[example-ts]: https://github.com/vercel/next.js/tree/canary/examples/with-typescript
[example-chakra]: https://github.com/vercel/next.js/tree/canary/examples/with-chakra-ui
[example-chakra-ts]: https://github.com/vercel/next.js/tree/canary/examples/with-chakra-ui-typescript
[example-blog-ts]: https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript
[example-blog]: https://github.com/vercel/next.js/tree/canary/examples/blog-starter
[example-blog-nextra]: https://github.com/vercel/next.js/tree/canary/examples/blog
[nextra]: https://github.com/vercel/next.js/tree/canary/examples/blog

[mdx-docs]: https://nextjs.org/docs/advanced-features/using-mdx]
[mdx-blog-post]: https://nextjs.org/blog/markdown
[mdx]: https://mdxjs.com/
[mdx-starter]: https://github.com/vercel/next.js/tree/canary/examples/with-mdx
