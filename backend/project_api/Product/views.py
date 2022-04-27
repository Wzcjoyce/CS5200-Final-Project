from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db import connection
import pymysql
import json
# Create your views here.

@api_view(['GET'])
def showProduct(request):
    try:
        cursor = connection.cursor()
        cursor.execute('select * from Product')
        rows = cursor.fetchall()
        cursor.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Product_id'] = row[0]
            temp['Date'] = row[1]
            temp['Website'] = row[2]
            temp['isDemo'] = row[3]
            temp['Description'] = row[4]
            temp['Provider_id'] = row[5]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)


@api_view(['POST'])
def deleteProduct(request):
    try:
        request = json.loads(request.body.decode('utf-8'))
        id = request['productId']
        cursor = connection.cursor()
        cursor.callproc('deleteProduct', [id, ])
        cursor.close()
        cursor2 = connection.cursor()
        cursor2.execute('select * from Product')
        rows = cursor2.fetchall()
        cursor2.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Product_id'] = row[0]
            temp['Date'] = row[1]
            temp['Website'] = row[2]
            temp['isDemo'] = row[3]
            temp['Description'] = row[4]
            temp['Provider_id'] = row[5]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['POST'])
def addProduct(request):
    try:
        request = json.loads(request.body.decode('utf-8'))
        date = request['Date']
        website = request['Website']
        isDemo = request['isDemo']
        desc = request['Description']
        providerId = request['providerId']
        cursor = connection.cursor()
        cursor.callproc('addProduct', (date, website, isDemo, desc, providerId))
        cursor.close()
        cursor2 = connection.cursor()
        cursor2.execute('select * from Product')
        rows = cursor2.fetchall()
        cursor2.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Product_id'] = row[0]
            temp['Date'] = row[1]
            temp['Website'] = row[2]
            temp['isDemo'] = row[3]
            temp['Description'] = row[4]
            temp['Provider_id'] = row[5]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['POST'])
def modifyProduct(request):
    try:
        request = json.loads(request.body.decode('utf-8'))
        id = request['productId']
        date =request['Date']
        website = request['Website']
        isDemo = request['isDemo']
        desc = request['Description']
        providerId = request['providerId']
        cursor = connection.cursor()
        cursor.callproc('modifyProduct', (id, date, website, isDemo, desc, providerId))
        cursor.close()
        cursor2 = connection.cursor()
        cursor2.execute('select * from Product')
        rows = cursor2.fetchall()
        cursor2.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Product_id'] = row[0]
            temp['Date'] = row[1]
            temp['Website'] = row[2]
            temp['isDemo'] = row[3]
            temp['Description'] = row[4]
            temp['Provider_id'] = row[5]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['POST'])
def getProductById(request):
    try:
        request = json.loads(request.body.decode('utf-8'))
        id = request['productId']
        cursor = connection.cursor()
        cursor.execute('select * from Product where Product.Product_id = ' + id)
        rows = cursor.fetchall()
        cursor.close()
        list(rows)
        data = []
        for row in rows:
            temp = {}
            temp['Product_id'] = row[0]
            temp['Date'] = row[1]
            temp['Website'] = row[2]
            temp['isDemo'] = row[3]
            temp['Description'] = row[4]
            temp['Provider_id'] = row[5]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)