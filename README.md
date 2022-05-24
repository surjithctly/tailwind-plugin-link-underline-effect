# Tailwind Link Underline Effect

> Hover effect for text links

Install the plugin from npm:

```
$ npm install tailwind-link-underline-effect
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
    // Optional. Your plugin might not have any options at all.
    linkUnderlineEffect: {
      // ...
      YOUR_PLUGIN_CUSTOM_OPTION: true,
      // ...
    },
  },
  variants: {
    // ...
    // Optional. Your plugin might not have any variants at all.
    linkUnderlineEffect: ['responsive'],
    // ...
  },
  plugins: [
    // ...
    require('tailwind-link-underline-effect'),
    // ...
  ],
};
```

This plugin will generate following CSS:

```css
/* ... */
.example-utility-class {
  display: block;
}

.custom-utility-class {
  background-color: red;
}
/* ... */
```

## License

Tailwind Link Underline Effect is licensed under the MIT License.

## Credits

Created with [create-tailwind-plugin](https://github.com/Landish/create-tailwind-plugin).
