from django.shortcuts import render

from django.http import HttpResponse
from ai_scripts import toeft_reading_script


def getToeflTest(request):
    response = toeft_reading_script.getToeflTest()
    return HttpResponse(response, content_type="application/json")
