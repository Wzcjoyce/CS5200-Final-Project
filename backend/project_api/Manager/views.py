from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db import connection
import pymysql
import json
# Create your views here.


@api_view(['GET'])
def showManager(request):
    try:
        cursor = connection.cursor()
        cursor.execute('select * from Manager')
        rows = cursor.fetchall()
        cursor.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Manager_id'] = row[0]
            temp['firstName'] = row[1]
            temp['lastName'] = row[2]
            temp['Email'] = row[3]
            temp['Gender'] = row[4]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['POST'])
def addManager(request):
    try:
        request = json.loads(request.body.decode('utf-8'))
        first_name = request['firstName']
        last_name = request['lastName']
        email = request['Email']
        gender = request['Gender']
        cursor = connection.cursor()
        cursor.callproc('addManager', (first_name, last_name, email, gender))
        cursor.close()
        cursor2 = connection.cursor()
        cursor2.execute('select * from Manager')
        rows = cursor2.fetchall()
        cursor2.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Manager_id'] = row[0]
            temp['firstName'] = row[1]
            temp['lastName'] = row[2]
            temp['Email'] = row[3]
            temp['Gender'] = row[4]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['POST'])
def deleteManager(request):
    try:
        request = json.loads(request.body.decode('utf-8'))
        id = request['managerId']
        cursor = connection.cursor()
        cursor.callproc('deleteManager', [id, ])
        cursor.close()
        cursor2 = connection.cursor()
        cursor2.execute('select * from Manager')
        rows = cursor2.fetchall()
        cursor2.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Manager_id'] = row[0]
            temp['firstName'] = row[1]
            temp['lastName'] = row[2]
            temp['Email'] = row[3]
            temp['Gender'] = row[4]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['POST'])
def modifyManager(request):
    try:
        request = json.loads(request.body.decode('utf-8'))
        id = request['managerId']
        first_name = request['firstName']
        last_name = request['lastName']
        email = request['Email']
        gender = request['Gender']
        cursor = connection.cursor()
        cursor.callproc('modifyManager', (id, first_name, last_name, email, gender))
        cursor.close()
        cursor2 = connection.cursor()
        cursor2.execute('select * from Manager')
        rows = cursor2.fetchall()
        cursor2.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Manager_id'] = row[0]
            temp['firstName'] = row[1]
            temp['lastName'] = row[2]
            temp['Email'] = row[3]
            temp['Gender'] = row[4]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['POST'])
def getManagerById(request):
    try:
        request = json.loads(request.body.decode('utf-8'))
        id = request['managerId']
        cursor = connection.cursor()
        cursor.execute('select * from Manager where Manager.Manager_id = ' + id)
        rows = cursor.fetchall()
        cursor.close()
        list(rows)
        data = []
        for row in rows:
            temp = {}
            temp['Manager_id'] = row[0]
            temp['firstName'] = row[1]
            temp['lastName'] = row[2]
            temp['Email'] = row[3]
            temp['Gender'] = row[4]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)