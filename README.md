### LMS Frontend

### Setup instruction

1. Clone the project

```
    git clone https://github.com/Raj5488/LMS__PROJECT
```
2. Move into the directory

```
    cd lms-fronted```

3. install dependicies

```
    npm i
```

4. run the server
```
    npm run dev
```

### Setup instructions for tailwind

[Tail wind offical instruction doc (https://tailwindcss.com/docs/installation)]

1. Install tailwindcss

```
    npm install -D tailwindcss  -D postcss -D autoprefixer  npm install tailwind -p
```

2. Create Tailwind config file
```
    npx tailwindcss init
```

3. Add file extension to tailwind config file
```
    "./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"
```

4. Add the tailwind directive at the top of the `index.css` file

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

### Adding plugins and dependencies

```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Configture auto import sort eslint

1. Install simple import sort
```
    npm i -D eslint-plugin-simple-import-sort
```

2. Add rule in `esling.cjs`

```
    'simple-import-sort/imports': 'error'
```

3. Add simple-import sort plugin in `.eslint.js`
```
    plugins: [..., 'simple-import=sort']
```
4. To enable auto import sort on file save in vscode
    
    -Open `setting.json`
    -add the following config
```
    "editorcodeActionOnSave":{
        "source.fixAll.eslint":true
    }
```