## Examples of improced DX

1. Static HTML pages

-   an editor can take json structure from Storybook edit it and paste it back to the page and immidietly see al the changes and newly generated html that can be paseted to the CMS

2. Shared templates

-

# File naming conventions

-   Whole project uses typescript, both for functionaltiy and for templating
-   that means we have to be particlary carfull not to include any template files into th e bundle
-   for that we use the following naming convention
    -   file.template.tsx -> file that contains only the HTML and it shouldnt be included in the bundle (@todo: Add custom eslint rule for this)
    -   file.types.tsx -> file that contains only the types for both the component and the template. It will all be stripped out in the build step so it doesnt matter if it is included in the bundle
    -   file.data.ts -> file that contains only the data for the component and it should under no circumstances be included in the bundle (@todo: Add custom eslint rule for this)
    -   file.listing.tsx -> file that contains only the listing for the component and it should not be used as component but only as a listing of the component inside a story (@todo: Add custom eslint rule for this)
    -   file.stories.tsx -> file that contains only the Storybook stories for the component.
    -   file.ts or file.js -> file that contains the functionaltiy for the component and it will be included in the bundle
    -   file.scss -> file that contains the styling for the component and it will be included in the bundle

[KitaJS doc][https://github.com/kitajs/html/tree/master/packages/html#readme]

# Why & when web components

-   deployment proccess for js (and css) changes is much much easier, faster and more reliable than for html - client prefers it
    -   we can "hide" bunch of html inside a client so event the changes to html can be done in same, fast fashion
-   when we want to mix data/html from backaned with data/html from frontend

# Why & when React

-   whenever there is a big standalone component that requires bunch of interactivty and doesn't neccesarily need to be optimized for SEO
-   unfortunatly we cant use any form of routing so every usecase that requires it is off limits
