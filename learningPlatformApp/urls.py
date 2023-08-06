from django.urls import path

from . import views

urlpatterns = [
    path('tests/toefl/reading', views.getToeflTest),
]