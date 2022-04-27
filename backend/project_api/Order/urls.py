from django.urls import path

from . import views
from rest_framework.decorators import api_view

urlpatterns = [
        path('max/', views.maxOrder),
        path('show/', views.showOrder),
        path('delete/', views.deleteOrder),
        path('add/', views.addOrder),
        path('modify/', views.modifyOrder),
        path('getbyid/', views.getOrderById),
        path('complete/', views.completeOrder),
        path('notcomplete/', views.notCompleteOrder)
]