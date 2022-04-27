from django.urls import path

from . import views
from rest_framework.decorators import api_view

urlpatterns = [
        path('add/', views.addCustomer),
        path('modify/', views.modifyCustomer),
        path('delete/', views.deleteCustomer),
        path('show/', views.showCustomer),
        path('getbyid/', views.getById),
        path('max/', views.maxCustomer)
]