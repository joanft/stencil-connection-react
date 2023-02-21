# Stencil example connection
This repository shows a fast-forward, easy example connection between Stencil and React. 
Also, you will find an example for Next.JS that is **not** working due to Next limitations, but it is an excellent example of how stencil works.
# Installation
First, install all dependencies
`pnpm install`
Build Stencil package
`pnpm -F components build`
Start React dev server:
`pnpm -F app dev`

***If you want to test Next.JS dev server:***
`pnpm -F next-app dev`
*(note: it will show an hydrate error)*

# Detailed explanations
To get detailed explanations of what is going on on each folder, read the readme file inside.

# Next.JS hydrate error
You will see an hydrate error on the Next.JS project because Stencil needs to be loaded and triggered before React renders its things. Unfortunately this is impossible, so an integration of Stencil + Next.JS is not recommended.