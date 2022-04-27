### Requirement

Check if Python 3 and pip is already installed

### Set up virtual environment

Install pipenv

```sh
$ pip3 install pipenv
```


### Run the server!

Activate the virtual environment

```sh
$ pipenv shell
```
Install denpendencies

```sh
$ pipenv install
```

Run server

```sh
$ python manage.py runserver
```

### Customer POST API example

data format  

```sh
type: "POST",
        url: "http://127.0.0.1:8000/api/customer/add/",
        data: {
            firstName: 'django',
            lastName: 'Djangot',
            Company: 'Python',
            Email: 'qq@qq.com',
            Description: 'Desc_test_',
            ideaPrice: 100000,
            manager_id: 2
        },
```

return type  

![image](https://user-images.githubusercontent.com/87740290/161893513-8becf534-4de2-40b2-947a-a6354bb1debf.png)

### Coding

One IDE that works with Django well is VSCode, or you can choose any IDE at your preference.

[Django coding tutorial](https://docs.djangoproject.com/zh-hans/2.1/)
[Django Rest Framework tutorial](https://www.django-rest-framework.org/tutorial/quickstart/)
