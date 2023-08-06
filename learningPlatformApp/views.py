from django.shortcuts import render

from django.http import HttpResponse
from ai_scripts import toeft_reading_script, ort_analogy


def getToeflTest(request):
    response = toeft_reading_script.getToeflTest()
    return HttpResponse(response, content_type="application/json")


def get_ort_analogy_test(request):
    response = ort_analogy.get_ort_analogy_test()
    return HttpResponse(response, content_type="application/json")