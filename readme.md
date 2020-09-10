

## Requirements for running the app

> - Nodejs
> - MongoDB

## Setup

> Open a shell inside the app folder and run - 

```bash
npm install
```

> this will install all the dependencies and put them in **node_modules** folder.



## Environment Variable Setup

> The development environment variables are located at **"./environment/development.env"** . To make production variables create a **production.env** in the same location and use the format from **development.env** file.



## Start the app in development mode

```bash
npm run dev
```



## Start the app in production mode

```bash
npm start
```



---





##  Configured Routes

### /academic_setting

> **GET :**  To find a single setting by ID send a GET request with the setting id in the URL like 
>
> ```
> /academic_setting/5f59f759109c3438f4506032
> ```



> **POST:**  To add a new academic setting send a POST request with the following JSON in the request body
>
> ```json
> {
>  "type":"any type you want",
>  "description":"any description you want"
> }
> ```
> to this route
> ```
> /academic_setting/
> ```



!!!!  The settings ID can be found  after the POST request . Examine the JSON response to find "_id".