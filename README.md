## Live Link : https://x-education-five.vercel.app/

### Technology :

TypeScript,node.js,express.js

### Database:

mongoDb

### Libray:

mongoose

## Api Endpoint :

# create user

```
https://x-education-five.vercel.app/api/register
{
    "email": "omit386@gmail.com",
    "password": "pass435word"
}

```

# admin access:

email: sabbir386@gmail.com
password : password

# login user

```
https://x-education-five.vercel.app/api/login
smaple data:
{
    "email": "sabbir386@gmail.com",
    "password": "password"
}

```

# login response

```
{
    "success": true,
    "message": "Login Successfull!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhYmJpcjM4NkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDMwNjIyMDcsImV4cCI6MTcwMzA2NTgwN30.bPYn_-9V2ohpwG_qaVPDZXdZNMZUnwI4f8SSYq3gF_g"
}
```

```
for admin route token value should pass in header as Authorization key value

```

# create course

```
https://x-education-five.vercel.app/api/course  (admin route)

sample data:
{
    "name": "Web Development",
    "description": "An Introduction to Web Development.",
    "price": 5000,
    "duration": "8 weeks",
    "level": "Beginner",
    "topics": [
        "HTML",
        "CSS",
        "JavaScript",
        "Vue.js",
        "Node.js",
        "Express.js",
        "RESTful APIs"
    ],
    "schedule": {
        "startDate": "2023-02-15",
        "endDate": "2023-04-10",
        "classDays": [
            "Monday",
            "Wednesday",
            "Friday"
        ],
        "classTime": "18:00 - 20:00"
    }
}
```

# get all course

```
https://x-education-five.vercel.app/api/course


```

# get specific course

```
https://x-education-five.vercel.app/api/course/65813fabc5de05376d09cec6


```

# update specific course

```
https://x-education-five.vercel.app/api/course/65813fabc5de05376d09cec6 (admin route)

sample data:
{
    "price":45546456
}

```

# delete specific course

```
https://x-education-five.vercel.app/api/course/65813fabc5de05376d09cec6 (admin route)


```
