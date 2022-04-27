from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db import connection
import pymysql
import json
# Create your views here.


@api_view(['GET'])
def showProvider(request):
    try:
        cursor = connection.cursor()
        cursor.execute('select * from Provider')
        rows = cursor.fetchall()
        cursor.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Provider_id'] = row[0]
            temp['companyName'] = row[1]
            temp['Type'] = row[2]
            temp['teamSize'] = row[3]
            temp['quotedPrice'] = row[4]
            temp['officialWebsite'] = row[5]
            temp['Frontend'] = row[6]
            temp['Backend'] = row[7]
            temp['dataAnalysis'] = row[8]
            temp['UI'] = row[9]
            temp['Logo'] = row[10]
            temp['Illustration'] = row[11]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['POST'])
def deleteProvider(request):
    try:
        request = json.loads(request.body.decode('utf-8'))
        id = request['providerId']
        cursor = connection.cursor()
        cursor.callproc('deleteProvider', [id, ])
        cursor.close()
        cursor2 = connection.cursor()
        cursor2.execute('select * from Provider')
        rows = cursor2.fetchall()
        cursor2.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Provider_id'] = row[0]
            temp['companyName'] = row[1]
            temp['Type'] = row[2]
            temp['teamSize'] = row[3]
            temp['quotedPrice'] = row[4]
            temp['officialWebsite'] = row[5]
            temp['Frontend'] = row[6]
            temp['Backend'] = row[7]
            temp['dataAnalysis'] = row[8]
            temp['UI'] = row[9]
            temp['Logo'] = row[10]
            temp['Illustration'] = row[11]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['POST'])
def addProvider(request):
    try:
        request = json.loads(request.body.decode('utf-8'))
        companyName = request['companyName']
        type = request['Type']
        teamSize = request['teamSize']
        quotedPrice = request['quotedPrice']
        officialWebsite = request['officialWebsite']
        Frontend = request['Frontend']
        Backend = request['Backend']
        dataAnalysis = request['dataAnalysis']
        ui = request['Ui']
        logo = request['Logo']
        illustration = request['Illustration']
        cursor = connection.cursor()
        cursor.callproc('addProvider', (companyName, type, teamSize, quotedPrice, officialWebsite, Frontend, Backend, dataAnalysis, ui, logo, illustration))
        cursor.close()
        cursor2 = connection.cursor()
        cursor2.execute('select * from Provider')
        rows = cursor2.fetchall()
        cursor2.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Provider_id'] = row[0]
            temp['companyName'] = row[1]
            temp['Type'] = row[2]
            temp['teamSize'] = row[3]
            temp['quotedPrice'] = row[4]
            temp['officialWebsite'] = row[5]
            temp['Frontend'] = row[6]
            temp['Backend'] = row[7]
            temp['dataAnalysis'] = row[8]
            temp['UI'] = row[9]
            temp['Logo'] = row[10]
            temp['Illustration'] = row[11]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['POST'])
def modifyProvider(request):
    try:
        request = json.loads(request.body.decode('utf-8'))
        id = request['providerId']
        companyName = request['companyName']
        type = request['Type']
        teamSize = request['teamSize']
        quotedPrice = request['quotedPrice']
        officialWebsite = request['officialWebsite']
        Frontend = request['Frontend']
        Backend = request['Backend']
        dataAnalysis = request['dataAnalysis']
        ui = request['Ui']
        logo = request['Logo']
        illustration = request['Illustration']
        cursor = connection.cursor()
        cursor.callproc('modifyProvider', (id, companyName, type, teamSize, quotedPrice, officialWebsite, Frontend, Backend, dataAnalysis, ui, logo, illustration))
        cursor.close()
        cursor2 = connection.cursor()
        cursor2.execute('select * from Provider')
        rows = cursor2.fetchall()
        cursor2.close()
        data = []
        list(rows)
        for row in rows:
            temp = {}
            temp['Provider_id'] = row[0]
            temp['companyName'] = row[1]
            temp['Type'] = row[2]
            temp['teamSize'] = row[3]
            temp['quotedPrice'] = row[4]
            temp['officialWebsite'] = row[5]
            temp['Frontend'] = row[6]
            temp['Backend'] = row[7]
            temp['dataAnalysis'] = row[8]
            temp['UI'] = row[9]
            temp['Logo'] = row[10]
            temp['Illustration'] = row[11]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)

@api_view(['POST'])
def getProviderById(request):
    try:
        request = json.loads(request.body.decode('utf-8'))
        id = request['providerId']
        cursor = connection.cursor()
        cursor.execute('select * from Provider where Provider.Provider_id = ' + id)
        rows = cursor.fetchall()
        cursor.close()
        list(rows)
        data = []
        for row in rows:
            temp = {}
            temp['Provider_id'] = row[0]
            temp['companyName'] = row[1]
            temp['Type'] = row[2]
            temp['teamSize'] = row[3]
            temp['quotedPrice'] = row[4]
            temp['officialWebsite'] = row[5]
            temp['Frontend'] = row[6]
            temp['Backend'] = row[7]
            temp['dataAnalysis'] = row[8]
            temp['UI'] = row[9]
            temp['Logo'] = row[10]
            temp['Illustration'] = row[11]
            data.append(temp)
    except:
        return Response(status=500)
    return Response(data)