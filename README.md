# rest-doc
 
Rest Docs is a full-stack MERN (MongoDB, Express, ReactJS, NodeJS) application, which automatically generates prepopulated forms based on saved user data. The interfaces is built using Material UI. 

## Heroku Application

See deployed application at [reactautofill.herokuapp.com](https://reactautofill.herokuapp.com/)

### Register User

The application implements a custom user registration and session-based login system. During registration user account is created and saved to a deicated MongoDB table. The password is hashed with Bcrypt. On login, a session token is created and saved to active session table. On logout, the session token is destroyed and session is deactivated. 
![alt text](https://github.com/MSwoboda/rest-doc/blob/master/imgs/register.gif)

### Data Entry

Enter your data into the database.

![alt text](https://github.com/MSwoboda/rest-doc/blob/master/imgs/data.gif)


### Signature 

Draw you signature. Every document requiring signature will be signed and dated.

![alt text](https://github.com/MSwoboda/rest-doc/blob/master/imgs/sign.gif)


### Get Docs

You're now ready to generate your documents. Search your documents by keyword or document. Click Download to get all documents in queue or select them individually.

![alt text](https://github.com/MSwoboda/rest-doc/blob/master/imgs/gen.gif)


### Local Installation

Install packages. NPM script will automatically install both server and client packages.

```
npm i
```

#### Bcrypt Node Compatibility Error

As per bcrypt documentation, node-gyp only works with stable/released versions of node. Since the bcrypt module uses node-gyp to build and install, you'll need a stable version of node to use bcrypt. If you do not, you'll likely see an error that starts with:

```
gyp ERR! stack Error: "pre" versions of node cannot be installed, use the --nodedir flag instead

```

### Start Server and Client

NPM script initializes server on PORT:3001 and React client on PORT:3000. 

```
npm start
```





### 
