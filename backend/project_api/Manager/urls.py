from django.urls import path

from . import views
from rest_framework.decorators import api_view

urlpatterns = [
        path('add/', views.addManager),
        path('modify/', views.modifyManager),
        path('delete/', views.deleteManager),
        path('show/', views.showManager),
        path('getbyid/', views.getManagerById)
]