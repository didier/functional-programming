# As a parking spot's customer price grows, does its convenience increase?

By [Didier Catz](https://didiercatz.com)

For this project, a few assumptions will be made. _Convenience_ in this case means how convenient a spot is for the customer — e.g. is it cheap? Are there enough parking spots? Is it easily accessible? _How much comfort does it bring to the customer?_

![About this project](https://raw.githubusercontent.com/didiercatz/functional-programming/main/src/assets/images/about-this-project.svg)

## An interactive data visualisation on Dutch parking data.

In collaboration with the Volkskrant, a Dutch news outlet focused on objective and neutral-standpoint news, I will be creating an interactive datavisualisation regarding parking in the city. I want to measure and define convenience and see if a parking spot's cost positively or negatively influences this convenience.

Functional Programming subject of [@cmda-tt](https://github.com/cmda-tt)

### Interesting Variables

- Opening times — [Open Data Parkereen: Tijdvak](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TIJDVAK/ixf8-gtwq)

  - StartTimeTimeFrame
  - EndTimeTimeFrame

- Electric Vehicle charging spots

- Hourly cost — [Open Data Parkeren: Tariefdeel](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFDEEL/534e-5vdg)

  - StartDateFarePart
  - StartDurationFarePart
  - EndDurationFarePart
  - AmountFarePart
  - StepSizeFarePart

- For how long you can park

### Interesting questions

- If it's cheap, for how long can you park there?
- Which electric charging spots charge the most per hour?

---

![Diving into the code](https://raw.githubusercontent.com/didiercatz/functional-programming/main/src/assets/images/diving-into-the-code.svg)


## Getting started with this repo

This project assumed you have a valid and stable installation of [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/).

### Cloning the repo

```sh
git clone https://github.com/didiercatz/functional-programming.git
```

### Alternatively, if you just want the files:

```sh
npx degit didiercatz/functional-programming
```

### Install packages

```sh
yarn # or npm install
```

### Run the dev environment

Opens a development server at [`http://localhost:1234`](http://localhost:1234)

```sh
yarn dev # or npm run dev
```

## Building a static export

Builds and bundles the files into a static folder at `./dist`

```sh
yarn build # or npm run build
```

## Sources

<!-- ### Data -->

- Open Data Parkeren — Tariefdeel. (n.d.). Open Data RDW. Retrieved October 28, 2020, from https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFDEEL/534e-5vdg
- Open Data RDW — Datasets. (n.d.). Open Data RDW. Retrieved October 27, 2020, from https://opendata.rdw.nl/browse
<!-- ### Knowledge -->

## License

[MIT](https://github.com/didiercatz/functional-programming/blob/main/LICENSE)

---

💡 _In a few weeks time, this README will consist of a short summary and getting-started guide of this project. If you'd like to get a more comprehensive writeup of what this all entains, please refer to the [wiki](https://github.com/didiercatz/functional-programming/wiki). For now, enjoy this GIF. *With a hard 'G'*._

<img src="https://media.giphy.com/media/Wsju5zAb5kcOfxJV9i/giphy.gif" alt="programming">
