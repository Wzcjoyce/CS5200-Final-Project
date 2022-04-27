from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db import connection
import pymysql
import json
# Create your views here.

@api_view(['GET'])
def completeOrder(request):
    try:
        cursor = connection.cursor()
        cursor.execute('select * from Orders where isComplete=true')
        rows = cursor.fetchall()
        cursor.close()
        data = []
        for row in rows:
            temp = {}
            temp['Order_id'] = row[0]
            temp['Price'] = row[1]
            temp['Time'] = row[2]
            temp['isComplete'] = row[3]
            temp['Type'] = row[4]
            temp['Platform'] = row[5]
            temp['machineLearning'] = row[6]
            temp['dataMining'] = row[7]
            temp['Maintenance'] = row[8]
            temp['SaaS'] = row[9]
            temp['Backstage'] = row[10]
            temp['Provider_id'] = row[11]
            temp['Manager_id'] = row[12]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['GET'])
def notCompleteOrder(request):
    try:
        cursor = connection.cursor()
        cursor.execute('select * from Orders where isComplete=false')
        rows = cursor.fetchall()
        cursor.close()
        data = []
        for row in rows:
            temp = {}
            temp['Order_id'] = row[0]
            temp['Price'] = row[1]
            temp['Time'] = row[2]
            temp['isComplete'] = row[3]
            temp['Type'] = row[4]
            temp['Platform'] = row[5]
            temp['machineLearning'] = row[6]
            temp['dataMining'] = row[7]
            temp['Maintenance'] = row[8]
            temp['SaaS'] = row[9]
            temp['Backstage'] = row[10]
            temp['Provider_id'] = row[11]
            temp['Manager_id'] = row[12]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['GET'])
def maxOrder(request):
    try:
        cursor = connection.cursor()
        cursor.execute('select * from Orders where Price=(select max(Price) from Orders)')
        rows = cursor.fetchall()
        cursor.close()
        data = []
        for row in rows:
            temp = {}
            temp['Order_id'] = row[0]
            temp['Price'] = row[1]
            temp['Time'] = row[2]
            temp['isComplete'] = row[3]
            temp['Type'] = row[4]
            temp['Platform'] = row[5]
            temp['machineLearning'] = row[6]
            temp['dataMining'] = row[7]
            temp['Maintenance'] = row[8]
            temp['SaaS'] = row[9]
            temp['Backstage'] = row[10]
            temp['Provider_id'] = row[11]
            temp['Manager_id'] = row[12]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['GET'])
def showOrder(request):
    try:
        cursor = connection.cursor()
        cursor.execute('select * from Orders')
        rows = cursor.fetchall()
        cursor.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Order_id'] = row[0]
            temp['Price'] = row[1]
            temp['Time'] = row[2]
            temp['isComplete'] = row[3]
            temp['Type'] = row[4]
            temp['Platform'] = row[5]
            temp['machineLearning'] = row[6]
            temp['dataMining'] = row[7]
            temp['Maintenance'] = row[8]
            temp['SaaS'] = row[9]
            temp['Backstage'] = row[10]
            temp['Provider_id'] = row[11]
            temp['Manager_id'] = row[12]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['POST'])
def addOrder(request):
    try:
        request = json.loads(request.body.decode('utf-8'))
        price = request['Price']
        time = request['Time']
        isComplete = request['isComplete']
        applicationType = request['applicationType']
        platform = request['Platform']
        ml = request['machineLearning']
        dm = request['dataMining']
        mt = request['Maintenance']
        saas = request['SaaS']
        backstage = request['Backstage']
        providerId = request['providerId']
        managerId = request['managerId']
        cursor = connection.cursor()
        cursor.callproc('addOrder', (price, time, isComplete, applicationType, platform, ml, dm, mt, saas, backstage, providerId, managerId))
        cursor.close()
        cursor2 = connection.cursor()
        cursor2.execute('select * from Orders')
        rows = cursor2.fetchall()
        cursor2.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Order_id'] = row[0]
            temp['Price'] = row[1]
            temp['Time'] = row[2]
            temp['isComplete'] = row[3]
            temp['Type'] = row[4]
            temp['Platform'] = row[5]
            temp['machineLearning'] = row[6]
            temp['dataMining'] = row[7]
            temp['Maintenance'] = row[8]
            temp['SaaS'] = row[9]
            temp['Backstage'] = row[10]
            temp['Provider_id'] = row[11]
            temp['Manager_id'] = row[12]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['POST'])
def deleteOrder(request):
    try:
        request = json.loads(request.body.decode('utf-8'))
        id = request['orderId']
        cursor = connection.cursor()
        cursor.callproc('deleteOrder', [id, ])
        cursor.close()
        cursor2 = connection.cursor()
        cursor2.execute('select * from Orders')
        rows = cursor2.fetchall()
        cursor2.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Order_id'] = row[0]
            temp['Price'] = row[1]
            temp['Time'] = row[2]
            temp['isComplete'] = row[3]
            temp['Type'] = row[4]
            temp['Platform'] = row[5]
            temp['machineLearning'] = row[6]
            temp['dataMining'] = row[7]
            temp['Maintenance'] = row[8]
            temp['SaaS'] = row[9]
            temp['Backstage'] = row[10]
            temp['Provider_id'] = row[11]
            temp['Manager_id'] = row[12]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['POST'])
def modifyOrder(request):
    try:
        request = json.loads(request.body.decode('utf-8'))
        id = request['orderId']
        price = request['Price']
        time = request['Time']
        isComplete = request['isComplete']
        applicationType = request['applicationType']
        platform = request['Platform']
        ml = request['machineLearning']
        dm = request['dataMining']
        mt = request['Maintenance']
        saas = request['SaaS']
        backstage = request['Backstage']
        providerId = request['providerId']
        managerId = request['managerId']
        cursor = connection.cursor()
        cursor.callproc('modifyOrder', (id, price, time, isComplete, applicationType, platform, ml, dm, mt, saas, backstage, providerId, managerId))
        cursor.close()
        cursor2 = connection.cursor()
        cursor2.execute('select * from Orders')
        rows = cursor2.fetchall()
        cursor2.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Order_id'] = row[0]
            temp['Price'] = row[1]
            temp['Time'] = row[2]
            temp['isComplete'] = row[3]
            temp['Type'] = row[4]
            temp['Platform'] = row[5]
            temp['machineLearning'] = row[6]
            temp['dataMining'] = row[7]
            temp['Maintenance'] = row[8]
            temp['SaaS'] = row[9]
            temp['Backstage'] = row[10]
            temp['Provider_id'] = row[11]
            temp['Manager_id'] = row[12]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['POST'])
def getOrderById(request):
    try:
        request = json.loads(request.body.decode('utf-8'))
        id = request['orderId']
        cursor = connection.cursor()
        cursor.execute('select * from Orders where Orders.Order_id = ' + id)
        rows = cursor.fetchall()
        cursor.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Order_id'] = row[0]
            temp['Price'] = row[1]
            temp['Time'] = row[2]
            temp['isComplete'] = row[3]
            temp['Type'] = row[4]
            temp['Platform'] = row[5]
            temp['machineLearning'] = row[6]
            temp['dataMining'] = row[7]
            temp['Maintenance'] = row[8]
            temp['SaaS'] = row[9]
            temp['Backstage'] = row[10]
            temp['Provider_id'] = row[11]
            temp['Manager_id'] = row[12]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)