from django.urls import path

from . import views
from rest_framework.decorators import api_view

urlpatterns = [
        path('show/', views.showProduct),
        path('delete/', views.deleteProduct),
        path('add/', views.addProduct),
        path('modify/', views.modifyProduct),
        path('getbyid/', views.getProductById)
]