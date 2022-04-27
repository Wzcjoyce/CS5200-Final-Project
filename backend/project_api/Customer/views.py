from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db import connection
import pymysql
import json
# Create your views here.

@api_view(['GET'])
def maxCustomer(request):
    try:
        cursor = connection.cursor()
        cursor.execute('select * from Customer where ideaPrice=(select max(ideaPrice) from Customer)')
        rows = cursor.fetchall()
        cursor.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Customer_id'] = row[0]
            temp['firstName'] = row[1]
            temp['lastName'] = row[2]
            temp['Company'] = row[3]
            temp['Email'] = row[4]
            temp['Description'] = row[5]
            temp['idealPrice'] = row[6]
            temp['Manager_id'] = row[7]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['GET'])
def showCustomer(request):
    try:
        cursor = connection.cursor()
        cursor.execute('select * from Customer')
        rows = cursor.fetchall()
        cursor.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Customer_id'] = row[0]
            temp['firstName'] = row[1]
            temp['lastName'] = row[2]
            temp['Company'] = row[3]
            temp['Email'] = row[4]
            temp['Description'] = row[5]
            temp['idealPrice'] = row[6]
            temp['Manager_id'] = row[7]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['POST'])
def addCustomer(request):
    try:
        request = json.loads(request.body.decode('utf-8'))
        first_name = request['firstName']
        last_name = request['lastName']
        company = request['Company']
        email = request['Email']
        Description = request['Description']
        ideal_price = request['ideaPrice']
        manager_id = request['manager_id']
        cursor = connection.cursor()
        cursor.callproc('addCustomer', (first_name, last_name, company, email, Description, ideal_price, manager_id))
        cursor.close()
        cursor2 = connection.cursor()
        cursor2.execute('select * from Customer')
        rows = cursor2.fetchall()
        cursor2.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Customer_id'] = row[0]
            temp['firstName'] = row[1]
            temp['lastName'] = row[2]
            temp['Company'] = row[3]
            temp['Email'] = row[4]
            temp['Description'] = row[5]
            temp['idealPrice'] = row[6]
            temp['Manager_id'] = row[7]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['POST'])
def deleteCustomer(request):
    try:
        request = json.loads(request.body.decode('utf-8'))
        id = request['customerId']
        cursor = connection.cursor()
        cursor.callproc('deleteCustomer', [id, ])
        cursor.close()
        cursor2 = connection.cursor()
        cursor2.execute('select * from Customer')
        rows = cursor2.fetchall()
        cursor2.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Customer_id'] = row[0]
            temp['firstName'] = row[1]
            temp['lastName'] = row[2]
            temp['Company'] = row[3]
            temp['Email'] = row[4]
            temp['Description'] = row[5]
            temp['idealPrice'] = row[6]
            temp['Manager_id'] = row[7]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(rows)

@api_view(['POST'])
def modifyCustomer(request):
    try:
        request = json.loads(request.body.decode('utf-8'))
        id = request['customerId']
        first_name = request['firstName']
        last_name = request['lastName']
        company = request['Company']
        email = request['Email']
        Description = request['Description']
        ideal_price = request['ideaPrice']
        manager_id = request['manager_id']
        cursor = connection.cursor()
        cursor.callproc('modifyCustomer', (id, first_name, last_name, company, email, Description, ideal_price, manager_id))
        cursor.close()
        cursor2 = connection.cursor()
        cursor2.execute('select * from Customer')
        rows = cursor2.fetchall()
        cursor2.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Customer_id'] = row[0]
            temp['firstName'] = row[1]
            temp['lastName'] = row[2]
            temp['Company'] = row[3]
            temp['Email'] = row[4]
            temp['Description'] = row[5]
            temp['idealPrice'] = row[6]
            temp['Manager_id'] = row[7]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['POST'])
def getById(request):
    try:
        body = json.loads(request.body.decode('utf-8'))
        id = body['customerId']
        cursor = connection.cursor()
        cursor.execute(f'select * from Customer where Customer.Customer_id = {id}')
        rows = cursor.fetchall()
        cursor.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Customer_id'] = row[0]
            temp['firstName'] = row[1]
            temp['lastName'] = row[2]
            temp['Company'] = row[3]
            temp['Email'] = row[4]
            temp['Description'] = row[5]
            temp['idealPrice'] = row[6]
            temp['Manager_id'] = row[7]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)