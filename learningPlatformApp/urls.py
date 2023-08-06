from django.urls import path

from . import views

urlpatterns = [
    path('tests/toefl/reading', views.getToeflTest),
    path('tests/ort/analogy', views.get_ort_analogy_test)
]