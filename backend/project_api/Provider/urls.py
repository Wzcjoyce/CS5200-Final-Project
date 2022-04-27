from django.urls import path

from . import views
from rest_framework.decorators import api_view

urlpatterns = [
        path('show/', views.showProvider),
        path('delete/', views.deleteProvider),
        path('add/', views.addProvider),
        path('modify/', views.modifyProvider),
        path('getbyid/', views.getProviderById)
]