# Everforest Web

An unofficial website made for the [Everforest](https://github.com/sainnhe/everforest) color scheme by [Sainnhe Park](https://github.com/sainnhe).

"Everforest is a green based color scheme; it's designed to be warm and soft in order to protect developers' eyes."

## Features

- Copy colors in Hex or RGB format with the click of a button
- Dark & light palette with hard/medium/soft contrast
- Searchable list of ports

## Submitting ports

Want your port on the list or notice one missing? You are welcome to open a PR or issue with a request. If you choose to create an issue, simply provide the following:

- Title of the app your port is for
- URL pointing to the port
- Author's username
- URL pointing to the author's page

However, if you want to add it yourself, you can create a PR editing the file located at `src/data/ports.json`. Simply add a new object in the same format as the rest with your port's details. The category must be one specified in `src/data/types/ports.ts`. If you think another category should be added, please suggest it.

## Development

This project uses pnpm for package management and makes use of the Next.js framework. Running a dev server is as simple as:

```sh
pnpm install
pnpm run dev
```
