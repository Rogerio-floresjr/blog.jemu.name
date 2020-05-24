---
title: Shortcode Showcase
slug: shortcodes
type: page
draft: false
katex: false
math: false
toc: true
---

These shortcodes live in a theme-component: [jemus42/jemsugo](https://github.com/jemus42/jemsugo).  
This page exists as a preview and mainly for debugging purposes.

## An extra content box: `addendum`

If I found a solution after the fact:

{{< addendum title="An Addendum" >}}
I found out a relevant thing, so here's a relevant thing
{{< /addendum >}}

## Blockquotes: `blockquote`

{{< blockquote author="Terry Pratchett" link="" title="Going Postal" >}}
Sometimes things smash so bad it’s better to leave it alone than try to pick up the pieces. I mean, where would you start?
{{< /blockquote >}}

## Code with caption in figure tag: `codecaption`

Some R code:

{{< codecaption lang="r" caption="A code caption" >}}
library(ggplot2)

ggplot(iris, aes(x = Sepal.Width, y = Sepal.Length)) +
  geom_point(size = 2)
{{< /codecaption >}}

Some BASH stuff

{{< codecaption lang="bash" caption="Arbitrary languages" >}}
export WURST=wasser
echo $WURST
{{< /codecaption >}}

## Maintenance & Borked: `maintenance`

If a post is bork:

{{< maintenance >}}

Styling relies on `addendum`.

No `.Inner` content for now, i.e. it's just `{{</* maintenance */>}}`

## Figures with responsive images: `picturefig`

To be implemented

## Package decoration: `pkg`

Have you heard about {{< pkg "ggplot2" >}}?  
Or {{< pkg "fansi" >}}? Or {{< pkg "colorspace" >}}?

I have this package called {{< pkg "tRakt" >}} and it's not on CRAN.

## Expandable content: `summary`

```go
{{</* summary "Click to expand" */>}}
This is the secret content *they* don't want you to know.
{{</* /summary */>}}
```

{{< summary "Click to expand" >}}
This is the secret content *they* don't want you to know.
{{< /summary >}}

## Videos with caption: `videofig`

`{{</* videofig mp4="my-file.mp4" loop=true autoplay=true alt="" caption="" */>}}`

## Wikipedia links: `wp`

`{{</* wp tag="Go programming language" title="Go" */>}}`

Hugo is written in {{< wp tag="Go programming language" title="Go" >}}.

## Arbitrary figure-ization: `wrapfigure`
