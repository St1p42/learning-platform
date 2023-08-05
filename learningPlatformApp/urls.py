from django.urls import path

from . import views

urlpatterns = [
    path('reading/', views.hello_world),
]