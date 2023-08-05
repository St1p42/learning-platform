from django.shortcuts import render
from django.http import JsonResponse
from ai_scripts import toefl_reading_ai


def hello_world(request):
    generated_reading_passage = toefl_reading_ai.generate_passage()
    print(generated_reading_passage)
    return JsonResponse(generated_reading_passage)
