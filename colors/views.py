from django.shortcuts import render
from .models import Color
from django.views.generic import ListView
# Create your views here.

class ColorListView(ListView):
    model = Color
    template_name = 'main.html'
    context_object_name = 'renkler'
